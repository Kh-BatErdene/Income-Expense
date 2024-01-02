"use client";

import Modal from "../../components/+Record";
import { useAll } from "@/components/providers/AuthProvider";
import Profile from "@/components/Profile";

export default function Header() {
  const { modal, setModal } = useAll(false);

  return (
    <div className="flex w-full max-w-[1200px] h-[72px] m-auto justify-between p-5 bg-white mb-8">
      <div
        className="  bg-black opacity-30 z-30 w-full h-full absolute top-0 left-0 "
        style={{ display: modal ? "flex" : "none" }}
      ></div>
      <div className="flex gap-6 items-center">
        <a href="/">
          <img src="/dash.svg" />
        </a>

        <a href="/dashboard" className="font-bold">
          Dashboard
        </a>
        <a href="/records">Records</a>
      </div>

      <div className="flex gap-6 items-center ">
        <button
          className="btn bg-[#0166FF] hover:bg-[#2f81fc] text-white h-8 rounded-3xl "
          onClick={() => setModal(!modal)}
        >
          + Record
        </button>
        <Modal />
        <Profile />
      </div>
    </div>
  );
}
