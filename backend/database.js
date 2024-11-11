/*
* body {
username: string;
Password: string;
}
*/
const mongoose = require("mongoose");
// mongodb url handy
mongoose.connect(
  "mongodb+srv://anshul:aniket%40321@cohort.tm50l4h.mongodb.net/"
);
const signupschema = mongoose.Schema({
  username: String,
  password: String,
});

const Signup = mongoose.model("Signup", signupschema);

module.exports = {
  Signup,
};
