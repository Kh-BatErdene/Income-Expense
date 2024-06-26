const fs = require("fs").promises;
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const { connectDatabase } = require("./database");
const { User } = require("./model/user.model");
const { Category } = require("./model/category.model");
const { Records } = require("./model/records.model");

const app = express();
connectDatabase();
app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
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
    const verify = jwt.verify(authorization, "secret-key");
    const { email } = verify;

    const profile = await User.find({ email: email });

    res.json({
      profile,
    });
  } catch (error) {
    return res.status(409).json({ message: "Profile unauthorization" });
  }
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email: email });

    if (!user) {
      return res.status(401).json({
        message: "E-mail буруу байна",
      });
    }
    const userpass = await User.findOne({ password: password });
    if (!userpass) {
      return res.status(401).json({
        message: "Нууц үг буруу байна",
      });
    }
    const token = jwt.sign({ email }, "secret-key");
    res.json({ token });
  } catch (err) {
    console.log(err);
  }
});

app.post("/signup", async (req, res) => {
  const { email, password } = req.body;
  console.log(email, password);

  try {
    const user = await User.findOne({ email: email });

    if (user) {
      return res.status(409).json({
        message: "Хэрэглэгч давхцаж байна",
      });
    }
    await User.create({
      email,
      password,
      createdAt: new Date(),
    });

    const token = jwt.sign({ email }, "secret-key");
    res.json({
      token,
      message: "User created",
    });
  } catch (err) {
    console.log(err);
  }
});

app.get("/users", async (req, res) => {
  const users = await User.find({ name: "Hello" });
  res.json(users);
});

app.post("/addcategory", async (req, res) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(401).json({
      message: "Category unauthorized",
    });
  }
  try {
    const verify = jwt.verify(authorization, "secret-key");
    const { email } = verify;
    const { Category_name, Icon, iconId, color } = req.body;

    await Category.create({
      userEmail: email,
      Category_name,
      iconId,
      color,
      Icon,
    });

    res.json({
      message: "Successfuly",
    });
  } catch (error) {
    return res.status(401).json({
      message: "Category unauthorized",
    });
  }
});

app.get("/addcategory", async (req, res) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(401).json({
      message: "AddCategory Unauthorized",
    });
  }
  try {
    const verify = jwt.verify(authorization, "secret-key");
    const { email } = verify;

    const categories = await Category.find({ userEmail: email });

    res.json(categories);
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
    const { amount, inputText, recordIcon, cateColor, isExpense, time, date } =
      req.body;

    await Records.create({
      userEmail: email,
      amount,
      inputText,
      cateColor,
      isExpense,
      recordIcon,
      date,
      time,
    });

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
  const { days, old } = req.query;

  if (!authorization) {
    return res.status(401).json({
      message: "Unauthorized",
    });
  }

  try {
    const payload = jwt.verify(authorization, "secret-key");

    const { email } = payload;
    const filterDate = new Date(Date.now() - 3600 * 1000 * 24 * days);
    const verifyRecord = await Records.find({ userEmail: email });
    const filterRecords = verifyRecord.filter((item) => item.date > filterDate);

    const records = filterRecords.sort((a, b) => {
      if (old === "true") {
        return b.date - a.date;
      } else {
        return a.date - b.date;
      }
    });

    res.json(records);
  } catch (error) {
    return res.status(401).json({
      message: "Record Unauthorized",
    });
  }
});

const port = 3001;

app.listen(port, () => {
  console.log(`Backend port on : ${port}`);
});
