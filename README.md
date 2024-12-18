# Demo of Express.js

This is a simple demo of Express.js. It is a simple web server that listens on port 3000 and serves a single page with a form that allows you to enter your name and submit it. When you submit the form, the server will respond with a greeting that includes your name.

## Features

* This file is the entry point for the express server. 
 * There are a few things happening here:
 * 1. We import the express module
 * 2. We create an instance of the express server
 * 3. We define a route for the root path of the server
 * 4. We start the server on port 3000
 * We access params with req.params
 * We access query string parameters with req.query
 * We can access the body of a POST request with req.body (You need to use the express.json() middleware)
 * We can send a response with res.send() or res.json()
 * We also have a few other routes defined in this file.
 * The /cats route returns an array of cat objects
 * The /cats/:id route returns a single cat object
 * The /cats POST route is used to create a new cat object
 * The /homes route returns an array of home objects
 * The /homes POST route is used to create a new home object
 * The /names/:nameId route returns a single name object
 * The /users route is used to create a new user object
 * This is a starting point for building a RESTful API with Express.
 * See the other branches for more details

## Installation

To install the dependencies, run:

```bash
npm install
```

## Running the Server

To run the server, run:

```bash
npm start
```

Then, open your web browser and navigate to [http://localhost:3000](http://localhost:3000).

## Accessing the API

Open Postman and make a GET request to [http://localhost:3000/cats](http://localhost:3000/cats) to see a list of cats.

Make a POST request to [http://localhost:3000/cats](http://localhost:3000/cats) with a JSON body to create a new cat. 

## Routes and Nested Routes

### Routes

Routes are used to define the paths that the server will respond to. They are defined using the `app.get()`, `app.post()`, `app.put()`, and `app.delete()` methods on the express application object. [Example](https://github.com/rmccrear/express-demo-lv-4/blob/models-day-2/index.js)

### Models - the M in MVC

Models are used to define the data that the server will work with. They are defined as classes that represent the data that the server will work with. [Example: see the cats object, here.](https://github.com/rmccrear/express-demo-lv-4/blob/models-day-2/index.js)

### Nested Routes

Nested routes are used to define routes that are nested within other routes. They are defined by chaining route handlers together using the `app.use("/cats", catRoutes )` method. [Example](https://github.com/rmccrear/express-demo-lv-4/blob/routes-day-3/routes/songs.js)

## Middleware

Middleware is used to process requests before they are handled by the route handler. They run in the order they are defined in the code. After competing, the must call `next()` to pass control to the next middleware in the chain.

![Middleware Diagram](./docs/middleware-diagram.png)