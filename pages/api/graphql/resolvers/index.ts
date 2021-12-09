import { gql } from "apollo-server-micro";
import { menu, menuSchemas } from "./menu";

export const typeDefs = gql`
  type Query {
    menu: [Drink]
  }

  ${menuSchemas}
`;

const resolvers = {
  Query: {
    menu,
  },
};

export default resolvers;
