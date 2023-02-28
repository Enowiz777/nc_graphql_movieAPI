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