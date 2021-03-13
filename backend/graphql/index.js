const { ApolloServer, gql } = require('apollo-server');


const database = require('../database/db')
const sequelizeConnection = database.Conn
const User = database.User
const Community = database.Community
const CommunityMember = database.CommunityMember
const CommunityStatus = database.CommunityStatus
const CommunityProposal = database.CommunityProposal
const CommunityProposalMember = database.CommunityProposalMember
const UserCommunityRank = database.UserCommunityRank
const typeDefs = require('./typeDefinitions')
const resolvers = require('./resolvers')

const context = async ({ req }) => {
  return {
    req,
    User,
    Community,
    CommunityMember,
    CommunityStatus,
    CommunityProposal,
    CommunityProposalMember,
    UserCommunityRank,
  }
}

// const books = [
//     {
//       title: 'The Awakening',
//       author: 'Kate Chopin',
//     },
//     {
//       title: 'City of Glass',
//       author: 'Paul Auster',
//     },
//   ];



// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({ typeDefs, resolvers, context });

//START GRAPHQL SERVER ONCE DATABASE CONNECTED & MODELS AVAILABLE
// The `listen` method launches a web server.
sequelizeConnection.authenticate().then(() => {
      console.log('mySQL database connection established successfully')
      server.listen().then(({ url }) => {
        console.log(`🚀  Server ready at ${url}`);
      })
      .catch(err => console.log('Unable to connect to mySQL database: ', err))
    })

// server.listen().then(({ url }) => {
//   console.log(`🚀  Server ready at ${url}`);
// })