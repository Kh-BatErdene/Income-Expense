"use client";
import { useAll } from "@/components/providers/AuthProvider";
import React, { useState } from "react";
const ChangeIcon = createContext();
import ChangeColor from "./ChangeColor";
import { createContext, useContext } from "react";
import * as FaIcons from "react-icons/fa";
import * as PiIcons from "react-icons/pi";
import * as SiIcons from "react-icons/si";
import * as BiIcons from "react-icons/bi";

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
    addCategory,
    setAddCategory,
    chooseIcon,
  } = useAll();

  const style = { color: colorgg };
  const data = [
    { icon: <FaIcons.FaHome {...{ style }} />, id: 0 },
    { icon: <FaIcons.FaHouseUser {...{ style }} />, id: 1 },
    { icon: <FaIcons.FaIdBadge {...{ style }} />, id: 2 },
    { icon: <FaIcons.FaIdCard {...{ style }} />, id: 3 },
    { icon: <PiIcons.PiLadder {...{ style }} />, id: 4 },
    { icon: <PiIcons.PiExcludeSquareDuotone {...{ style }} />, id: 5 },
    { icon: <FaIcons.FaImage {...{ style }} />, id: 6 },
    { icon: <PiIcons.PiMagnifyingGlassPlusFill {...{ style }} />, id: 7 },
    { icon: <FaIcons.FaMicrophone {...{ style }} />, id: 8 },
    { icon: <SiIcons.SiMicrosoftexcel {...{ style }} />, id: 9 },
    { icon: <PiIcons.PiNotepadFill {...{ style }} />, id: 10 },
    { icon: <BiIcons.BiMenu {...{ style }} />, id: 11 },
    { icon: <PiIcons.PiLeafFill {...{ style }} />, id: 12 },
    { icon: <PiIcons.PiNumberFiveFill {...{ style }} />, id: 13 },
    { icon: <PiIcons.PiNumberCircleSevenFill {...{ style }} />, id: 14 },
    { icon: <PiIcons.PiRoadHorizonFill {...{ style }} />, id: 15 },
    { icon: <PiIcons.PiHourglassMediumFill {...{ style }} />, id: 16 },
    { icon: <PiIcons.PiAnchorSimpleBold {...{ style }} />, id: 17 },
    { icon: <PiIcons.PiTriangleFill {...{ style }} />, id: 18 },
    { icon: <PiIcons.PiIntersectBold {...{ style }} />, id: 19 },
    { icon: <BiIcons.BiLogoFlickrSquare {...{ style }} />, id: 20 },
    { icon: <FaIcons.FaBaseballBall {...{ style }} />, id: 21 },
    { icon: <PiIcons.PiQuestionFill {...{ style }} />, id: 22 },
    { icon: <PiIcons.PiNewspaperClipping {...{ style }} />, id: 23 },
    { icon: <PiIcons.PiWatchFill {...{ style }} />, id: 24 },
    { icon: <PiIcons.PiGlobeSimpleFill {...{ style }} />, id: 25 },
    { icon: <FaIcons.FaLemon {...{ style }} />, id: 26 },
    { icon: <FaIcons.FaPeace {...{ style }} />, id: 27 },
    { icon: <PiIcons.PiToiletPaperFill {...{ style }} />, id: 28 },
    { icon: <FaIcons.FaPencilAlt {...{ style }} />, id: 29 },
  ];

  const Fuck = () => {
    handleCategory(addCategory, chooseIcon);
    getCategoryData();
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
                onClick={() => setModal3(!modal3)}
                className="form-control w-full flex cursor-pointer "
              >
                <div className="flex justify-evenly bg-[#F3F4F6] w-[84px] h-[48px]  text-[#A3A3A3] px-2 py-1 rounded-md border-solid border-2 border-[#D1D5DB] mb-4">
                  {/* Icon-oо сольж буй хэсэг */}
                  <div className=" p-3 ">{CategoryAdd}</div>
                  <img src="/dropdown.svg" />
                </div>
              </label>
              <label className="form-control bg-[#F3F4F6] pr-3 rounded-md border-solid border-2 border-[#D1D5DB] mb-4 w-[360px] h-12  cursor-pointer">
                <input
                  className="outline-none bg-[#F3F4F6] pr-3 rounded-md  mb-4 w-[340px] h-full   pl-5 py-3"
                  onChange={(e) => setAddCategory(e.target.value)}
                  type="text"
                  placeholder="Write here"
                ></input>
              </label>
            </div>

            <button
              className=" px-5 py-2 text-white  bg-[#0166FF] rounded-3xl w-full h-10 mt-5 "
              onClick={() => Fuck(addCategory)}
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
