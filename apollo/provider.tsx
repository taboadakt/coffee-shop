import { ApolloProvider as ApolloHooksProvider } from "@apollo/client";
import client from "./client";

export const ApolloProvider = ({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element => {
  return <ApolloHooksProvider client={client}>{children}</ApolloHooksProvider>;
};
