const { ApolloServer, gql } = require('apollo-server');


const sequelizeConnection = require('../database/db')
const typeDefs = require('./typeDefinitions')
const resolvers = require('./resolvers')


const books = [
    {
      title: 'The Awakening',
      author: 'Kate Chopin',
    },
    {
      title: 'City of Glass',
      author: 'Paul Auster',
    },
  ];



// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({ typeDefs, resolvers });

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