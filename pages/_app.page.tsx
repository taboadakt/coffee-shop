import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ApolloProvider } from "../apollo/provider";
import { wrapper } from "../redux/store";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default wrapper.withRedux(MyApp);
