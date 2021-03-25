import {useState, useEffect} from 'react';
import * as R from 'ramda'
import * as RA from 'ramda-adjunct'

import { useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'

export default function useFindUsersCommunities(userID) {
  const [communities, setCommunities] = useState(null)
  const {loading, data, error} = useQuery(gql`
  query FindUsersCommunities($userID: ID){
    findUsersCommunities(userID: $userID){
    communityName
    communityID
  }
}`, {
    variables: { userID },
    skip: R.isNil(userID),
    onCompleted: ({communities}) => {
        setCommunities(communities)
    }
  })
  return communities
}





