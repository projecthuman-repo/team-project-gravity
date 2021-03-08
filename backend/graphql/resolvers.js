const { gql, ApolloError } = require('apollo-server');

const resolvers = {
  Query: {
    user: async (parent, { userID }, { User }) => {
      return await User.findOne({ where : {id: userID}})
      //User.findOne({id:userID}) 
    },
    community: async (parent, { communityID }, { Community }) => {
      console.log(await Community.findOne({ where : {id: communityID}}))
      //User.findOne({id:userID}) 
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