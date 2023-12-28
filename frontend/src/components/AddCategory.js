"use client";
import { useAll } from "@/app/layout";
import React from "react";
const ChangeIcon = createContext();

import { createContext, useContext, useState } from "react";
import { IoMdHome } from "react-icons/io";
import { MdHomeFilled } from "react-icons/md";
import { TiHome } from "react-icons/ti";
import { RiContactsBook2Fill } from "react-icons/ri";
import { MdContactMail } from "react-icons/md";
import { PiLadderFill } from "react-icons/pi";
import { PiIntersectSquareFill } from "react-icons/pi";
import { FaImage } from "react-icons/fa6";
import { FaMagnifyingGlassPlus } from "react-icons/fa6";
import { FaMicrophone } from "react-icons/fa6";
import { SiMicrosoftexcel } from "react-icons/si";
import { PiNotepadFill } from "react-icons/pi";
import { ImMenu } from "react-icons/im";
import { PiLeafFill } from "react-icons/pi";
import { PiNumberFiveFill } from "react-icons/pi";
import { PiNumberCircleSevenFill } from "react-icons/pi";
import { PiRoadHorizonFill } from "react-icons/pi";
import { GiSandsOfTime } from "react-icons/gi";
import { PiAnchorSimpleBold } from "react-icons/pi";
import { PiTriangleFill } from "react-icons/pi";
import { PiIntersectBold } from "react-icons/pi";
import { BiLogoFlickrSquare } from "react-icons/bi";
import { FaBaseballBall } from "react-icons/fa";
import { AiFillQuestionCircle } from "react-icons/ai";
import { TbSquareRoundedLetterA } from "react-icons/tb";
import { BsWatch } from "react-icons/bs";
import { PiGlobeSimpleFill } from "react-icons/pi";
import { TbLemon } from "react-icons/tb";
import { FaPeace } from "react-icons/fa";
import { PiToiletPaperFill } from "react-icons/pi";
import { FaPencilAlt } from "react-icons/fa";
import ChangeColor from "./ChangeColor";

function AddCategory() {
  const { modal2, setModal3, modal3, colorgg, CategoryAdd } = useAll();

  // console.log(CategoryAdd);

  const style = { color: colorgg };
  const data = [
    <TiHome {...{ style }} />,
    <MdHomeFilled {...{ style }} />,
    <RiContactsBook2Fill {...{ style }} />,
    <MdContactMail {...{ style }} />,
    <PiLadderFill {...{ style }} />,
    <PiIntersectSquareFill {...{ style }} />,
    <FaImage {...{ style }} />,
    <FaMagnifyingGlassPlus {...{ style }} />,
    <FaMicrophone {...{ style }} />,
    <SiMicrosoftexcel {...{ style }} />,
    <PiNotepadFill {...{ style }} />,
    <ImMenu {...{ style }} />,
    <PiLeafFill {...{ style }} />,
    <PiNumberFiveFill {...{ style }} />,
    <PiNumberCircleSevenFill {...{ style }} />,
    <PiRoadHorizonFill {...{ style }} />,
    <GiSandsOfTime {...{ style }} />,
    <PiAnchorSimpleBold {...{ style }} />,
    <PiTriangleFill {...{ style }} />,
    <PiIntersectBold {...{ style }} />,
    <BiLogoFlickrSquare {...{ style }} />,
    <FaBaseballBall {...{ style }} />,
    <AiFillQuestionCircle {...{ style }} />,
    <TbSquareRoundedLetterA {...{ style }} />,
    <BsWatch {...{ style }} />,
    <PiGlobeSimpleFill {...{ style }} />,
    <TbLemon {...{ style }} />,
    <FaPeace {...{ style }} />,
    <PiToiletPaperFill {...{ style }} />,
    <FaPencilAlt {...{ style }} />,
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
                className="form-control w-full flex cursor-pointer "
              >
                <div className="flex justify-evenly bg-[#F3F4F6] w-[84px] h-[48px]  text-[#A3A3A3] px-2 py-1 rounded-md border-solid border-2 border-[#D1D5DB] mb-4">
                  {/* Icon-oо сольж буй хэсэг */}
                  <div className=" p-3 ">{CategoryAdd}</div>
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
    </ChangeIcon.Provider>
  );
}
export const useIcon = () => {
  return useContext(ChangeIcon);
};

export default AddCategory;
