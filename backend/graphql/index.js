const { ApolloServer } = require('apollo-server-express');
const path = require('path');
const express = require("express");


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

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const app = express();
const server = new ApolloServer({ typeDefs, resolvers, context });
server.applyMiddleware({ app });

app.use(express.static(path.join(__dirname, "../../spotstitch/web-build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../../spotstitch/web-build/index.html"));
});

//START GRAPHQL SERVER ONCE DATABASE CONNECTED & MODELS AVAILABLE
const port = process.env.PORT || 4000;
sequelizeConnection.authenticate().then(() => {
    console.log('mySQL database connection established successfully')
    app.listen(port, () => {
      console.log(`Server ready at ${port}`);
    })
})