"use client";

//+Record btn дээр дарахад гарах модал

import { useState } from "react";
import Category_Input from "./Category_Input";
import { useAll } from "@/components/providers/AuthProvider";

export default function Modal() {
  //State-үүд
  const {
    modal,
    setModal,
    setAmount,
    amount,
    AddRecordCard,
    GetRecordCard,
    isExpense,
    setIsExpense,
  } = useAll();

  const Record = async () => {
    await AddRecordCard(amount);
    await GetRecordCard();
  };

  return (
    <dialog
      className="absolute top-[50%] left-[50%] rounded-2xl z-40 m-0"
      style={{
        display: modal ? "flex" : "none",
        transform: "translate(-50%, -50%)",
      }}
    >
      <div className="w-[800px] h-[542px] bg-white  border-2 rounded-2xl p-5 m-auto relative ">
        <div className="border-b-2 mb-6 ">
          <button
            onClick={() => setModal(!modal)}
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          >
            ✕
          </button>

          <h3 className="font-bold text-lg mb-3">Add Record</h3>
        </div>
        <div className="flex justify-between">
          <div className="max-w-[348px] w-full h-10 relative bg-[#F3F4F6]  rounded-3xl">
            {/* Өнгө нь солигдож буй Btn */}
            <div className="flex items-center">
              <button
                className="w-full h-10 rounded-[20px]"
                style={{
                  background: isExpense ? "#0166FF" : "#F3F4F6",
                  color: isExpense ? "#fff" : "#000",
                }}
                onClick={() => {
                  !isExpense ? setIsExpense(true) : "";
                }}
              >
                Expense
              </button>
              <button
                className="w-full h-10 rounded-[20px]"
                style={{
                  background: !isExpense ? "#16A34A" : "#F3F4F6",
                  color: !isExpense ? "#fff" : "#000",
                }}
                onClick={() => {
                  isExpense ? setIsExpense(false) : "";
                }}
              >
                Income
              </button>
            </div>

            <div className="relative w-full background mt-16">
              <input
                onChange={(e) => {
                  setAmount(e.target.value);
                }}
                type="text"
                placeholder="₮ 000.00"
                className="input input-bordered rounded-md w-full h-[76px] bg-[#F3F4F6] pt-5"
              />
              <p className="absolute z-20 top-2 left-4 text-5">Amount</p>
            </div>
            <p className="mt-4">Category</p>
            <Category_Input />
            <div className="flex justify-between"></div>
            <button
              className="absolute right-0 px-5 py-2 text-white  bg-[#F3F4F6] rounded-3xl w-full h-10 mt-8 mb-6 "
              style={{
                background: !isExpense ? "#16A34A" : "#0166FF",
              }}
              onClick={Record}
            >
              Add Record
            </button>
          </div>

          {/* Хоёр дахь мөр */}

          <div className="w-1/2">
            <p>Payee</p>
            <label className="mb-4 form-control w-full max-w-[348px] bg-[#F3F4F6] w-full h-12 text-[#A3A3A3] px-4 py-2 rounded-md border-solid border-2 border-[#D1D5DB]">
              <select className="mt-1 bg-[#F3F4F6]  outline-none cursor-pointer">
                <option className="font-semibold">Write here</option>
                <option className="font-semibold">I said Write here</option>
              </select>
            </label>
            <p className=" mb-1">Note</p>
            <div className="w-[348px] h-[280px] border-2 bg-[#F3F4F6] p-4 rounded-md">
              <input
                className="outline-none bg-[#F3F4F6]"
                type="text"
                placeholder="Write here"
              />
            </div>
          </div>
        </div>
      </div>
    </dialog>
  );
}
