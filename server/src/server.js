// make sure .env file is in server folder
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
const uri = process.env.MONGODB_URI;
const mongoDB_uri = `mongodb+srv://${user}:${pass}@${uri}`;

mongoose
  .connect(mongoDB_uri)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("MongoDB connection error", error);
  });

// Routes
const authRoutes = require("./routes/auth");
app.use("/api", authRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
