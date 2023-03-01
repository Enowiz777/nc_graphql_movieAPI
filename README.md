# GraphQL Movie API

## 1. Intro

*What is GraphQL?*
- Innovation on top of GraphQL such as PostGraphile database. 
- Hasura gives GraphQL API on your DB for free. 

## 2. Requirements
- This is designed for a developer who built REST API. 
- If you are studying to be a full stack, this would be good. 
- You can implement Python and GraphQL if you want. They query language would be same. 

## 3. Software Requirements

- we can experience GraphQL. 
- Browser
- VScode
- NodeJS version 16+

## 4. API

API reference:
https://developer.mozilla.org/ko/docs/Web/API

*What is API (Application Programming Interface)?*
- Understand API is not only REST API or GraphQL API.
- API is much broader. 
- Interface is how you interact with something. 
- For example, remote controller can be seen as an interface. 
- There are many API in the browser as well. When you initiate, it will perform certain functions. 
- This is basically commands or button that the developers exposed so that developers can use. (Browser API: more functions or commands that developers use to interact with the app.)

## 5. What is API?

- Why use API. You want to communicate with the backend. 
- If you want to create your own app and you want to interact with the backend server. 
- The difference between GraphQL and REST are how they communicate with the server 


- Any devices can call API. 
- YTS movie API documentation
https://yts.mx/api/v2/list_movies.json
- 

## 6. What is REST?

- We want to communicate with a backend. 
- REST: server communicate with a server or iOS application with the server, they use URL. 
- ex: nomadmovies.co/api/movies will get 100 movies data from the back-end server.  
- /1 can view the movie number 1 . 
- There are many things that you can do. You can expose the ratings. 
- put parameters /?rating=9.
- When we use REST API the results are predictable because people use same conventions.
    - nomadmovies.co/api/movies
    - nomadmovies.co/api/movies/1
    - nomadmovies.co/api/search?rating=9

What are the difference between REST and GRAPH API?
- buttons or urls look different. 
- Documentation about API usually on the website. 

## 7. REST + HTTP
- If you want to create new movie, it is not good to use REST API like nomadmovies.co/api/movies/create.
- Many people may different convention like create, update, etc.
- We can rely on HTTP methods. 
- Using Methods+ URL, you can make few more things possible. 
- In Twitter, it tells you which methods you should use to request for data with API. 
- combine URL, with REST 

- GET /2/user/enoch/bookmarks
- POST /2/users/enoch/bookmarks
- PUT - update 
- DELETE - delete

## 8. Recap
- There are different HTTP methods but the main ones are GET, POST, PUT, and DELETE. 
- 

## 9. What is GraphQL?
- What problem does this technology fixes?
- GraphQL is not download. It is a specification. Facebook's mobile app have been powered by GraphQL since 2012. 
- A GraphQL spec was open sourced in 2015 and is now available in many environments and used by teams. 
- Spec: specification - texts of idea.
- > Implement in Javascript - graphql-js.
- GraphQL idea can be translated to multiple languages like JS, Python, and others. 
- People created GraphQL server that follows GraphQL specs.
- There are many big companies, BrainTree, Air bnb Github, Meta, 


## 10. Overfetching
- GraphQL is a direct response to REST API. 
- REST API has two main problems. 
1. Fixes a problem called overfetching. 
- When you request data using REST API, you get a lot of data and you are overfetching. You are receiving data more than you need. 
- Your database needs to work harder - more 
- The front-end may be slower because it may get all the data to the front and then needs to paint them. 
- Using GraphQL, you can only ask exactly what you want. 

## 11. Underfetching

- Another problem that REST API has is underfetching, you fetch less than what you need. 
- Movie database API is a normal REST API. There are many things that you can get. There are many API methods for movies. There are a lot of stuff. There are movie/now_playing URL. 
- You are getting a lot of API but you are getting underfetching. 
- If I want to show these movies on the screen, you want to show the title and others. There are many variables, but you want to get the detailed data sometimes, not summarized data. 
- Description from the GraphQL website:
GraphQL queries access not just the properties of one resource but also smoothly follow references between them. While typical REST APIs require loading from multiple URLs, GraphQL APIs get all the data your app needs in a single request. 
- ex: if you want to get the movies and genre, you have to fire two API requests.

