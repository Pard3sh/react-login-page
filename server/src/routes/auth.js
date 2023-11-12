const express = require("express");
const router = express.Router();
const User = require("../models/user");

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  console.log("Received request with email:", email, "and password:", password);

  try {
    const user = await User.findOne({ email: email, password: password });

    if (user) {
      // User is authenticated
      res.status(200).json({ message: "Login successful" });
    } else {
      // Authentication failed
      res.status(401).json({ message: "Invalid username or password AHH" });
    }
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = router;
