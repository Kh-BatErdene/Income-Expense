const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const jwt = require("jsonwebtoken");
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

//Login

app.post("/login", (req, res) => {
  const headers = req.headers;
  const gettoken = headers.authorization;

  if (!gettoken) {
    res.status(401).json({
      message: "Unauthorized -6",
    });
    return;
  }

  try {
    jwt.verify(gettoken, "secret-key");
  } catch (e) {
    res.status(401).json({
      message: "Unauthorized",
    });
    return;
  }

  const { email, password } = req.body;
  const token = jwt.sign({ email }, "secret-key", { expiresIn: "1h" });

  res.json({
    token,
  });
});

const port = 3001;

app.listen(port, () => {
  console.log(`Backend port on : ${port}`);
});
