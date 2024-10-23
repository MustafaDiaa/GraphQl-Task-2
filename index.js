import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { typeDefs } from "./schema.js";
import { resolvers } from "./resolvers.js";
import UserAPI from "./userAPI.js";

async function startServer() {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

  const { url } = await startStandaloneServer(server, {
    listen: { port: 3001 },
    context: async () => ({
      dataSources: {
        userAPI: new UserAPI(),
      },
    }),
  });

  console.log(`🚀 Server is up and running at ${url}`);
}

startServer().catch((err) => {
  console.error("Error starting server:", err);
});
