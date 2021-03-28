import {useState, useEffect} from 'react';


import { useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'

export default function useUser(userID) {
  const [user, setUser] = useState(null)
  const {loading, data, error} = useQuery(gql`
        query User($userID: ID){
            user(userID: $userID) {
            userID
            bio
            }
        }
  `, {
    variables: { userID },
    skip: R.isNil(userID),
    onCompleted: ({user}) => {
      setUser(user)
    }
  })
  return user
}



