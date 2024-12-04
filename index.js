import express from 'express';

const app = express();

// middleware for json POST body
app.use(express.json());

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

  res.json({
    name: "cat number " + id
  });
})

// cat resource
app.post("/cats", (req, res) => {
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

app.post("/homes", (req, res) => {
  const homesData = req.body;
  console.log(homesData.name);
  res.status(200).send(homesData);
});

app.get('/names/:nameId', (req, res) => {
  const x = req.params.nameId;
  console.log(x);
  res.json({
    "name": "name" + x
  })
});

app.get("/homes", (req, res) => {
  res.json([
    { name: "Craftsman" },
    { name: "Lulemon" },
    { name: "Shotgun"}

  ])
});



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


app.listen(3000, () => {
  console.log("started server!!! on port 3000")
})