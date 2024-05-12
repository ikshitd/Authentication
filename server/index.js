const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const typeDefs = require("./Schema/TypeDefs.js");
const resolvers = require("./Schema/Resolvers.js");
const jwt = require("jsonwebtoken");
const cors = require("cors");

const app = new express();
const port = 8080;

const SECRET = "jfdjfkdjfiwu923892839283fuiaadfjdkfj";

const models = require("./models/index.js");
app.use(cors());

const startServer = async () => {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req, res }) => {
      const token = req.headers["Authorization"] || "";
      console.log("tokekn", token);
      try {
        const decodedToken = jwt.verify(token, SECRET);
        return { user: decodedToken, req, res, models, SECRET };
      } catch (err) {
        return { req, res, models, SECRET };
      }
    },
  });
  await server.start();
  server.applyMiddleware({ app });
};

startServer();

models.sequelize.sync().then((req) => {
  app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
  });
});
