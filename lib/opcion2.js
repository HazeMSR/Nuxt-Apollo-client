import { createApolloFetch } from 'apollo-fetch'

const uri = 'http://localhost:8090/graphql'

export const query = `
  query loquesea {
    subadminsAll {
      nombres
    }
  }
`

const apolloFetch = createApolloFetch({ uri})

export default apolloFetch({ query }).then(result=>{return result.data})
