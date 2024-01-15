"use client";
import { useAll } from "@/components/providers/AuthProvider";
import React, { useState } from "react";
const ChangeIcon = createContext();
import ChangeColor from "./Icon_Pick_Modal";
import { createContext, useContext } from "react";
import * as icons from "./ReactIcons";

function AddCategory() {
  const {
    modal2,
    setModal3,
    modal3,
    colorgg,
    CategoryAdd,
    setModal2,
    getCategoryData,
    handleCategory,
    setCategory_name,
  } = useAll();

  const style = { color: colorgg };
  const data = [
    { icon: <icons.FaHome {...{ style }} />, id: 0 },
    { icon: <icons.IoFastFoodSharp {...{ style }} />, id: 1 },
    { icon: <icons.FaShoppingBasket {...{ style }} />, id: 2 },
    { icon: <icons.FaIdCard {...{ style }} />, id: 3 },
    { icon: <icons.IoCut {...{ style }} />, id: 4 },
    { icon: <icons.FaComputer {...{ style }} />, id: 5 },
    { icon: <icons.FaImage {...{ style }} />, id: 6 },
    { icon: <icons.PiMagnifyingGlassPlusFill {...{ style }} />, id: 7 },
    { icon: <icons.FaMicrophone {...{ style }} />, id: 8 },
    { icon: <icons.SiMicrosoftexcel {...{ style }} />, id: 9 },
    { icon: <icons.PiNotepadFill {...{ style }} />, id: 10 },
    { icon: <icons.BiMenu {...{ style }} />, id: 11 },
    { icon: <icons.PiLeafFill {...{ style }} />, id: 12 },
    { icon: <icons.PiNumberFiveFill {...{ style }} />, id: 13 },
    { icon: <icons.IoFitness {...{ style }} />, id: 14 },
    { icon: <icons.PiRoadHorizonFill {...{ style }} />, id: 15 },
    { icon: <icons.PiHourglassMediumFill {...{ style }} />, id: 16 },
    { icon: <icons.FaCog {...{ style }} />, id: 17 },
    { icon: <icons.PiTriangleFill {...{ style }} />, id: 18 },
    { icon: <icons.PiIntersectBold {...{ style }} />, id: 19 },
    { icon: <icons.FaCarSide {...{ style }} />, id: 20 },
    { icon: <icons.FaBaseballBall {...{ style }} />, id: 21 },
    { icon: <icons.PiQuestionFill {...{ style }} />, id: 22 },
    { icon: <icons.FaBook {...{ style }} />, id: 23 },
    { icon: <icons.PiWatchFill {...{ style }} />, id: 24 },
    { icon: <icons.IoShirt {...{ style }} />, id: 25 },
    { icon: <icons.FaLemon {...{ style }} />, id: 26 },
    { icon: <icons.IoGift {...{ style }} />, id: 27 },
    { icon: <icons.PiToiletPaperFill {...{ style }} />, id: 28 },
    { icon: <icons.FaPencilAlt {...{ style }} />, id: 29 },
  ];

  const GetSetData = async () => {
    await handleCategory();
    await getCategoryData();
  };
  return (
    <ChangeIcon.Provider value={{ data, style }}>
      <div
        style={{
          display: modal2 ? "flex" : "none",
          transform: "translate(-50%, -50%)",
        }}
        className="absolute m-auto top-[50%] left-[50%] z-50  "
      >
        <div className="w-[494px] h-[236px] bg-white  border-2 rounded-2xl p-5 m-auto relative ">
          <div className="border-b-2 mb-6 ">
            <button
              onClick={() => setModal2(false)}
              className="btn btn-sm btn-circle  absolute right-2 top-2"
            >
              ✕
            </button>

            <h3 className="font-semibold text-[20px] mb-5">Add Category</h3>
          </div>
          <div>
            <div className="flex">
              <label
                onClick={() => {
                  setModal3(!modal3);
                }}
                className="form-control w-full flex cursor-pointer "
              >
                <div className="flex justify-evenly bg-[#F3F4F6] w-[84px] h-[48px]  text-[#A3A3A3] px-2 py-1 rounded-md border-solid border-2 border-[#D1D5DB] mb-4">
                  {/* Icon-oо сольж буй хэсэг */}
                  <div className=" p-3 flex gap-3">
                    <p> {CategoryAdd}</p>
                  </div>
                  <img src="/dropdown.svg" />
                </div>
              </label>
              <label className="form-control bg-[#F3F4F6] pr-3 rounded-md border-solid border-2 border-[#D1D5DB] mb-4 w-[360px] h-12  cursor-pointer">
                <input
                  className="outline-none bg-[#F3F4F6] pr-3 rounded-md  mb-4 w-[340px] h-full   pl-5 py-3"
                  onChange={(e) => setCategory_name(e.target.value)}
                  type="text"
                  placeholder="Write here"
                ></input>
              </label>
            </div>

            <button
              className=" px-5 py-2 text-white  bg-[#0166FF] rounded-3xl w-full h-10 mt-5 "
              onClick={GetSetData}
            >
              Add Category
            </button>
          </div>
        </div>
        <ChangeColor />
      </div>
    </ChangeIcon.Provider>
  );
}
export const useIcon = () => {
  return useContext(ChangeIcon);
};

export default AddCategory;
