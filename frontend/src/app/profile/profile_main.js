"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { usePro } from "./page";

export default function ProfilePage() {
  const router = useRouter();
  const handlerDashboard = () => {
    router.push("/dashboard");
  };
  const [name, setName] = useState("");
  const [email, setEmail] = useState("admin");
  const [bio, setBio] = useState("Full stack developer");
  const { info, setInfo } = usePro();

  return (
    <div className="bg-gray-200 py-2 w-full h-screen  ">
      <div className="py-5 ">
        <div className="pt-5 pb-5">
          <h1 className=" text-3xl text-[#0166FF] text-center mb-4">
            User Profile
          </h1>
        </div>
        <div className="w-full h-full  m-auto ">
          <div className=" justify-center pl-[30px] pr-[20px] w-96 items-center rounded-2xl bg-[#F6F6F7] m-auto p-5 mb-5">
            <div className="flex flex-col  gap-2">
              <div className="avatar m-auto">
                <div className="w-24 items-center rounded-full ">
                  <img src="/profile.jpg" />
                </div>
              </div>
              <div className="pt-2 items-center flex-col justify-center text-3xl pb-1">
                <p className="flex justify-center m-auto">{name}</p>
                <h1 className="text-lg flex justify-center m-auto text-[#0166FF]">
                  {bio}
                </h1>
              </div>
              <div className="flex gap-10 w-full justify-center">
                <span>
                  <span className="font-bold text-[#0166FF]">Email: </span>
                  <span>{info && info.email}</span>
                </span>
                <span>
                  <span className="font-bold text-[#0166FF]">Password: </span>
                  <span>{info && info.password}</span>
                </span>
              </div>

              <button
                className="gap-5 mt-5 m-auto rounded-md bg-[#0166FF] text-[#ffffff] py-3 px-4"
                onClick={handlerDashboard}
              >
                Back To Dashboard
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
