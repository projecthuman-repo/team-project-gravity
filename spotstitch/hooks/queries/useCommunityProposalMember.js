import {useState, useEffect} from 'react';
import * as R from 'ramda'
import * as RA from 'ramda-adjunct'

import { useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'

export default function useCommunityProposalMember(communityProposalID) {
  const [communityProposalMember, setCommunityProposalMember] = useState(null)
  const {loading, data, error} = useQuery(gql`
query CommunityProposalMember($communityProposalID: ID){
    communityProposalMember(communityProposalID: $communityProposalID) {
      communityProposalID
      communityProposalMemberID
    }
  }
  `, {
    variables: { communityProposalID },
    skip: R.isNil(communityID),
    onCompleted: ({communityProposalMember }) => {
      setCommunityProposalMember(communityProposalMember)
    }
  })
  return communityProposalMember
}

