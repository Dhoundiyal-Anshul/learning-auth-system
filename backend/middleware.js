// Middleware to check if username and password are provided
function validateCredentials(req, res, next) {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json({ msg: "Username and password are required." });
  }
  next();
}
const { Signup } = require("./database");

async function userchecker(req, res, next) {
  const { username } = req.body;
  const user = await Signup.findOne({
    username: username,
  });
  if (user) {
    return res.status(400).json({ msg: "Username already taken" });
  }
  next();
}
module.exports = { validateCredentials, userchecker };
