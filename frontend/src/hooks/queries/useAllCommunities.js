import {useState, useEffect} from 'react';

import * as R from 'ramda'
import { useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'

export default function useAllCommunities() {
  const [communities, setCommunities] = useState([])
  const {loading, data, error} = useQuery(gql`
  query FindAllCommunities{
    findAllCommunities{
        communityName
        communityID
  }
}
  `, {
    onCompleted: ({communities}) => {
        console.log("INSIDE" + communities)
      setCommunities(communities)
    }
  })
  return communities
}




