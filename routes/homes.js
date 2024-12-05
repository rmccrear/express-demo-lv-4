import { Router } from "express";


const homeRoute = new Router();

homeRoute.get("/hello", (req, res) => {
  res.send("Hello from homes.");
});


const homes = [
  {
    "owner": "Bob McGee",
    "address": "2122 N Main Street",
    "bathrooms": 2
  },
  {
    "owner": "Betty McGee",
    "address": "2123 N Main Street",
    "bathrooms": 1.5
  }
]


homeRoute.get("/", (req, res) => {
  res.json(homes);
});

export default homeRoute;
