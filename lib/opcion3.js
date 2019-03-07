import ApolloClient,{InMemoryCache} from 'apollo-boost'
import 'isomorphic-fetch'
import gql from "graphql-tag"

const client = new ApolloClient({
	cache: new InMemoryCache({
        	addTypename: (key, value) => (key === '__typename' ? false : value)
    	}),
	uri: 'http://localhost:8090/graphql',
  	fetchOptions :{
  		mode: 'no-cors'
  	}
})

//const newPayload = JSON.parse(JSON.stringify(payload), omitTypename)

export default client.query({
  query: gql`
      {
        subadminsAll {
        	nombres,
        	paterno
        }
      }
    `
    ,
})
  .then(result=>result.data)
  .catch(error =>error);