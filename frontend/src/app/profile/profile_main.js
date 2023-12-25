"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function ProfilePage() {
  const router = useRouter();
  const handlerDashboard = () => {
    router.push("/dashboard");
  };
  const Update = () => {
    setName(name);
  };
  const [name, setName] = useState("Kh.Bat_Erdene");
  const [email, setEmail] = useState("admin");
  const [bio, setBio] = useState("Full stack developer");
  return (
    <div className="bg-gray-200 py-2 w-full h-screen">
      <div className="ml-20 py-5 mr-20">
        <div className="pt-5 pb-5">
          <h1 className=" text-3xl text-[#0166FF] text-center mb-4">
            User Profile
          </h1>
        </div>
        <div className="flex w-[2900px]">
          <div className="flex justify-center pl-[30px] pr-[20px] w-96 items-center rounded-2xl bg-[#F6F6F7]">
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
              <div className="flex gap-10 w-full">
                <span>
                  <span className="font-bold text-[#0166FF]">Email: </span>
                  <span>{email}</span>
                </span>
                <span>
                  <span className="font-bold text-[#0166FF]">Password: </span>
                  <span>{email}</span>
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
          <div className="flex ml-20 w-[700px] pt-[29px] pb-[26px] pl-[30px] pr-[35px] items-center rounded-2xl bg-[#F6F6F7]">
            <div className="flex flex-col items-start gap-4">
              <div className=" border-b-2 w-full">
                <h1 className=" text-lg my-2 text-[#0166FF]">
                  Account Details
                </h1>
              </div>
              <div className="w-[589px] h-[39px] flex gap-5 flex-shrink-0">
                <div className="mt-2">
                  <p className="pl-2">Name</p>
                  <input
                    placeholder="Your Name"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    className=" py-4 pl-4 pr-5 gap-3 w-[300px] h-[38px] flex items-center border rounded-md"
                  ></input>
                </div>
                <div className="mt-2">
                  <p className="pl-2">Bio</p>
                  <input
                    onChange={(e) => setBio(e.target.value)}
                    value={bio}
                    placeholder="Your Bio"
                    className=" py-4 pl-4 pr-5 gap-3 w-[300px] h-[38px] flex items-center border rounded-md"
                  ></input>
                </div>
              </div>
              <div className="flex my-2">
                <div className="mr-5 mt-4">
                  <p className="pl-2">Email</p>
                  <input
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    placeholder="Your Email"
                    className=" py-4 pl-4 pr-5 gap-3 w-[300px]  h-[38px] flex items-center border rounded-md"
                  ></input>
                </div>
                <div className="mt-4">
                  <p className="pl-2">Password</p>
                  <input
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    placeholder="Your Password"
                    className=" py-4 pl-4 pr-5 gap-3 w-[300px] h-[38px] flex items-center border rounded-md"
                  ></input>
                </div>
              </div>

              <div className=" py-3 px-4">
                <button
                  onClick={Update}
                  className=" inline-flex flex-col justify-center items-center rounded-md bg-[#0166FF] text-[#ffffff] py-3 px-4"
                >
                  Update Account
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
