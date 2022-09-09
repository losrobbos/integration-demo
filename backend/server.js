// load .env variables into process.env object
const env = require("dotenv").config()
console.log(env)

const express = require('express');
const cors = require("cors")
const mongoose = require("mongoose")
const app = express();

// allow frontend to access us by setting CORS
// credentials: true we need to allow COOKIE exchange too!
app.use(cors({ origin: process.env.FRONTEND_ORIGIN, credentials: true }));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get("/animals", (req, res) => {
  res.json([
    { _id: "1", name: "Giraffe" },
    { _id: "2", name: "Sloth" },
    { _id: "3", name: "Lioness" },
    { _id: "4", name: "Birdy" },
  ])
})


const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`API listening on http://localhost:${PORT}`);
});

// connect 
mongoose.connect(process.env.DB_URL)
.then(() => console.log("ATLAS DB Connected"))
.catch(err => console.log(err.message))