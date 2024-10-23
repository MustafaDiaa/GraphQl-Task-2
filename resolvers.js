export const resolvers = {
  Query: {
    async getAllUsers(_, __, { dataSources }) {
      return dataSources.userAPI.getAllUsers();
    },

    async getUserById(_, { id }, { dataSources }) {
      return dataSources.userAPI.getUserById(id);
    },
  },
};
