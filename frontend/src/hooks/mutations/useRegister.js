import { useState, useEffect } from 'react'
import { useQuery, useMutation } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'

export default function useRegister(userID, bio) {
  const [user, setUser] = useState(false)
  const {loading, data, error} = useMutation(gql`
  mutation Register($userID:ID, $bio: String){
    register(userID:$userID, bio: $bio) {
      userID
      bio
    }
  }`, {
    variables: { userID, bio },
    onCompleted: ({user}) => {
      setUser(user)
    }
  })


  return user
}
 
  