const http = require('http');
const { ApolloServer } = require('apollo-server-express');
const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');
const { findOrCreateUser } = require('./controllers/userController');
const PORT = process.env.PORT || 4000;
require('dotenv').config();
const app = express();
app.use(express.static('public'));

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true
  })
  .then(() => console.log('db connected'))
  .catch(e => console.error(e));

const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,
  context: async ({ req, connection }) => {
    let authToken = null;
    let currentUser = null;
    try {
      if (connection) {
        return {
          ...connection.context
        };
      }
      authToken = req.headers.authorization;
      if (authToken) {
        currentUser = await findOrCreateUser(authToken);
      }
    } catch (err) {
      console.log(err);
      console.error('Unable to authenticate');
    }
    return { currentUser };
  }
});
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});
server.applyMiddleware({ app });
const httpServer = http.createServer(app);
server.installSubscriptionHandlers(httpServer);

httpServer.listen(process.env.PORT || 4000, () => {
  console.log(`🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`);
  console.log(`🚀 Subscriptions ready at ws://localhost:${PORT}${server.subscriptionsPath}`);
});
