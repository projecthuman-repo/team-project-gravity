import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { createUploadLink } from 'apollo-upload-client'
import { useState, useEffect } from 'react'
import { useQuery, useMutation } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'
import * as RA from 'ramda-adjunct'

export default function useCreateCommunityProposalMutation(userID, username, password) {
  const [user, setUser] = useState(false)
  const {loading, data, error} = useMutation(gql`
  mutation Register($userID:ID, $username: String, $password: String){
    register(userID:$userID, username: $username, password: $password) {
      userID
    }
  }`, {
    variables: { userID, username, password },
    onCompleted: ({user}) => {s
      setUser(user)
    }
  })


  return user
}
 
  