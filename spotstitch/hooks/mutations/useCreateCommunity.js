import { useState, useEffect } from 'react'
import { useQuery, useMutation } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'

export default function useCreateCommunityMutation(userID, communityID, communityName, communityDescription) {
  const [community, setCommunity] = useState(false)
  const {loading, data, error} = useMutation(gql`
  mutation CreateCommunity($userID:ID, $communityName: String, $communityDescription: String){
    createCommunity(userID:$userID, communityName: $communityName, communityDescription: $communityDescription) {
       communityID
      communityName
    }
  }
  `, {
    variables: { userID, communityID, communityName, communityDescription },
    onCompleted: ({community}) => {
      setCommunity(community)
    }
  })


  return community
}
