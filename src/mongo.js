const mongoose = require("mongoose");
const user = "mariani.owen@gmail.com";
const pass = "projectpassword123";

const uri =
  "mongodb+srv://" +
  user +
  ":" +
  pass +
  "@volunteerportal.zv9kfyo.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect("mongodb://localhost:3000/");
