"use client";

import Modal from "../../components/Modal";

export default function Header() {
  return (
    <div className="flex w-full max-w-[1200px] h-[72px] m-auto justify-between p-5 bg-white mb-8 items-center">
      <div className="flex gap-6 items-center">
        <a href="/dashboard">
          <img src="/dash.svg" />
        </a>
        <a href="/dashboard" className="font-bold">
          Dashboard
        </a>
        <a href="/records">Records</a>
      </div>

      <div className="flex gap-6 items-center  ">
        <button
          className="btn bg-[#0166FF] hover:bg-[#2f81fc] text-white h-8 rounded-3xl "
          onClick={() => document.getElementById("my_modal_3").showModal()}
        >
          + Record
        </button>

        {/* Modal start here */}

        <Modal />
        <a href="/profile">
          <div className="avatar mt-1 ">
            <div className="w-10 items-center rounded-full hover:border-2 ">
              <img src="/profile.jpg" />
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}
