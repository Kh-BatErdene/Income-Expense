"use client";

import Profile from "@/components/Profile";
import Modal from "../../components/+Record";
import { useAll } from "@/components/providers/AuthProvider";

export default function Header() {
  const { modal, setModal } = useAll();
  return (
    <div className="flex w-full max-w-[1200px] h-[72px] m-auto justify-between p-5 bg-white mb-8">
      <div className="flex gap-6 items-center">
        <a href="/">
          <img src="/dash.svg" />
        </a>

        <a href="/dashboard">Dashboard</a>
        <a href="/records" className="font-bold">
          Records
        </a>
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
