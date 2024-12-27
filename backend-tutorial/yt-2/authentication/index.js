import express from "express";
import jwt from "jsonwebtoken";
import cookieParser from "cookie-parser";
import bcrypt from "bcrypt";
const app = express();
const PORT = 3000;

const JWT_SECRET = "supersecretkey";
app.use(cookieParser());

// bcrypt.genSalt(saltRounds, function(err, salt) {
//     bcrypt.hash(myPlaintextPassword, salt, function(err, hash) {
//         // Store hash in your password DB.
//     });
// });

// how to encrypt password

let users = ["password"];

app.get("/", (req, res) => {
  bcrypt.genSalt(10, function (err, salt) {
    bcrypt.hash("password", salt, function (err, hash) {
      // Store hash in your password DB.
      console.log(hash); // is your password.
      users.push(hash);
      console.log(salt);
    });
  });

  // res.send({ msg: "hello" });
  console.log(users);
  return res.send(users);
});

// this can not be decrypted but can be compared
app.get("/check", (req, res) => {
  bcrypt.compare(
    "password",
    "$2b$10$8abTJlk2fSsvgFsYH9rIieMR95/u7uxjjljlkjlDQ8lV.EgJ2PM1iI4hDRi",
    function (err, result) {
      // result == true
      console.log(result);
    },
  );
});

// everyone has a unique email and using that email with a jwt secret key will convert it into an token
app.get("/auth", (req, res) => {
  let token = jwt.sign({ email: "0xkarfue@gmail.com" }, JWT_SECRET);
  // console.log(token);
  res.cookie("token", token);
  res.send(token);
  console.log(req.cookies.token);
});

// you can also read token data from their cookies
app.get("/authcheck", (req, res) => {
  let data = jwt.verify(req.cookies.token, JWT_SECRET);
  console.log(data);
  res.send(data);
});

app.listen(PORT, () => {
  console.log(`!!SERVER IS RUNNING ON PORT ${PORT}!!`);
});
