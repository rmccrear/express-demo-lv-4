/***
 * This file is the entry point for the express server. 
 * 
 * There are a few things happening here:
 * 
 * 1. We import the express module
 * 2. We create an instance of the express server
 * 3. We define a route for the root path of the server
 * 4. We start the server on port 3000
 * 
 * We access params with req.params
 * 
 * We access query string parameters with req.query
 * 
 * We can access the body of a POST request with req.body (You need to use the express.json() middleware)
 * 
 * We can send a response with res.send() or res.json()
 * 
 * We also have a few other routes defined in this file.
 * 
 * The /cats route returns an array of cat objects
 * The /cats/:id route returns a single cat object
 * The /cats POST route is used to create a new cat object
 * 
 * The /homes route returns an array of home objects
 * The /homes POST route is used to create a new home object
 * 
 * The /names/:nameId route returns a single name object
 * 
 * The /users route is used to create a new user object
 * 
 * This is a starting point for building a RESTful API with Express.
 * 
 * See the other branches for more details

*/
import express from 'express';
import homesRoute from './routes/homes.js';
import songsRoute from './routes/songs.js';

import { meower } from './middleware/meower.js';
import { dateLogger } from './middleware/dateLogger.js';
import { daysToXmas } from './middleware/daysToXmas.js';
import { catchPhrase } from './middleware/groupMiddleware.js';
import { cowSay } from './middleware/groupMiddleware.js'
import { authUser } from './middleware/groupMiddleware.js';
const app = express();

// middleware for json POST body
app.use(express.json());

app.use(daysToXmas);
app.use(meower);
app.use(dateLogger);
app.use(catchPhrase);
app.use(cowSay);
app.use(authUser);

app.use("/homes", homesRoute);
app.use('/songs', songsRoute);

app.get("/", (req, res) => {
  res.send("hello");
});

app.get("/cats", (req, res) => {
  res.json([
    { "name": "Fluffy" },
    { "name": "Frisky" },
    { "name": "Tank" }
  ]);
});

app.get("/cats/:id", (req, res) => {
  const id = req.params.id;
  const s = req.query.sepia;
  console.log(s);
  if(req.user){
    console.log("You are requesting cats as user: " + req.user.name);
  }

  res.json({
    name: "cat number " + id,
    "message": `the cat wants you to know that there are ${req.daysToXmas} days to Xmas`
  });
})

// cat resource
app.post("/cats", (req,res) => {
  const data = req.body;
  console.log(data.name);
  if (data.name) {
    res.status(200).send(data);
  } else {
    res.status(400).send({
      error: "name required"
    })
  }

});

// app.post("/homes", (req, res) => {
//   const homesData = req.body;
//   console.log(homesData.name);
//   res.status(200).send(homesData);
// });

// app.get('/names/:nameId', (req, res) => {
//   const x = req.params.nameId;
//   console.log(x);
//   res.json({
//     "name": "name" + x
//   })
// });

// app.get("/homes", (req, res) => {
//   res.json([
//     { name: "Craftsman" },
//     { name: "Lulemon" },
//     { name: "Shotgun"}

//   ])
// });



app.post('/users', (req, res) => {
  const userData = req.body;
  console.log(userData);
  res.status(200).send(userData);
})

app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  console.log(userId);
  res.json({ name: "user" + userId })
})





app.get('/hamsters/:id', (req, res) => {
  const id = req.params.id;
  console.log(id)
  res.json({
    name: "Hamster number:" + id
  })
});

// middleware
const handle404 = (req, res, next) => {
  res.status(404).json({
    message: "Cannot find resource."
  })
}
app.use(handle404);
// app.use((req, res, next) => {
//   res.status(404).json({
//     message: "Cannot find"
//   })
// });
app.listen(3000, () => {
  console.log("started server!!! on port 3000")
})