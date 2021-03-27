import {useState, useEffect} from 'react';

import { useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'

export default function useFindCommunitysUsers(communityID) {
  const [users, setUsers] = useState(null)
  const {loading, data, error} = useQuery(gql`
  query FindCommunitysUsers($communityID: ID){
    findCommunitysUsers(communityID: $communityID){
    userID
  }
}`, {
    variables: { communityID },
    skip: R.isNil(communityID),
    onCompleted: ({users}) => {
        setUsers(users)
    }
  })
  return users
}





