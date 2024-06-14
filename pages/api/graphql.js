import { ApolloServer } from 'apollo-server-micro';
import { makeExecutableSchema } from '@graphql-tools/schema';
import Cors from 'cors';
import typeDefs from '../../graphql/typeDefs';
import resolvers from '../../graphql/resolvers';
import db from '../../lib/mongodb';
import { authMiddleware } from '../../utils/auth';

// Initialize the cors middleware
const cors = Cors({
  origin: 'https://studio.apollographql.com',
  credentials: true,
  methods: ['POST', 'OPTIONS'],
});

// Helper method to wait for middleware to execute before continuing
function runMiddleware(req, res, fn) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result);
      }
      return resolve(result);
    });
  });
}

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

const apolloServer = new ApolloServer({
  schema,
  context: ({ req }) => authMiddleware({ req }),
});

const startServer = apolloServer.start();

export default async function handler(req, res) {
  await runMiddleware(req, res, cors);
  await db;
  await startServer;
  await apolloServer.createHandler({ path: '/api/graphql' })(req, res);
}

export const config = {
  api: {
    bodyParser: false,
  },
};
