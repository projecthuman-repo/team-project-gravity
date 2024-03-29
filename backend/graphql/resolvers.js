const { gql, ApolloError } = require('apollo-server');
const R = require('ramda')
const { v4: uuidv4 } = require('uuid')
const { minioClient } = require('../minioClient')

const resolvers = {
  Query: {
    user: async (parent, { userID }, { User }) => {
      if (userID === '') {
        return null;
      }
      const userInfo = await User.findOne({ where : {id: userID}});
      if (userInfo) {
        return {
          "userID": userInfo.dataValues.id,
          "bio": userInfo.dataValues.bio,
          "name": userInfo.dataValues.name
        }
      } else {
        // throw new ApolloError(`userID:${userID} doesn't exist`);
        return {};
      }
    },
    community: async (parent, { communityID }, { Community }) => {
      const communityInfo = await Community.findOne({ where : {id: communityID}});
      if (communityInfo) {
        return {
          "communityID": communityInfo.dataValues.id,
          "communityName": communityInfo.dataValues.name,
          "communityDescription": communityInfo.dataValues.description
        }
      } else {
        throw new ApolloError(`communityID:${communityID} doesn't exist`);
      }
    },
    status: async (parent, { userID}, { CommunityMember, CommunityStatus }) => {
      const communityMemberInfo = await CommunityMember.findOne({ where : {userId: userID}});
      if (communityMemberInfo) {
        const communityStatusID = communityMemberInfo.dataValues.communityStatusId;
        const communityStatusInfo = await CommunityStatus.findOne({ where : {id: communityStatusID}});
        if (communityStatusInfo) {
          return {
            "communityStatusID": communityStatusInfo.dataValues.id,
            "communityStatus": communityStatusInfo.dataValues.status,
          }
        } else {
          throw new ApolloError(`communityStatusID:${communityStatusID} doesn't exist`);
        }
      } else {
        throw new ApolloError(`userID:${userID} doesn't exist`);
      }
    },
    communityProposalMember: async (parent, { userID, communityProposalID}, { CommunityProposalMember}) => {
      if(userID){
        communityProposalMemberInfo = await CommunityProposalMember.findOne({ where : {userId: userID}});
        if (!communityProposalMemberInfo) {
          throw new ApolloError(`userID:${userID} doesn't exist`);
        }
      }
      if(communityProposalID){
        communityProposalMemberInfo = await CommunityProposalMember.findOne({ where : {communityProposalId: communityProposalID}});
        if (!communityProposalMemberInfo) {
          throw new ApolloError(`communityProposalID:${communityProposalID} doesn't exist`);
        }
      }
      if (communityProposalMemberInfo) {
        return {
          "communityProposalID": communityProposalMemberInfo.dataValues.communityProposalId,
          "communityProposalMemberID": communityProposalMemberInfo.dataValues.userId,
        }
      }
    },
  findUsersCommunities: async (parent, { userID}, { CommunityMember, Community}) => {
      //CommunityMember.findAll({include: Community})
      communityInfo= await CommunityMember.findAll({ where: {userId : userID}, attributes: ['userId', 'communityId']});
      if (!communityInfo) {
        throw new ApolloError(`userID:${userID} is not a member of a community`);
      }
      let communityArray;
      for (i = 0; i < communityInfo.length; i++) {
          let communityID = communityInfo[i].dataValues.communityId
          latestCommunityInfo= await Community.findOne({ where : {id: communityID}});
          if (latestCommunityInfo) {
            if(i==0){
              communityArray = [{
                "communityID": latestCommunityInfo.dataValues.id,
                "communityName": latestCommunityInfo.dataValues.name,
                "communityDescription": latestCommunityInfo.dataValues.description
              }]
            }
            else {
              communityArray.push({
                "communityID": latestCommunityInfo.dataValues.id,
                "communityName": latestCommunityInfo.dataValues.name,
                "communityDescription": latestCommunityInfo.dataValues.description
              })
            }
          } 
      }
      return communityArray
    },
    findAllCommunities: async (parent, {}, { Community}) => {
      communityInfo= await Community.findAll();
      let communityArray;
      for (i = 0; i < communityInfo.length; i++) {
            if(i==0){
              communityArray = [{
                "communityID": communityInfo[i].dataValues.id,
                "communityName": communityInfo[i].dataValues.name,
                "communityDescription": communityInfo[i].dataValues.description
              }]
            }
            else {
              communityArray.push({
                "communityID": communityInfo[i].dataValues.id,
                "communityName": communityInfo[i].dataValues.name,
                "communityDescription": communityInfo[i].dataValues.description
              })
            }
      }
      return communityArray
    },
    findCommunitysUsers: async (parent, {communityID}, { CommunityMember, User}) => {
      communityMemberInfo = await CommunityMember.findAll({ where : {communityId: communityID}, attributes: ['userId', 'communityId']});
      if (!communityMemberInfo) {
        throw new ApolloError(`communityID:${communityID} doesn't have any members`);
      }
      let userArray;
      for (i = 0; i < communityMemberInfo.length; i++) {
          let userID = communityMemberInfo[i].dataValues.userId
          latestUserInfo= await User.findOne({ where : {id: userID}});
          if (latestUserInfo) {
            if(i==0){
              userArray = [{
                "userID": latestUserInfo.dataValues.id,
                "bio": latestUserInfo.dataValues.bio,
                "name" : latestUserInfo.dataValues.name
              }]
            }
            else {
              userArray.push({
                "userID": latestUserInfo.dataValues.id,
                "bio": latestUserInfo.dataValues.bio,
                "name" : latestUserInfo.dataValues.name
              })
            }
          } 
      }
      return userArray
  },
  createPresignedLink: async (parent, { bucketname, filename, type },{ }) => {
    let bucketnameFinal
      if(type == "community"){
        let existing = await Community.findOne({ where : {id: bucketname}});
        if(existing){
          bucketnameFinal= 'community-'+ bucketname
        }
        else{
          console.log("community doesn't exist")
          return null
        }
      }
      else if(type == "communityProposal"){
        let existing = await CommunityProposal.findOne({ where : {id: bucketname}});
        if(existing){
            bucketnameFinal= 'communityProposal-'+ bucketname
        }
        else{
          return null
        }
      
      }
      else{
        let existing = await User.findOne({ where : {id: bucketname}});
        if(existing){
          bucketnameFinal= 'user-'+ bucketname
        }
        else{
          return null
        }
      }
    return new Promise((resolve, reject) => {
      minioClient.presignedGetObject(
        `${bucketnameFinal}`,
        `${objectName}`,
        24 * 60 * 60,
        {
          'response-content-disposition': `attachment; filename=${filename}`
        },
        function(err, presignedUrl) {
          if (err) return reject(err)
          resolve(presignedUrl)
        }
      )
    })
  },
  findallCommunityProposals: async (parent, {communityID}, { CommunityProposal}) => {
    communityProposalInfo = await CommunityProposal.findAll({ where : {communityId: communityID}});
    if (!communityProposalInfo) {
      throw new ApolloError(`communityID:${communityID} doesn't have any proposals`);
    }
    let proposalArray;
    for (i = 0; i < communityProposalInfo.length; i++) {
          if(i==0){
            proposalArray = [{
              "communityProposalID": communityProposalInfo[i].dataValues.id,
              "communityProposalName": communityProposalInfo[i].dataValues.name,
              "communityProposalDescription": communityProposalInfo[i].dataValues.description
            }]
          }
          else {
            proposalArray.push({
              "communityProposalID": communityProposalInfo[i].dataValues.id,
              "communityProposalName": communityProposalInfo[i].dataValues.name,
              "communityProposalDescription": communityProposalInfo[i].dataValues.description
            })
          }
    }
    return proposalArray
},
},
  Mutation: {
    register: async (parent, { userID, bio, name}, { User }) => {
      console.log("register called")
      const existing = await User.findOne({ where : {id: userID}});
      if (!existing) {
        const newUser = new User({id: userID, bio: bio, name: name})
        await newUser.save()
        minioClient.makeBucket(`user-${newUser.dataValues.id}`, 'us-east-1', function(err) {
          if (err) return console.log(err)
          console.log('Users bucket created successfully in "us-east-1".')
        })
        return {
          "userID": newUser.dataValues.id,
          "bio": newUser.dataValues.bio,
          "name": newUser.dataValues.name
      };
      } else {
        throw new ApolloError('User already exists')
      }
    },
    createCommunity: async (parent, { userID, communityName, communityDescription }, { Community, CommunityStatus, CommunityMember}) => {
      //const reqRep = 1000
      //get some kind of user rep score to check it before making a comm 
      const existing = await Community.findOne({ where : {name: communityName}});
      if (!existing) {
        const newCommunity = new Community({id: uuidv4(), name: communityName, description: communityDescription})
        await newCommunity.save()
        console.log(newCommunity.dataValues.id)
        minioClient.makeBucket(`community-${newCommunity.dataValues.id}`, 'us-east-1', function(err) {
          if (err) return console.log(err)
          console.log('Communitys bucket created successfully in "us-east-1".')
        })
        //add the user that made the community to the community
        const newStatus = new CommunityStatus({id: uuidv4(), status: "admin"})
        await newStatus.save()
        const communityStatusValue = newStatus.dataValues.id
        console.log(communityStatusValue)
        const newMember = new CommunityMember({userId: userID, communityId: newCommunity.dataValues.id, communityStatusId: communityStatusValue})
        await newMember.save()
        return {
          "communityID": newCommunity.dataValues.id,
          "communityName": newCommunity.dataValues.name,
          "communityDescription": newCommunity.dataValues.description
        }
      } else {
        throw new ApolloError('Community with this name already exists')
      }
    },
    createCommunityProposal: async (parent, { userID, communityID, communityProposalName, communityProposalDescription }, { CommunityProposal, CommunityMember }) => {
      const userIn = await CommunityMember.findOne({ where : {userId: userID}});
      const allCommunityProposals = await CommunityProposal.findAll({ where : {communityId: communityID}});
      const existing = R.find(R.propEq('name', communityProposalName), allCommunityProposals)
      if (!existing && userIn){
        const newCommunityProposal = new CommunityProposal({id: uuidv4(), communityId: communityID, name: communityProposalName, description: communityProposalDescription})
        await newCommunityProposal.save()
        minioClient.makeBucket(`proposal-${newCommunityProposal.dataValues.id}`, 'us-east-1', function(err) {
          if (err) return console.log(err)
          console.log('CommunityProposal bucket created successfully in "us-east-1".')
        })
        return {
          "communityProposalID": newCommunityProposal.dataValues.id,
          "communityProposalName": newCommunityProposal.dataValues.name,
          "communityProposalDescription": newCommunityProposal.dataValues.description,
        }
      } else {
        throw new ApolloError('Community Proposal with this name already exists')
      }
    },
    addFileUpload: async (parent, { bucketname, type, file, filename}, {Community, CommunityProposal, User}) => {
      const {mimetype, encoding, stream } = await file
      console.log("TYPE" + type)
      let bucketnameFinal
      if(type == "community"){
        let existing = await Community.findOne({ where : {id: bucketname}});
        if(existing){
          bucketnameFinal= 'community-'+ bucketname
        }
        else{
          console.log("community doesn't exist")
          return null
        }
      }
      else if(type == "communityProposal"){
        let existing = await CommunityProposal.findOne({ where : {id: bucketname}});
        if(existing){
            bucketnameFinal= 'proposal-'+ bucketname
        }
        else{
          return null
        }
      
      }
      else{
        let existing = await User.findOne({ where : {id: bucketname}});
        if(existing){
          bucketnameFinal= 'user-'+ bucketname
        }
        else{
          return null
        }
      }
      console.log("BUCKETNAME" + bucketnameFinal)
      minioClient.putObject(`${bucketnameFinal}`, `${filename}`, stream, function(
        err,
        etag
      ) {
        if (err) {
          return console.log(err)
        }
      })
      return null
    },
    addCommunityMember: async (parent, { userID, communityID, status }, { Community, CommunityMember, CommunityStatus }) => {
      console.log("add member called")
        const existing = await CommunityMember.findOne({ where : {userId: userID, communityId: communityID}});
        if (!existing) {
            const newStatus = new CommunityStatus({id: uuidv4(), status: status})
            await newStatus.save()
            console.log(status)
            const communityStatusValue = newStatus.dataValues.id
            console.log(communityStatusValue)
            const newMember = new CommunityMember({userId: userID, communityId: communityID, communityStatusId: communityStatusValue})
            await newMember.save()
            return {
              "communityMemberID": newMember.dataValues.userId,
              "communityID": newMember.dataValues.communityId,
              "communityStatusID": newMember.dataValues.communityStatusId,
            };
        } else {
          throw new ApolloError('CommunityMember already exists')
        }
      
    }
  }

  
}

module.exports = resolvers