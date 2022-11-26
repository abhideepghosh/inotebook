const express = require("express");
const User = require("../models/User");
const router = express.Router();
const { body, validationResult } = require("express-validator");

// Create User, No Login Required
router.post(
  "/createuser",
  [
    body("email", "Enter a valid email").isEmail(),
    body("name", "Enter a valid name").isLength({ min: 3 }),
    body("password", "Password must be of 5 characters").isLength({ min: 5 }),
  ],
  async (req, res) => {
    // If Errors, Return Bad Request And Errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // Check If The user with this email Exists Already
    let user = await User.findOne({ email: req.body.email });

    if (user) {
      return res
        .status(400)
        .json({ error: "Sorry a user with this email already exists!" });
    }

    user = await User.create({
      name: req.body.name,
      password: req.body.password,
      email: req.body.email,
    });
    // .then((user) => res.json(user))
    // .catch((err) => {
    //   console.log(err);
    //   res.json({
    //     error: "Please enter a unique value for email",
    //     message: err.message,
    //   });
    // });
    res.json(user);
  }
);

module.exports = router;
