//FileSystem
const fs = require("fs").promises;
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
    res.send("Backend successful on 3001 port");
  })
  .get("/:id", (req, res) => {
    res.send(req.params.id);
  });

//Login

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const token = jwt.sign({ email }, "secret-key");
  //Json дататайгаа холбож бн
  const filePath = "src/data/users.json";

  //FilePath file-ийг utf-8 форматаар уншиж бн
  const usersRaw = await fs.readFile(filePath, "utf-8");

  //String data-г Json болгож бн
  const users = JSON.parse(usersRaw);

  //Email-ийг давхцаж бну, шалгаж бн
  const user = users.find((user) => user.email === email);

  //Алдаа заалгаж бн
  if (user) {
    return res.status(409).json({
      message: "Хэрэглэгч давхцаж байна",
    });
  }

  //Давхцаагүй бол push-лж бн
  users.push({ email, password });

  //Бичиж бн
  await fs.writeFile(filePath, JSON.stringify(users));

  res.json({ message: "Амжилттай" });

  res.json({
    token,
    message: "User Created",
  });
});

const port = 3001;

app.listen(port, () => {
  console.log(`Backend port on : ${port}`);
});