# Try GraphQL

- We are going to experience GraphQL API.
- We are going to eat the ice cream first. 
- https://graphql.org/swapi-graphql: you can interact with GraphQL API.
- Click on the root and see all the data that you can query.
- Whenever you are curious, click on the things that you can get. 

ex 1:

Input:
```js
{
  allFilms {
    totalCount
  }
}
```
Output:
```js
{
  "data": {
    "allFilms": {
      "totalCount": 6
    }
  }
}
```

ex 2:

Input:
```js
{
  allFilms {
    totalCount
    films {
      title
    }
  }
}
```

Output:
```js
{
  "data": {
    "allFilms": {
      "totalCount": 6,
      "films": [
        {
          "title": "A New Hope"
        },
        {
          "title": "The Empire Strikes Back"
        },
        {
          "title": "Return of the Jedi"
        },
        {
          "title": "The Phantom Menace"
        },
        {
          "title": "Attack of the Clones"
        },
        {
          "title": "Revenge of the Sith"
        }
      ]
    }
  }
}
```
- Everything has a type > you can get nice auto-complete. 

Input:
```js
{
  allFilms {
    totalCount
    films {
      title
    }
  }
  allPeople {
    people {
      name
      hairColor
      eyeColor
      birthYear
    }
  }
}

```
Output:
```js
{
  "data": {
    "allFilms": {
      "totalCount": 6,
      "films": [
        {
          "title": "A New Hope"
        },
        {
          "title": "The Empire Strikes Back"
        },
        {
          "title": "Return of the Jedi"
        },
        {
          "title": "The Phantom Menace"
        },
        {
          "title": "Attack of the Clones"
        },
        {
          "title": "Revenge of the Sith"
        }
      ]
    },
    "allPeople": {
      "people": [
        {
          "name": "Luke Skywalker",
          "hairColor": "blond",
          "eyeColor": "blue",
          "birthYear": "19BBY"
        },
        {
          "name": "C-3PO",
          "hairColor": "n/a",
          "eyeColor": "yellow",
          "birthYear": "112BBY"
        },
        {
          "name": "R2-D2",
          "hairColor": "n/a",
          "eyeColor": "red",
          "birthYear": "33BBY"
        },
        {
          "name": "Darth Vader",
          "hairColor": "none",
          "eyeColor": "yellow",
          "birthYear": "41.9BBY"
        },
        {
          "name": "Leia Organa",
          "hairColor": "brown",
          "eyeColor": "brown",
          "birthYear": "19BBY"
        },
        {
          "name": "Owen Lars",
          "hairColor": "brown, grey",
          "eyeColor": "blue",
          "birthYear": "52BBY"
        },
        {
          "name": "Beru Whitesun lars",
          "hairColor": "brown",
          "eyeColor": "blue",
          "birthYear": "47BBY"
        },
        {
          "name": "R5-D4",
          "hairColor": "n/a",
          "eyeColor": "red",
          "birthYear": "unknown"
        },
        {
          "name": "Biggs Darklighter",
          "hairColor": "black",
          "eyeColor": "brown",
          "birthYear": "24BBY"
        },
        {
          "name": "Obi-Wan Kenobi",
          "hairColor": "auburn, white",
          "eyeColor": "blue-gray",
          "birthYear": "57BBY"
        },
        {
          "name": "Anakin Skywalker",
          "hairColor": "blond",
          "eyeColor": "blue",
          "birthYear": "41.9BBY"
        },
        {
          "name": "Wilhuff Tarkin",
          "hairColor": "auburn, grey",
          "eyeColor": "blue",
          "birthYear": "64BBY"
        },
        {
          "name": "Chewbacca",
          "hairColor": "brown",
          "eyeColor": "blue",
          "birthYear": "200BBY"
        },
        {
          "name": "Han Solo",
          "hairColor": "brown",
          "eyeColor": "brown",
          "birthYear": "29BBY"
        },
        {
          "name": "Greedo",
          "hairColor": "n/a",
          "eyeColor": "black",
          "birthYear": "44BBY"
        },
        {
          "name": "Jabba Desilijic Tiure",
          "hairColor": "n/a",
          "eyeColor": "orange",
          "birthYear": "600BBY"
        },
        {
          "name": "Wedge Antilles",
          "hairColor": "brown",
          "eyeColor": "hazel",
          "birthYear": "21BBY"
        },
        {
          "name": "Jek Tono Porkins",
          "hairColor": "brown",
          "eyeColor": "blue",
          "birthYear": "unknown"
        },
        {
          "name": "Yoda",
          "hairColor": "white",
          "eyeColor": "brown",
          "birthYear": "896BBY"
        },
        {
          "name": "Palpatine",
          "hairColor": "grey",
          "eyeColor": "yellow",
          "birthYear": "82BBY"
        },
        {
          "name": "Boba Fett",
          "hairColor": "black",
          "eyeColor": "brown",
          "birthYear": "31.5BBY"
        },
        {
          "name": "IG-88",
          "hairColor": "none",
          "eyeColor": "red",
          "birthYear": "15BBY"
        },
        {
          "name": "Bossk",
          "hairColor": "none",
          "eyeColor": "red",
          "birthYear": "53BBY"
        },
        {
          "name": "Lando Calrissian",
          "hairColor": "black",
          "eyeColor": "brown",
          "birthYear": "31BBY"
        },
        {
          "name": "Lobot",
          "hairColor": "none",
          "eyeColor": "blue",
          "birthYear": "37BBY"
        },
        {
          "name": "Ackbar",
          "hairColor": "none",
          "eyeColor": "orange",
          "birthYear": "41BBY"
        },
        {
          "name": "Mon Mothma",
          "hairColor": "auburn",
          "eyeColor": "blue",
          "birthYear": "48BBY"
        },
        {
          "name": "Arvel Crynyd",
          "hairColor": "brown",
          "eyeColor": "brown",
          "birthYear": "unknown"
        },
        {
          "name": "Wicket Systri Warrick",
          "hairColor": "brown",
          "eyeColor": "brown",
          "birthYear": "8BBY"
        },
        {
          "name": "Nien Nunb",
          "hairColor": "none",
          "eyeColor": "black",
          "birthYear": "unknown"
        },
        {
          "name": "Qui-Gon Jinn",
          "hairColor": "brown",
          "eyeColor": "blue",
          "birthYear": "92BBY"
        },
        {
          "name": "Nute Gunray",
          "hairColor": "none",
          "eyeColor": "red",
          "birthYear": "unknown"
        },
        {
          "name": "Finis Valorum",
          "hairColor": "blond",
          "eyeColor": "blue",
          "birthYear": "91BBY"
        },
        {
          "name": "Padmé Amidala",
          "hairColor": "brown",
          "eyeColor": "brown",
          "birthYear": "46BBY"
        },
        {
          "name": "Jar Jar Binks",
          "hairColor": "none",
          "eyeColor": "orange",
          "birthYear": "52BBY"
        },
        {
          "name": "Roos Tarpals",
          "hairColor": "none",
          "eyeColor": "orange",
          "birthYear": "unknown"
        },
        {
          "name": "Rugor Nass",
          "hairColor": "none",
          "eyeColor": "orange",
          "birthYear": "unknown"
        },
        {
          "name": "Ric Olié",
          "hairColor": "brown",
          "eyeColor": "blue",
          "birthYear": "unknown"
        },
        {
          "name": "Watto",
          "hairColor": "black",
          "eyeColor": "yellow",
          "birthYear": "unknown"
        },
        {
          "name": "Sebulba",
          "hairColor": "none",
          "eyeColor": "orange",
          "birthYear": "unknown"
        },
        {
          "name": "Quarsh Panaka",
          "hairColor": "black",
          "eyeColor": "brown",
          "birthYear": "62BBY"
        },
        {
          "name": "Shmi Skywalker",
          "hairColor": "black",
          "eyeColor": "brown",
          "birthYear": "72BBY"
        },
        {
          "name": "Darth Maul",
          "hairColor": "none",
          "eyeColor": "yellow",
          "birthYear": "54BBY"
        },
        {
          "name": "Bib Fortuna",
          "hairColor": "none",
          "eyeColor": "pink",
          "birthYear": "unknown"
        },
        {
          "name": "Ayla Secura",
          "hairColor": "none",
          "eyeColor": "hazel",
          "birthYear": "48BBY"
        },
        {
          "name": "Ratts Tyerel",
          "hairColor": "none",
          "eyeColor": "unknown",
          "birthYear": "unknown"
        },
        {
          "name": "Dud Bolt",
          "hairColor": "none",
          "eyeColor": "yellow",
          "birthYear": "unknown"
        },
        {
          "name": "Gasgano",
          "hairColor": "none",
          "eyeColor": "black",
          "birthYear": "unknown"
        },
        {
          "name": "Ben Quadinaros",
          "hairColor": "none",
          "eyeColor": "orange",
          "birthYear": "unknown"
        },
        {
          "name": "Mace Windu",
          "hairColor": "none",
          "eyeColor": "brown",
          "birthYear": "72BBY"
        },
        {
          "name": "Ki-Adi-Mundi",
          "hairColor": "white",
          "eyeColor": "yellow",
          "birthYear": "92BBY"
        },
        {
          "name": "Kit Fisto",
          "hairColor": "none",
          "eyeColor": "black",
          "birthYear": "unknown"
        },
        {
          "name": "Eeth Koth",
          "hairColor": "black",
          "eyeColor": "brown",
          "birthYear": "unknown"
        },
        {
          "name": "Adi Gallia",
          "hairColor": "none",
          "eyeColor": "blue",
          "birthYear": "unknown"
        },
        {
          "name": "Saesee Tiin",
          "hairColor": "none",
          "eyeColor": "orange",
          "birthYear": "unknown"
        },
        {
          "name": "Yarael Poof",
          "hairColor": "none",
          "eyeColor": "yellow",
          "birthYear": "unknown"
        },
        {
          "name": "Plo Koon",
          "hairColor": "none",
          "eyeColor": "black",
          "birthYear": "22BBY"
        },
        {
          "name": "Mas Amedda",
          "hairColor": "none",
          "eyeColor": "blue",
          "birthYear": "unknown"
        },
        {
          "name": "Gregar Typho",
          "hairColor": "black",
          "eyeColor": "brown",
          "birthYear": "unknown"
        },
        {
          "name": "Cordé",
          "hairColor": "brown",
          "eyeColor": "brown",
          "birthYear": "unknown"
        },
        {
          "name": "Cliegg Lars",
          "hairColor": "brown",
          "eyeColor": "blue",
          "birthYear": "82BBY"
        },
        {
          "name": "Poggle the Lesser",
          "hairColor": "none",
          "eyeColor": "yellow",
          "birthYear": "unknown"
        },
        {
          "name": "Luminara Unduli",
          "hairColor": "black",
          "eyeColor": "blue",
          "birthYear": "58BBY"
        },
        {
          "name": "Barriss Offee",
          "hairColor": "black",
          "eyeColor": "blue",
          "birthYear": "40BBY"
        },
        {
          "name": "Dormé",
          "hairColor": "brown",
          "eyeColor": "brown",
          "birthYear": "unknown"
        },
        {
          "name": "Dooku",
          "hairColor": "white",
          "eyeColor": "brown",
          "birthYear": "102BBY"
        },
        {
          "name": "Bail Prestor Organa",
          "hairColor": "black",
          "eyeColor": "brown",
          "birthYear": "67BBY"
        },
        {
          "name": "Jango Fett",
          "hairColor": "black",
          "eyeColor": "brown",
          "birthYear": "66BBY"
        },
        {
          "name": "Zam Wesell",
          "hairColor": "blonde",
          "eyeColor": "yellow",
          "birthYear": "unknown"
        },
        {
          "name": "Dexter Jettster",
          "hairColor": "none",
          "eyeColor": "yellow",
          "birthYear": "unknown"
        },
        {
          "name": "Lama Su",
          "hairColor": "none",
          "eyeColor": "black",
          "birthYear": "unknown"
        },
        {
          "name": "Taun We",
          "hairColor": "none",
          "eyeColor": "black",
          "birthYear": "unknown"
        },
        {
          "name": "Jocasta Nu",
          "hairColor": "white",
          "eyeColor": "blue",
          "birthYear": "unknown"
        },
        {
          "name": "R4-P17",
          "hairColor": "none",
          "eyeColor": "red, blue",
          "birthYear": "unknown"
        },
        {
          "name": "Wat Tambor",
          "hairColor": "none",
          "eyeColor": "unknown",
          "birthYear": "unknown"
        },
        {
          "name": "San Hill",
          "hairColor": "none",
          "eyeColor": "gold",
          "birthYear": "unknown"
        },
        {
          "name": "Shaak Ti",
          "hairColor": "none",
          "eyeColor": "black",
          "birthYear": "unknown"
        },
        {
          "name": "Grievous",
          "hairColor": "none",
          "eyeColor": "green, yellow",
          "birthYear": "unknown"
        },
        {
          "name": "Tarfful",
          "hairColor": "brown",
          "eyeColor": "blue",
          "birthYear": "unknown"
        },
        {
          "name": "Raymus Antilles",
          "hairColor": "brown",
          "eyeColor": "brown",
          "birthYear": "unknown"
        },
        {
          "name": "Sly Moore",
          "hairColor": "none",
          "eyeColor": "white",
          "birthYear": "unknown"
        },
        {
          "name": "Tion Medon",
          "hairColor": "none",
          "eyeColor": "black",
          "birthYear": "unknown"
        }
      ]
    }
  }
}
```

