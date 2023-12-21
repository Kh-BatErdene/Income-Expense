"use client";

import { useState } from "react";

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signup = async (email, password) => {
    try {
      const res = await fetch("http://localhost:3001/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (res.status !== 200) {
        throw new Error("Invalid credentials");
      }
      const data = await res.json();
      const { token } = data;
      console.log(token);
    } catch (err) {
      console.log("Error", err);
    }
  };
  console.log(password, email);

  return (
    <div className="max-w-full m-auto h-[1024px]">
      <div className="h-screen flex items-center ">
        <div className="flex justify-center items-center w-1/2 h-[1024px] ">
          <div className="w-[384px]">
            <img className="m-auto mb-10" src="/logo.svg" />
            <h2 className="text-slate-900 font-semibold text-[24px] text-center ">
              Welcome Back
            </h2>
            <p className="text-center mb-10 mt-2">
              Welcome back, Please enter your details
            </p>
            <input
              onChange={(e) => setEmail(e.target.value)}
              className="w-full h-12  bg-[#F3F4F6] pl-4 py-3 rounded-md border-solid border-2 border-[#D1D5DB] mb-4"
              type="text"
              placeholder="Email"
            />
            <input
              onChange={(e) => setPassword(e.target.value)}
              className="w-full h-12  bg-[#F3F4F6] pl-4 py-3 rounded-md border-solid border-2 border-[#D1D5DB]"
              type="password"
              placeholder="Password"
            />
            <div className="flex justify-center ">
              <button
                onClick={() => signup(email, password)}
                className="rounded-3xl w-full text-white max-w-[384px] mt-4  mb-11 h-[48px] bg-[#0166FF]"
              >
                Log in
              </button>
            </div>

            <div className="flex gap-3 justify-center">
              <a>Don`t have account?</a>
              <a href="/signup" className="text-[#0166FF]">
                Sign up
              </a>
            </div>
          </div>
        </div>
        <div className="bg-[#0166FF] h-full w-1/2 "></div>
      </div>
    </div>
  );
}
