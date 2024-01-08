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
    const { addCategory, colorgg, chooseIcon } = req.body;
    const filePath = "src/data/category.json";
    const rawFile = await fs.readFile(filePath, "utf8");

    const file = JSON.parse(rawFile);

    file.push({ userEmail: email, addCategory, colorgg, chooseIcon });

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

    const userCategory = file.filter((user) => user.userEmail === email);

    res.json({
      userCategory,
      chooseIcon,
    });
  } catch (err) {
    res.status(401).json({
      message: "Unauthorized-2",
    });
  }
});

// app.post("/records", async (req, res) => {
//   const { authorization } = req.headers;

//   if (!authorization) {
//     return res.status(401).json({
//       message: "Unauthorized",
//     });
//   }

//   try {
//     const payload = jwt.verify(authorization, "secret-key");

//     const { email } = payload;

//     const { category, amount, type } = req.body;

//     const filePath = "src/data/records.json";

//     const recordsRaw = await fs.readFile(filePath, "utf8");

//     const records = JSON.parse(recordsRaw);

//     records.push({
//       type,
//       category,
//       amount,
//       userEmail: email,
//     });

//     await fs.writeFile(filePath, JSON.stringify(records));

//     res.json({
//       message: "Record created",
//     });
//   } catch (error) {
//     return res.status(401).json({
//       message: "Unauthorized",
//     });
//   }
// });

// app.get("/records", async (req, res) => {
//   const { authorization } = req.headers;

//   if (!authorization) {
//     return res.status(401).json({
//       message: "Unauthorized",
//     });
//   }

//   try {
//     const payload = jwt.verify(authorization, "secret-key");

//     const { email } = payload;

//     const filePath = "src/data/records.json";

//     const recordsRaw = await fs.readFile(filePath, "utf8");

//     const records = JSON.parse(recordsRaw);

//     const usersRecords = records.filter((record) => record.userEmail === email);

//     res.json({
//       records: usersRecords,
//     });
//   } catch (error) {
//     return res.status(401).json({
//       message: "Unauthorized",
//     });
//   }
// });

const port = 3001;

app.listen(port, () => {
  console.log(`Backend port on : ${port}`);
});
