import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

// fake DB
let tweets = [
  {
    id: "1",
    text: "first one!",
    userId: "2",
  },
  {
    id: "2",
    text: "second one",
    userId: "1",
  },
];

let users = [
  {
    id: "1",
    firstName: "nico",
    lastName: "las",
  },
  {
    id: "2",
    firstName: "Elon",
    lastName: "Mask",
  },
];

// another option: you need to put the type-module in the package.json
// const { ApolloServer, gql} = require("apollo-server")

// Create a shape of the data - Define your GraphQL schema.

const typeDefs = `
    type User {
        id: ID!
        username: String!
        firstName: String!
        lastName: String!
        fullName: String!
    }
    type Tweet {
        id: ID 
        text: String
        author: User
    }
    type Query {
        allUsers: [User!]!
        allTweets: [Tweet!]!
        tweet(id: ID!): Tweet
      }
      type Mutation {
        postTweet(text: String!, userId: ID!): Tweet!
        deleteTweet(id: ID!): Boolean!
      }
`;

const resolvers = {
  Query: {
    allTweets() {
      return tweets;
    },
    // when the user sends argument, it will be the second argument of the resolver function 
    tweet(root, { id }) {
      return tweets.find((tweet) => tweet.id === id);
    },
    allUsers() {
      console.log("allUsers called!");
      return users;
    },
  },
  Mutation: {
    postTweet(_, { text, userId }) {
      const newTweet = {
        id: tweets.length + 1,
        text,
        userId,
      };
      tweets.push(newTweet);
      return newTweet;
    },
    deleteTweet(_, { id }) {
      const tweet = tweets.find((tweet) => tweet.id === id);
      // if the tweet is NOT FOUND, return False boolean value.
      if (!tweet) return false;
      // if found, return the array because the filter will return an array. You can user .filter() to exclude an element with the specific id which means to delete in user's perspective. 
      tweets = tweets.filter((tweet) => tweet.id !== id);
      return true;
    },
  },
  User: {
    fullName({ firstName, lastName }) {
      return `${firstName} ${lastName}`;
    },
  },
  Tweet: {
    author({ userId }) {
      return users.find((user) => user.id === userId);
    },
  },
};

// Create Server
const server = new ApolloServer({ typeDefs, resolvers });

// Listen is a promise. It needs then.
const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
  });
console.log(`🚀  Server ready at: ${url}`);
