// File : index.js

const express = require("express");
const bodyParser = require("body-parser");
const db = require("./config/db");
const app = express();
const user = require("./routes/users");
const account = require("./routes/account");
const opportunity = require("./routes/opportunity");

// PORT
const PORT = process.env.PORT || 4000;

// middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes defn
app.use("/user", user);
app.use("/", account);
app.use("/", opportunity);


db();
app.get("/", (req, res) => {
  res.json({ message: "API Working" });
});
// Middleware


app.listen(PORT, (req, res) => {
  console.log(`Server Started at PORT ${PORT}`);
});
