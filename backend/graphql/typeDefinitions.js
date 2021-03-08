const { gql} = require('apollo-server');

const typeDefs = gql`
  type User {
    userID: ID 
  }

  type Community {
    communityID: ID
    communityName: String
    communityDescription: String
  }

  enum Status {
    admin
    user
  }

  type CommunityStatus {
    communityStatusID: ID
    communityStatus: Status
  }

  type CommunityMember{
    communityMemberID: ID
    communityID: ID
    communityStatusID: ID
  }

  type CommunityProposal {
    communityID: ID
    communityProposalID: ID
    communityProposalName: String
    communityProposalDescription: String
  }

  
  type CommunityProposalMember {
    communityProposalID: ID
    userID: ID
  }

  type Interest {
    interestID: ID
    interestName: String
    interestGroupID: ID
  }

  type InterestGroup {
    interestGroupID: ID
    interestGroupName: String
  }

  type UserInterest {
    userID: ID
    interestID: ID
  }

  type CommunityInterest {
    communityID: ID
    interestID: ID
  }

  type UserCommunityRank {
    userId: ID
    communityId: ID
    score: Int
  }

  type Query {
    user(userID: ID): User
    community(communityID: ID): Community
  }
`

module.exports = typeDefs

// communities(userID: ID): [Community]
// status(userID: ID, communityID:): CommunityStatus
// communityProposal(communityProposalID: ID): CommunityProposal
// communityProposalMember(communityProposalID: ID): CommunityProposalMember
// }

// type Mutation {
// register(username: String, password: String): User
// createCommunity(userID: ID, communityName: String, communityDescription: String): Community
// createCommunityProposal(userID: ID, communityID: ID, communityProposalName: String, communityProposalDescription: String): CommunityProposal
// }