//FileSystem
const fs = require("fs").promises;
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const { v4: uuidv4 } = require("uuid");
const { connectDatabase } = require("./database");
const { User } = require("./model/user.model");

const app = express();
connectDatabase();
app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  console.log(req);
  res.send("Backend successful on 3001 port");
});

app.get("/profile", async (req, res) => {
  const { authorization } = req.headers;
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
      message: "E-mail буруу байна ",
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

  try {
    const user = User.find({ users: email });

    if (user.length) {
      return res.status(409).json({
        message: "Хэрэглэгч давхцаж байна",
      });
    }

    await User.create({
      name: "Hello",
      email,
      password,
      createdAt: new Date(),
    });
    console.log(User);
    const token = jwt.sign({ email }, "secret-token");
  } catch (err) {
    console.log(err);
  }

  res.json({
    token,
    message: "User created",
  });
});

app.get("/users", async (req, res) => {
  //database-ээс find хийж бн
  const users = await User.find({ name: "Hello" });

  res.json(users);
});

//Add Category

app.post("/addcategory", async (req, res) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(401).json({
      message: "error",
    });
  }
  try {
    const verify = jwt.verify(authorization, "secret-key");
    const { email } = verify;
    const { Category_name, Icon, iconId } = req.body;
    const filePath = "src/data/category.json";
    const rawFile = await fs.readFile(filePath, "utf8");

    const file = JSON.parse(rawFile);

    file.push({ userEmail: email, Category_name, Icon, iconId });

    await fs.writeFile(filePath, JSON.stringify(file));
    res.json({
      message: "Successful",
    });
  } catch (error) {
    return res.status(401).json({
      message: "Unauthorized-6",
    });
  }
});

app.get("/addcategory", async (req, res) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(401).json({
      message: "Unauthorized",
    });
  }
  try {
    const verify = jwt.verify(authorization, "secret-key");

    const { email } = verify;

    const filePath = "src/data/category.json";

    const rawFile = await fs.readFile(filePath, "utf-8");

    const file = JSON.parse(rawFile);

    const Category_name = file.filter((user) => user.userEmail === email);
    const Icon = file.filter((user) => user.userEmail === email);
    const iconId = file.filter((user) => user.userEmail === email);

    res.json({
      Category_name,
      Icon,
      iconId,
    });
  } catch (err) {
    res.status(401).json({
      message: "Unauthorized-2",
    });
  }
});

app.post("/records", async (req, res) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({
      message: "Unauthorized-1",
    });
  }

  try {
    const payload = jwt.verify(authorization, "secret-key");

    const { email } = payload;

    const { category_name, amount, time, date } = req.body;

    const filePath = "src/data/records.json";

    const recordsRaw = await fs.readFile(filePath, "utf8");

    const records = JSON.parse(recordsRaw);

    records.push({ userEmail: email, category_name, amount, time, date });

    await fs.writeFile(filePath, JSON.stringify(records));

    res.json({
      message: "Record created",
    });
  } catch (error) {
    return res.status(401).json({
      message: "Unauthorized-2",
    });
  }
});

app.get("/records", async (req, res) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({
      message: "Unauthorized",
    });
  }

  try {
    const payload = jwt.verify(authorization, "secret-key");

    const { email } = payload;

    const filePath = "src/data/records.json";

    const recordsRaw = await fs.readFile(filePath, "utf8");

    const records = JSON.parse(recordsRaw);

    const usersRecords = records.filter((record) => record.userEmail === email);

    res.json({
      records: usersRecords,
    });
  } catch (error) {
    return res.status(401).json({
      message: "Unauthorized",
    });
  }
});

const port = 3001;

app.listen(port, () => {
  console.log(`Backend port on : ${port}`);
});
