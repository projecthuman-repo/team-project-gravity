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
    communityProposalMemberID: ID
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
    status(userID: ID): CommunityStatus
    communityProposal(communityProposalID: ID): CommunityProposal
    communityProposalMember(userID: ID, communityProposalID: ID): CommunityProposalMember
  }
`

module.exports = typeDefs




// type Mutation {
// register(username: String, password: String): User
// createCommunity(userID: ID, communityName: String, communityDescription: String): Community
// createCommunityProposal(userID: ID, communityID: ID, communityProposalName: String, communityProposalDescription: String): CommunityProposal
// }