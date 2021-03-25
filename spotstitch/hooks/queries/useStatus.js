import {useState, useEffect} from 'react';
import * as R from 'ramda'
import * as RA from 'ramda-adjunct'

import { useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'

export default function useStatusQuery(userID) {
  const [status, setStatus] = useState(null)
  const {loading, data, error} = useQuery(gql`
query Status($userID: ID){
    status(userID: $userID) {
      communityStatus
      communityStatusID
    }
  }  `, {
    variables: { communityID },
    skip: R.isNil(communityID),
    onCompleted: ({status}) => {
      setStatus(status)
    }
  })
  return status
}





