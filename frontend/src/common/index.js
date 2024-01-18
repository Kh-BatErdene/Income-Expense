import axios from "axios";

export const api = axios.create({
  baseURL: "https://geld-income.onrender.com",
  headers: {
    "Content-Type": "application/json",
  },
});
