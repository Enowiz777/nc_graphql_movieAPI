import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';


// another option: you need to put the type-module in the package.json
// const { ApolloServer, gql} = require("apollo-server")

// Create a shape of the data - Define your GraphQL schema.

const typeDefs = `
    type User {
        id: ID
        username: String
    }
    type Tweet {
        id: ID 
        text: String
        author: User
    }
    type Query {
        allTweets: [Tweet]
        tweet(id: ID): Tweet
    }
    type Mutation {
        postTweet(text:String, userId:ID): Tweet
        deleteTweet(id:ID): Boolean
    }
`;


// Create Server
const server = new ApolloServer({
    typeDefs,
  });
// Listen is a promise. It needs then.
const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
  });
console.log(`🚀  Server ready at: ${url}`);
