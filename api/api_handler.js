const fs = require("fs");
require("dotenv").config();
const { ApolloServer } = require("apollo-server-express");

const GraphQLDate = require("./graphql_date");
const users = require("./users");

const resolvers = {
  Query: {
    user: users.findUser,
    users: users.getUsers,
    userHabits: users.getHabits,
    completedHabits: users.getCompletedHabits,
    earnedBadges: users.getBadgesEarned,
  },
  Mutation: {
    insertUser: users.insertUser,
    insertHabit: users.insertHabit,
    updateHabit: users.updateHabit,
    deleteHabit: users.deleteHabit,
    updateCount: users.updateCount,
    updateBadges: users.updateBadgesEarned,
  },
  GraphQLDate,
};

const server = new ApolloServer({
  typeDefs: fs.readFileSync("schema.graphql", "utf-8"),
  resolvers,
  formatError: (error) => {
    console.log(error);
    return error;
  },
});

function installHandler(app) {
  const enableCors = (process.env.ENABLE_CORS || "true") === "true";
  console.log("CORS setting:", enableCors);
  server.applyMiddleware({ app, path: "/graphql", cors: enableCors });
}

module.exports = { installHandler };
