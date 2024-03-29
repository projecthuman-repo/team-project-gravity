import {useState, useEffect} from 'react';

import * as R from 'ramda'
import { useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'

export default function useCommunityQuery(communityID) {
  const [community, setCommunity] = useState(null)
  const {loading, data, error} = useQuery(gql`
    query Community($communityID: ID){
    community(communityID: $communityID) {
      communityID
      communityName
      communityDescription
    }
  }
  `, {
    variables: { communityID },
    skip: R.isNil(communityID),
    onCompleted: ({community}) => {
      setCommunity(community)
    }
  })
  return community
}