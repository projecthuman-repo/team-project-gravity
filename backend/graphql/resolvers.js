const { gql, ApolloError } = require('apollo-server');

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
}
  // Mutation: {
  //   register: async (parent, { username, password }, { User }) => {
  //     // const existing = await User.findOne({ username })
  //     // if (!existing) {
  //     //   const newUser = new User({ username, password })
  //     //   const { userID } = await newUser.save()
  //     //   // Make a bucket with the user's ID.
  //     //   minioClient.makeBucket(`${userID}`, 'us-east-1', function(err) {
  //     //     if (err) return console.log(err)
  //     //     console.log('Users bucket created successfully in "us-east-1".')
  //     //   })
  //     //   return newUser
  //     // } else {
  //     //   throw new ApolloError('User already exists')
  //     // }
  //   }
  // }

module.exports = resolvers