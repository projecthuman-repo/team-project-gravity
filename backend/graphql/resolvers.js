const { gql, ApolloError } = require('apollo-server');
const R = require('ramda')
const { v4: uuidv4 } = require('uuid')

const resolvers = {
  Query: {
    user: async (parent, { userID }, { User }) => {
      const userInfo = await User.findOne({ where : {id: userID}});
      return {"userID": userInfo.dataValues.id};
    },
    community: async (parent, { communityID }, { Community }) => {
      const communityInfo = await Community.findOne({ where : {id: communityID}});
      return {
        "communityID": communityInfo.dataValues.id,
        "communityName": communityInfo.dataValues.name,
        "communityDescription": communityInfo.dataValues.description
      }
    },
    status: async (parent, { userID}, { CommunityMember, CommunityStatus }) => {
      const communityMemberInfo = await CommunityMember.findOne({ where : {userId: userID}});
      const communityStatusID = communityMemberInfo.dataValues.communityStatusId;
      const communityStatusInfo = await CommunityStatus.findOne({ where : {id: communityStatusID}});
      return {
        "communityStatusID": communityStatusInfo.dataValues.id,
        "communityStatus": communityStatusInfo.dataValues.status,
      }
    },
    communityProposalMember: async (parent, { userID, communityProposalID}, { CommunityProposalMember}) => {
      if(userID){
        communityProposalMemberInfo = await CommunityProposalMember.findOne({ where : {userId: userID}});
      }
      if(communityProposalID){
        communityProposalMemberInfo = await CommunityProposalMember.findOne({ where : {communityProposalId: communityProposalID}});
      }
      return {
        "communityProposalID": communityProposalMemberInfo.dataValues.communityProposalId,
        "communityProposalMemberID": communityProposalMemberInfo.dataValues.userId,
      }
    }
  },
  Mutation: {
    register: async (parent, { userID, username, password }, { User }) => {
      const existing = await User.findOne({ where : {id: userID}});
      if (!existing) {
        const newUser = new User({id: userID})
        await newUser.save()
        return {"userID": newUser.dataValues.id};
      } else {
        throw new ApolloError('User already exists')
      }
    },
    createCommunity: async (parent, { userID, communityName, communityDescription }, { Community}) => {
      //const reqRep = 1000
      //get some kind of user rep score to check it before making a comm 
      const existing = await Community.findOne({ where : {name: communityName}});
      if (!existing) {
        const newCommunity = new Community({id: uuidv4(), name: communityName, description: communityDescription})
        await newCommunity.save()
        return {
          "communityID": newCommunity.dataValues.id,
          "communityName": newCommunity.dataValues.name,
          "communityDescription": newCommunity.dataValues.description
        }
      } else {
        throw new ApolloError('Community with this name already exists')
      }
    },
    createCommunityProposal: async (parent, { userID, communityID, communityProposalName, communityProposalDescription }, { CommunityProposal, UserCommunityRank }) => {
      const reqScore = 10
      const userRank = await UserCommunityRank.findOne({ where : {userId: userID}});
      const allCommunityProposals = await CommunityProposal.findAll({ where : {communityId: communityID}});
      const existing = R.find(R.propEq('name', communityProposalName), allCommunityProposals)
      if (!existing && userRank.dataValues.score >= reqScore){
        const newCommunityProposal = new CommunityProposal({id: uuidv4(), communityId: communityID, name: communityProposalName, description: communityProposalDescription})
        await newCommunityProposal.save()
        return {
          "communityProposalID": newCommunityProposal.dataValues.id,
          "communityProposalName": newCommunityProposal.dataValues.name,
          "communityProposalDescription": newCommunityProposal.dataValues.description
        }
      } else {
        throw new ApolloError('Community Proposal with this name already exists')
      }
    },
  }

  
}

module.exports = resolvers