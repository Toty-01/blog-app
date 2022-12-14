const express = require("express");
const app = express();
const dotenv =  require("dotenv");
const mongoose = require("mongoose");

dotenv.config();

mongoose.connect(process.env.MONGO_URL)
.then(console.log("Connected to Mongo"))
.catch((err) => console.log(err));
// mongoose.set('strictQuery', false);

app.listen("5000", () => {
  console.log("i hope that i could change the world");
});