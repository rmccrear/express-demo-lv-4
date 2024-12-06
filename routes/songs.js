import { Router } from 'express';

// import songsData from '../songsData.json' assert { type: 'json' };
import songsData from "../songsData.json" with { type: "json" };


const songsRoute = new Router();


songsRoute.get("/hello", (req, res) => {
  res.json("Hello")
});

songsRoute.get('/', (req, res) => {
  res.json(songsData)
})

songsRoute.get('/:id', (req,res) =>{
    const id = req.params.id;
    let song = songsData[id]
    res.json(song);
})



export default songsRoute; 