const zod = require("zod");
const loginZOD = zod.object({
  username: zod.string(),
  password: zod.string(),
});
const signupZOD = zod.object({
  username: zod.string(),
  password: zod.string().min(6),
});

module.exports = {
  loginZOD: loginZOD,
  signupZOD: signupZOD,
};
