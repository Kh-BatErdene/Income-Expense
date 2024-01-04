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
    AddCategory,
  } = useAll();

  const [value, setValue] = useState("");
  const options = [
    { label: "Food & Drinks", value: "Food & Drinks" },
    { label: "Shopping", value: "Shopping" },
  ];

  const style = { color: colorgg };
  const data = [
    <FaIcons.FaHome {...{ style }} />,
    <FaIcons.FaHouseUser {...{ style }} />,
    <FaIcons.FaIdBadge {...{ style }} />,
    <FaIcons.FaIdCard {...{ style }} />,
    <PiIcons.PiLadder {...{ style }} />,
    <PiIcons.PiExcludeSquareDuotone {...{ style }} />,
    <FaIcons.FaImage {...{ style }} />,
    <PiIcons.PiMagnifyingGlassPlusFill {...{ style }} />,
    <FaIcons.FaMicrophone {...{ style }} />,
    <SiIcons.SiMicrosoftexcel {...{ style }} />,
    <PiIcons.PiNotepadFill {...{ style }} />,
    <BiIcons.BiMenu {...{ style }} />,
    <PiIcons.PiLeafFill {...{ style }} />,
    <PiIcons.PiNumberFiveFill {...{ style }} />,
    <PiIcons.PiNumberCircleSevenFill {...{ style }} />,
    <PiIcons.PiRoadHorizonFill {...{ style }} />,
    <PiIcons.PiHourglassMediumFill {...{ style }} />,
    <PiIcons.PiAnchorSimpleBold {...{ style }} />,
    <PiIcons.PiTriangleFill {...{ style }} />,
    <PiIcons.PiIntersectBold {...{ style }} />,
    <BiIcons.BiLogoFlickrSquare {...{ style }} />,
    <FaIcons.FaBaseballBall {...{ style }} />,
    <PiIcons.PiQuestionFill {...{ style }} />,
    <PiIcons.PiNewspaperClipping {...{ style }} />,
    <PiIcons.PiWatchFill {...{ style }} />,
    <PiIcons.PiGlobeSimpleFill {...{ style }} />,
    <FaIcons.FaLemon {...{ style }} />,
    <FaIcons.FaPeace {...{ style }} />,
    <PiIcons.PiToiletPaperFill {...{ style }} />,
    <FaIcons.FaPencilAlt {...{ style }} />,
  ];

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
                <select
                  className="outline-none bg-[#F3F4F6] w-[350px] h-12 text-[#A3A3A3] px-4 py-2 cursor-pointer"
                  onChange={(e) => setValue(e.target.value)}
                >
                  {" "}
                  <option selected disabled className="font-semibold">
                    Choose your title
                  </option>
                  {options.map((option, index) => (
                    <option key={index} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                  <option className="font-semibold">Food & Drinks</option>
                  <option className="font-semibold">Shopping</option>
                  <option className="font-semibold">Housing</option>
                  <option className="font-semibold">Transportation</option>
                  <option className="font-semibold">Vehicle</option>
                  <option className="font-semibold">
                    Life & Entertainment
                  </option>
                  <option className="font-semibold">Financial expenses</option>
                  <option className="font-semibold">Investments</option>
                  <option className="font-semibold">Income</option>
                  <option className="font-semibold">Others</option>
                </select>
              </label>
            </div>

            <button
              className=" px-5 py-2 text-white  bg-[#0166FF] rounded-3xl w-full h-10 mt-5 "
              onClick={() => AddCategory(value)}
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
