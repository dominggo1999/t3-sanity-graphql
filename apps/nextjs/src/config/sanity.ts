import { GraphQLClient } from "graphql-request";

const API_URL = "https://bwv0yn3c.api.sanity.io/v1/graphql/production/default";

const sanityCLient = new GraphQLClient(API_URL);

export default sanityCLient;
