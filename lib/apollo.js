import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { HttpLink } from 'apollo-link-http'
import gql from "graphql-tag"
import 'isomorphic-fetch'

const cache = new InMemoryCache()
const link = new HttpLink({
  uri: 'http://localhost:8090/graphql'
})

const client = new ApolloClient({
  cache,
  link,
  fetchOptions :{
  	mode: 'no-cors'
  }
})

export default client
  .query({
    query: gql`
      query loquesea {
        subadminsAll {
        	nombres
        }
      }
    `
  }).then(result=>result.data)







