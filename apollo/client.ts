import { ApolloClient, InMemoryCache } from "@apollo/client";
import Constants from "expo-constants";
import { Platform } from "react-native";

const getLocalHostName = () => {
  // assumes you are running on LAN mode and running the server locally on port 5000
  const expoUrl = Constants.manifest.bundleUrl;

  const hostnameStartIndex = expoUrl.indexOf("//") + 2;
  const hostname = expoUrl.substring(
    hostnameStartIndex,
    expoUrl.indexOf(":", hostnameStartIndex)
  );

  return hostname;
};

const uri =
  Platform.OS === "web"
    ? "http://localhost:4000/graphql"
    : "http://localhost:4000/graphql".replace("localhost", getLocalHostName());

const client = new ApolloClient({
  uri,
  cache: new InMemoryCache(),
});

export default client;
