import { useState, useEffect } from 'react'
import { useQuery, useMutation } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'

export default function useRegister(userID, username, password) {
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
 
  