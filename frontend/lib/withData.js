import withApollo from "next-with-apollo";
import ApolloClient from "apollo-boost";
import { devEndpoint, prodEndpoint } from "../config";

function createClient({ headers }) {
  return new ApolloClient({
    uri: process.env.NODE_ENV === "development" ? devEndpoint : prodEndpoint,
    request: operation => {
      operation.setContext({
        fetchOptions: {
          credentials: "include",
          Access-Control-Allow-Origin: 'https://hotel-next-prod.herokuapp.com'
        },
        headers
      });
    }
  });
}

export default withApollo(createClient);
