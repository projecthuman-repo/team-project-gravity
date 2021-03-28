import {useState, useEffect} from 'react';

import * as R from 'ramda'
import { useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'

export default function useAllCommunities() {
  const [communities, setCommunities] = useState(null)
  const {loading, data, error} = useQuery(gql`
  query FindAllCommunities{
    findAllCommunities{
    communityName
    communityID
  }
}
  `, {
    variables: { },
    onCompleted: ({communities}) => {
      setCommunities(communities)
    }
  })
  return communities
}




