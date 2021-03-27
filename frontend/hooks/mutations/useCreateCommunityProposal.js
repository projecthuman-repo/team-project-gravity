import { useState, useEffect } from 'react'
import { useQuery, useMutation } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'

export default function useCreateCommunityProposalMutation(userID, communityID, communityProposalName, communityProposalDescription) {
  const [communityProposal, setCommunityProposal] = useState(false)
  const {loading, data, error} = useMutation(gql`
  mutation CreateCommunityProposal($userID:ID, $communityID:ID, $communityProposalName: String, $communityProposalDescription: String){
    createCommunityProposal(userID:$userID, communityID: $communityID, communityProposalName: $communityProposalName, communityProposalDescription: $communityProposalDescription) {
      communityProposalID
      communityProposalName
    }
  }
  `, {
    variables: { userID, communityID, communityProposalName, communityProposalDescription },
    onCompleted: ({communityProposal}) => {
      setCommunityProposal(communityProposal)
    }
  })


  return communityProposal
}
