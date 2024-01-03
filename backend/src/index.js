//FileSystem
const fs = require("fs").promises;
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const { v4: uuidv4 } = require("uuid");

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  console.log(req);
  res.send("Backend successful on 3001 port");
});

app.get("/profile", async (req, res) => {
  console.log("x");
  //headers-ийн authorization-ийг авах хүсэлт
  const { authorization } = req.headers;
  //authorization ирэхгүй бол
  if (!authorization) {
    return res.status(401).json({
      message: "Couldn't get authorization",
    });
  }

  try {
    const read = jwt.verify(authorization, "secret-key");
    const { email } = read;
    const filePath = "src/data/users.json";
    const usersRaw = await fs.readFile(filePath, "utf-8");
    const users = JSON.parse(usersRaw);

    const profile = users.filter((user) => user.email === email);

    console.log(profile);

    res.json({
      profile,
    });
  } catch (error) {
    return res.status(409).json({ message: "Couldn't get authorization-6" });
  }
});

//Login

app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  //Json дататайгаа холбож бн (зам)
  const filePath = "src/data/users.json";

  //FilePath file-ийг utf-8 форматаар уншиж бн
  const usersRaw = await fs.readFile(filePath, "utf-8");

  //String data-г Json болгож бн
  const users = JSON.parse(usersRaw);

  //Email-ийг давхцаж бну, шалгаж бн
  const user = users.find((user) => user.email === email);

  if (!user) {
    return res.status(401).json({
      message: "E-mail эсвэл нууц үг буруу байна. ",
    });
  }
  if (user.password !== password) {
    return res.status(401).json({
      message: "Нууц үг буруу байна",
    });
  }

  const token = jwt.sign({ email }, "secret-key");

  res.json({
    token,
  });
});

//SignUp

app.post("/signup", async (req, res) => {
  const { email, password } = req.body;

  //Json дататайгаа холбож бн (зам)
  const filePath = "src/data/users.json";

  //FilePath file-ийг utf-8 форматаар уншиж бн
  const usersRaw = await fs.readFile(filePath, "utf-8");

  //String data-г Json болгож бн
  const users = JSON.parse(usersRaw);
  const user = users.find((user) => user.email === email);

  //Алдаа заалгаж бн
  if (user) {
    return res.status(409).json({
      message: "Хэрэглэгч давхцаж байна",
    });
  }

  //Email-ийг давхцаж бну, шалгаж бн

  const id = uuidv4();
  //Давхцаагүй бол push-лж бн
  users.push({ email, password, id });

  //Бичиж бн
  await fs.writeFile(filePath, JSON.stringify(users));

  //localstorage-д response хариу илгээж бн

  const token = jwt.sign({ email }, "secret-key");

  res.json({
    token,
  });
});

//

//Add Category

//

const port = 3001;

app.listen(port, () => {
  console.log(`Backend port on : ${port}`);
});
