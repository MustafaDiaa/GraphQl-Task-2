export const typeDefs = `#graphql
  type User {
    id: ID
    name: String!
    username: String!
    email: String!
  }

  type Query {
    getAllUsers: [User]
    getUserById(id: ID!): User
  }
`;
