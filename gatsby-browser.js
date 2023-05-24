const React = require("react")
const Layout = require("./src/components/layout").default
const { ApolloClient, HttpLink, InMemoryCache, ApolloProvider } = require("@apollo/client")

const httpLink = new HttpLink({
  uri: process.env.GATSBY_FAUNADB_ENDPOINT,
  headers: {
    Authorization: `Bearer ${process.env.GATSBY_FAUNADB_SECRET}`,
  }
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
});

exports.wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>
}

exports.wrapRootElement = ({ element }) => (
  <ApolloProvider client={client}>{element}</ApolloProvider>
)