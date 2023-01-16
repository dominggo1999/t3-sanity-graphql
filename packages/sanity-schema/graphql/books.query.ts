import { gql } from "graphql-request";

export default gql`
  query GetBooks {
    allBook {
      _id
      title
      author
      description
    }
  }
`;
