//Parsing
"use client";
import { useAll } from "@/components/providers/AuthProvider";
import CategoryInner from "./Category_Input_Inner";
export default function AddRecord() {
  const { drop, setDrop, inputIcon, inputText } = useAll();
  const handleClick = () => {
    setDrop(!drop);
  };

  return (
    <div className=" w-full mb-2">
      <div
        onClick={handleClick}
        className="cursor-pointer flex  items-center justify-center w-full form-control outline-none bg-[#F3F4F6] h-12 text-[#94A3B8]  rounded-md border-solid border-2 border-[#D1D5DB] mb-1 mt-2 pr-5 pl-3"
      >
        <div className="flex justify-between w-full ">
          <div className="flex gap-3 items-center">
            {inputIcon}
            <p>{inputText}</p>
          </div>

          <img src="/dropdown.svg" />
        </div>
      </div>
      <CategoryInner />
    </div>
  );
}
