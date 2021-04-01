import {useState, useEffect} from 'react';

import * as R from 'ramda'
import { useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'

export default function useUser(bucketname, filename, type) {
  const [link, setLink] = useState(null)
  const {loading, data, error} = useQuery( gql`
  mutation createPresignedLink($bucketName: String, $filename: String, $type: String) {
    createPresignedLink(bucketName: $bucketName, filename: $filename, type: $type)
  }
`, {
    variables: { bucketname, filename, type },
    skip: R.isNil(type),
    onCompleted: ({link}) => {
      setLink(link)
    }
  })
  return link
}