# Setup
- Create first graphQL API
- Apollo Server: it is like node.js but it implements GraphQL specs. 
- You can run apollo server just by itself and work like node.js server.
- You can run the Apollo on top of existing server like express.js and node.js as long as you set the middleware. 
- Install apollo server and graphql and nodemon -d
```bash
# start nodejs server.
npm init -y
# Install apollo server and graphql
npm i apollo-server graphql
# Install nodemon as a dev dependency.
npm i nodemon -D
# Create a server js and gitignore file
touch server.js
touch .gitignore
```
"script" - add "dev":"nodemon server.js"

server.js
```js
// implement ApolloServer and gql.
import { ApolloServer, gql } from "apollo-server-express";

```
GraphQL documentation:
https://www.apollographql.com/docs/apollo-server/getting-started/

# Query Type
- GraphQL needs to know the shape of the data before you start. 
- REST API is collection of many URLs. 
- Graph API is collection of many types. 
- You are describing the types. 
- Schema - Mongoose - you have to explain the shape. 
- There are very nice documentation of what we need to do to create the schema. 

This is from the documentation website.
```js
// Create a shape of the data - Define your GraphQL schema.

const typeDefs = `#graphql
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  # This "Book" type defines the queryable fields for every book in our data source.
  type Book {
    title: String
    author: String
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "books" query returns an array of zero or more Books (defined above).
  type Query {
    books: [Book]
  }
`;
```

- Apollo studio allows you to interact the server. 
- Query that we wrote shows
-
Input: 
```js
{
  hello
  text
}
```
Output:
```js
{
  "data": {
    "hello": null,
    "text": null
  }
}
```

- we have to write the code to produce the result after create a schema.
- Scalar types are the ones that are built in to the GraphQL.
- ex: Boolean, ID, String etc.

```js
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
`;
```
- Tweet is created by a User. 
- allTweets will give many Tweets.
- tweet returns one Tweet. We don't know which tweet that we are talking about. We have to give the UID or ID to retrieve an exact Tweet that the person wants. 
- These are explanation of types. 