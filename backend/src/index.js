const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const token = jwt.sign({ foo: "bar" }, "shhhh");

const app = express();
app.use(cors());
app.use(bodyParser.json());
app
  .get("/", (req, res) => {
    console.log(req);

    res.send("Hello World!");
  })
  .get("/:id", (req, res) => {
    res.send(req.params.id);
  });

app.post("/login", (req, res) => {
  const body = req.body;

  if (body.email === "admin" && body.password === "admin") {
    return res.json({
      token: "123456789",
    });
  }
});

const port = 3001;

app.listen(port, () => {
  console.log(`Backend port on : ${port}`);
});
