import { ApolloServer } from "apollo-server-micro";
import resolvers, { typeDefs } from "./resolvers";

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
});

const startServer = apolloServer.start();

export default async function handler(req: any, res: any) {
  // TODO no any
  await startServer;
  await apolloServer.createHandler({
    path: "/api/graphql",
  })(req, res);
}

export const config = {
  api: {
    bodyParser: false,
  },
};
