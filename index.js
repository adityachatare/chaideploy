const express = require("express");
const app = express();
const port = 3000;
require('dotenv').config()

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.get("/twitter", (req, res) => {
  res.send("We are at twitter");
});

app.get("/login", (req, res) => {
  res.send("<h1>Please login at chai and code</h1>");
});

app.get('/youtube',(req,res)=>{
    res.send("<h2> Chai aur code </h2>")
})

app.listen(process.env.port, () => {
  console.log(`Listening at port ${process.env.port}`);
});
