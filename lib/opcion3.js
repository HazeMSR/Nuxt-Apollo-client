import ApolloClient from 'apollo-boost'
import { InMemoryCache } from 'apollo-cache-inmemory'
import 'isomorphic-fetch'
import gql from "graphql-tag"

const cache = new InMemoryCache({
        addTypename: (key, value) => (key === '__typename' ? false : value)
    })

const client = new ApolloClient({
	cache,
	uri: 'http://localhost:8090/graphql',
  	fetchOptions :{
  		mode: 'no-cors'
  	}
})

//const newPayload = JSON.parse(JSON.stringify(payload), omitTypename)

export default client.query({
  query: gql`
      query loquesea {
        subadminsAll {
        	nombres
        }
      }
    `
    ,
})
  .then(result=>result.data)
  .catch(error =>error);