// server/src/server.js
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Connect to MongoDB

const user = process.env.MONGODB_USER;
const pass = process.env.MONGODB_PASS;
const uri = process.env.MONGODB_ALT2_URI;
let MONGODB_URI = `mongodb+srv://${user}:${pass}@${uri}`;

MONGODB_URI =
  "mongodb+srv://pard3sh:hGKecIRTJxsdvaqn@volunteerportal.zv9kfyo.mongodb.net/database0";

// figure out how to do the mongoDB connectio nheheh
// mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');

const User = mongoose.model("User", { email: String, password: String });

const example = User({ email: "user1@example.com", password: "abc123" });
console.log("Pre Connected to MongoDB");
mongoose
  .connect(MONGODB_URI)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("MongoDB connection error", error);
  });
console.log("Post Connected to MongoDB");

// Routes
const authRoutes = require("./routes/auth");
app.use("/api", authRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
