"use client";
import { useAll } from "@/components/providers/AuthProvider";
import { useState } from "react";

export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signup } = useAll();

  return (
    <div className="w-full m-auto h-[1024px]">
      <div className="h-screen flex items-center ">
        <div className="flex justify-center items-center w-1/2 h-[1024px] ">
          {" "}
          <div className="w-[384px]">
            <img className="m-auto mb-10" src="/logo.svg" />
            <h2 className="text-slate-900 font-black text-[34px] text-center mb-10">
              Sign Up
            </h2>
            <p className="text-center mb-10 mt-2">
              Sign up below to create your Wallet account
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
                className="rounded-3xl w-full max-w-[384px] text-white mt-4  mb-11 h-[48px] bg-[#0166FF]"
              >
                Sign up
              </button>
            </div>
            <div className="flex gap-3 justify-center">
              <a>Already have account?</a>
              <a href="/" className="text-[#0166FF]">
                Log in
              </a>
            </div>
          </div>
        </div>
        <div className="bg-[#0166FF] h-full w-1/2 "></div>
      </div>
    </div>
  );
}
