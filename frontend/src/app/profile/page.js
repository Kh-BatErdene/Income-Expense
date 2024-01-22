"use client";
import { api } from "@/common";
import { createContext, useContext, useState } from "react";
import ProfilePage from "./profile_main";

const UseProfile = createContext();

export default function Profile() {
  const [showProfile, setShowProfile] = useState(false);
  const [info, setInfo] = useState();

  const gg = async () => {
    setShowProfile(!showProfile);
    try {
      const token = localStorage.getItem("token");
      const { data } = await api.get("/profile", {
        headers: {
          authorization: token,
        },
      });

      console.log("GGG", data, typeof data);
      const { profile } = data;
      setInfo(profile[0]);
      console.log(profile[0]);
    } catch (error) {
      console.log("---boldgve duraka", error);
    }
  };

  return (
    <UseProfile.Provider value={{ setInfo, info }}>
      <div className="flex items-center w-screen h-screen justify-center">
        <div
          className="flex justify-center flex-col items-center gap-4"
          style={{ display: showProfile ? "none" : "flex" }}
        >
          <div className="avatar m-auto  ">
            <div className="w-80 items-center rounded-full">
              <img src="/profile.jpg" />
            </div>
          </div>
          <button
            onClick={gg}
            className="btn hover:bg-[#0177FF] bg-[#0166FF] text-white rounded-md p-4"
          >
            View Profile
          </button>
        </div>

        {showProfile && <ProfilePage />}
      </div>
    </UseProfile.Provider>
  );
}

export const usePro = () => {
  return useContext(UseProfile);
};
