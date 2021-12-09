import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";

const URI = `http://localhost:3000/api/graphql`;
export default new ApolloClient({
  link: new HttpLink({ uri: URI, credentials: "include" }),
  cache: new InMemoryCache({
    addTypename: false,
  }),
});
