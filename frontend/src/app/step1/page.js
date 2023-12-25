"use client";

import { useAll } from "../layout";

export default function Currency() {
  const { isLoggedIn } = useAll();

  return (
    <div className="p-10 w-[100%] ">
      <div className=" w-[260px] m-auto  ">
        <img className="m-auto mb-10 w-[107px] h-[40px]" src="/logo.svg" />
        <div className="flex items-center translate-x-2 text-sm ">
          <div className="flex justify-center items-center rounded-full w-6 h-6 text-white bg-[#0166FF] ">
            1
          </div>
          <div className="border-[4px] w-[92px] bg-[#E5E7EB] h-1"></div>
          <div className="flex justify-center items-center rounded-full w-6 h-6 bg-[#E5E7EB]">
            2
          </div>
          <div className="border-[4px] w-[92px] bg-[#E5E7EB] h-1"></div>
          <div className="flex justify-center items-center rounded-full w-6 h-6  bg-[#E5E7EB]">
            3
          </div>
        </div>
      </div>
      <div className="m-auto  w-72  flex justify-between mb-[140px] ">
        <span className="text-[14px]">Currency</span>
        <span className="text-[14px] -translate-x-1">Balance</span>
        <span className="text-[14px]">Finish</span>
      </div>

      <div className="w-[384px] flex flex-col items-center m-auto ">
        <img className="w-12 mb-4" src="/tugrug.svg" />
        <p2 className="font-bold text-[24px] mb-6">Select base currency</p2>
        <label className="form-control w-full max-w-xs  ">
          <select className="outline-none bg-[#F3F4F6] w-full h-12 text-[#A3A3A3] px-4 py-2 rounded-md border-solid border-2 border-[#D1D5DB] mb-4 ">
            <option className="font-semibold" selected>
              MNT - Mongolian Tugrik
            </option>
            <option className="font-semibold">
              USD - United States dollar
            </option>
          </select>
        </label>
        <p className="text-[12px] mt-3">
          Your base currency should be the one you use most often. All
          transaction in other currencies will be calculated based on this one
        </p>
        <a href="/step2" className="w-full">
          <button className="rounded-3xl w-full max-w-[384px] text-white mt-8  mb-11 h-[48px] bg-[#0166FF]">
            Confirm
          </button>
        </a>
      </div>
    </div>
  );
}
