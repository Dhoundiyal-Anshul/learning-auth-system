// write basic express boilerplate code
// write express.json() MIDDLEWARES
//   body {
// username:string;
// password:string;
// }
const express = require("express");
const { Signup } = require("./database");
const app = express();
const cors = require("cors");
const { link } = require("fs");
const { validateCredentials, userchecker } = require("./middleware");
const { signupZOD } = require("./types");
app.use(express.json());
app.use(cors());

app.post(
  "/signup",
  validateCredentials,
  userchecker,
  async function (req, res) {
    const { username, password } = req.body;
    const result = signupZOD.safeParse({ username, password });
    if (!result.success) {
      res
        .status(411)
        .json({ msg: "Minimum 6 letter password should be there" });
      return; // Stops further execution
    }
    // putting signup data to mongodb
    try {
      // Insert the signup data into MongoDB
      await Signup.create({
        username: username,
        password: password,
      });
      res.json({ link: "http://localhost:5173" });
    } catch (error) {
      res.status(500).json({ msg: "Error creating user" });
    }
  }
);
// previous logic
// app.post("/login", async function (req, res) {
//   const { username_login, password_login } = req.body;
//   // finding username & password in mongodb
//   const signup = await Signup.find({});
//   if ((signup = username_login)) {
//     if ((signup = password_login)) {
//       res.json({ msg: "correct user" });
//     } else res.json({ msg: "wrong username or password" });
//   }
// });
// logic used after correcting errors mainly it was of findone and simple find
app.post("/login", validateCredentials, async function (req, res) {
  const { username, password } = req.body;

  try {
    // Find user by username and password
    const user = await Signup.findOne({
      username: username,
      password: password,
    });

    if (user) {
      res.json({ link: "https://instagram.com/anshul_dhoundiyal" });
    } else {
      res.json({ msg: "Wrong username or password" });
    }
  } catch (error) {
    res.status(500).json({ msg: "Error during login" });
  }
});

app.listen(3000);
