//Parsing
import { useState } from "react";
import { useAll } from "../app/layout";
import GG from "../components/GG";

export default function Dropdown() {
  const { drop, setDrop, select, data } = useAll();
  const handleClick = () => {
    setDrop(!drop);
  };
  return (
    <div className=" w-full mb-2">
      <div
        onClick={handleClick}
        className="cursor-pointer flex  items-center justify-center w-full form-control outline-none bg-[#F3F4F6] h-12 text-[#94A3B8]  rounded-md border-solid border-2 border-[#D1D5DB] mb-1 mt-2 pr-5 pl-3"
      >
        <div className="flex justify-between w-full">
          <div>
            {select === "" ? (
              "Find or choose category"
            ) : (
              <>
                {data.map((item, index) => {
                  return (
                    <div key={index} className="flex gap-2 items-center">
                      <img src={item.img}></img>
                      {item.title}
                    </div>
                  );
                })}
              </>
            )}
          </div>
          <img src="/dropdown.svg" />
        </div>
      </div>
      <GG />
    </div>
  );
}
