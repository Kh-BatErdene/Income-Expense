"use client";
import { useAll } from "@/app/layout";
import React from "react";
import ChangeColor from "./ChangeColor";

function AddCategory() {
  const { modal2, setModal3, modal3 } = useAll();
  return (
    <div
      style={{
        display: modal2 ? "flex" : "none",
        transform: "translate(-50%, -50%)",
      }}
      className="absolute m-auto top-[50%] left-[50%] z-50  "
    >
      <div className="w-[494px] h-[236px] bg-white  border-2 rounded-2xl p-5 m-auto relative ">
        <div className="border-b-2 mb-6 ">
          <form>
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-semibold text-[20px] mb-5">Add Category</h3>
        </div>
        <div>
          <div className="flex">
            <label
              onClick={() => setModal3(!modal3)}
              className="form-control w-full flex cursor-pointer"
            >
              <div className="flex justify-evenly bg-[#F3F4F6] w-[84px] h-[48px]  text-[#A3A3A3] px-2 py-1 rounded-md border-solid border-2 border-[#D1D5DB] mb-4 ">
                <img src="/blackhouse.svg"></img>
                <img src="/dropdown.svg" />
              </div>
            </label>
            <label className="form-control">
              <select className="outline-none bg-[#F3F4F6] w-[350px] h-12 text-[#A3A3A3] px-4 py-2 rounded-md border-solid border-2 border-[#D1D5DB] mb-4 ">
                <option className="font-semibold" selected>
                  Name
                </option>
                <option className="font-semibold">Home...</option>
              </select>
            </label>
          </div>

          <button className=" px-5 py-2 text-white  bg-[#0166FF] rounded-3xl w-full h-10 mt-5 ">
            Add Record
          </button>
        </div>
      </div>
      <ChangeColor />
    </div>
  );
}

export default AddCategory;
