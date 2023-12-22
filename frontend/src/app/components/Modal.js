"use client";

import { FaCirclePlus } from "react-icons/fa6";
import { IoFastFood } from "react-icons/io5";
import { BiSolidDrink } from "react-icons/bi";
import { FaTaxi } from "react-icons/fa";
import { IoHomeSharp } from "react-icons/io5";
import { FaGift } from "react-icons/fa6";
import { FaCartShopping } from "react-icons/fa6";
import { useState } from "react";
import AddCatagory from "./AddCatagory";

export default function Modal() {
  const [change1, setChange1] = useState("");
  const [change2, setChange2] = useState("#F3F4F6");

  const handleClick = () => {
    setChange1(!change1);
    setChange2(!change2);
  };

  return (
    <dialog id="my_modal_3" className="modal ">
      <div className="modal-box w-full h-full max-w-[792px] max-h-[512px] bg-white">
        <div className="border-b-2 mb-6 ">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg mb-3">Add Record</h3>
        </div>
        <div className="flex justify-between">
          <div className="max-w-[348px] w-full h-10 relative bg-[#F3F4F6]  rounded-3xl">
            <button
              onClick={handleClick}
              className="z-10 absolute left-0 px-5 py-2  text-black bg-[#F3F4F6] rounded-3xl w-[172px] h-10 "
              style={{
                background: change2 ? "#0166FF" : false,
                color: change2 ? "white" : "black",
              }}
            >
              Income
            </button>
            <button
              onClick={handleClick}
              className="absolute right-0 px-5 py-2  text-black bg-[#F3F4F6] rounded-3xl w-[172px] h-10"
              style={{
                background: change1 ? "#16A34A" : "#F3F4F6",
                color: change1 ? "white" : "black",
              }}
            >
              Expense
            </button>
            <div className="relative w-full background mt-16">
              <input
                type="text"
                placeholder="₮ 000.00"
                className="input input-bordered rounded-md w-full h-[76px] bg-[#F3F4F6] pt-5"
              />
              <p className="absolute z-20 top-2 left-4 text-5">Amount</p>
            </div>
            <p className="mt-4">Category</p>
            <div className="dropdown w-full mb-2">
              <div
                tabIndex={0}
                role="button"
                className=" flex  items-center justify-center w-full form-control outline-none bg-[#F3F4F6] h-12 text-[#94A3B8]  rounded-md border-solid border-2 border-[#D1D5DB] mb-1 mt-2 pr-5 pl-3"
              >
                <div className="flex justify-between w-full">
                  <p>Find or choose category</p>
                  <img src="/dropdown.svg" />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content  menu p-2 shadow  rounded-box w-full bg-white z-30"
              >
                <li>
                  {" "}
                  <div
                    onClick={() =>
                      document.getElementById("AddCatagory").showModal()
                    }
                    className="flex w-full items-center gap-4 border-b-2 pb-2 cursor-pointer hover:bg-gray-50 mb-2 "
                  >
                    <FaCirclePlus />
                    <span>Add Category</span>
                  </div>
                  <div className="flex mb-1 w-full pt-2 items-center gap-4">
                    <IoHomeSharp />
                    <span>Home</span>
                  </div>
                  <div className="flex mb-1 w-full pt-2 items-center gap-4">
                    <FaGift />
                    <span>Gift</span>
                  </div>
                  <div className="flex mb-1 w-full pt-2 items-center gap-4">
                    <IoFastFood />
                    <span>Food</span>
                  </div>
                  <div className="flex mb-1 w-full pt-2 items-center gap-4">
                    <BiSolidDrink />
                    <span>Drink</span>
                  </div>
                  <div className="flex mb-1 w-full pt-2 items-center gap-4">
                    <FaTaxi />
                    <span>Drink</span>
                  </div>
                  <div className="flex mb-1 w-full pt-2 items-center gap-4">
                    <FaCartShopping />
                    <span>Drink</span>
                  </div>
                </li>
              </ul>
            </div>
            <AddCatagory />
            <div className="flex justify-between">
              <input type="date" className="border-2 w-[168px] h-[68px] px-3" />
              <input type="date" className="border-2 w-[168px] h-[68px] px-3" />
            </div>
            <button
              className="absolute right-0 px-5 py-2 text-white  bg-[#F3F4F6] rounded-3xl w-full h-10 mt-8 mb-6 "
              style={{
                background: change1 ? "#16A34A" : "#0166FF",
              }}
            >
              Add Record
            </button>
          </div>

          {/* //column2 */}

          <div className="w-1/2">
            <p>Payee</p>
            <label className="form-control w-full max-w-xs  ">
              <select className="outline-none bg-[#F3F4F6] w-full h-12 text-[#A3A3A3] px-4 py-2 rounded-md border-solid border-2 border-[#D1D5DB] mb-4 ">
                <option className="font-semibold" selected>
                  Write here
                </option>
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
