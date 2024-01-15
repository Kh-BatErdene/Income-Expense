"use client";
import { useAll } from "@/components/providers/AuthProvider";
import AddCategory from "@/components/AddCategory";
import * as icons from "@/components/ReactIcons";

export default function Main() {
  const { modal, setModal2, modal2, categoryData, recordData } = useAll();
  return (
    // column-1
    <div className="w-full max-w-[1200px] h-full m-auto flex gap-6 ">
      <div
        className="bg-black opacity-30 z-10 w-full h-full absolute top-0 left-0 overflow-hidden"
        style={{ display: modal ? "flex" : "none" }}
      ></div>
      <div
        className="  bg-black opacity-30 z-30 w-full h-screen absolute top-0 left-0  "
        style={{ display: modal2 ? "flex" : "none" }}
      ></div>
      <div className="w-[282px] max-h-[1080px] h-full bg-white p-4 mb-6 relative">
        <h1 className="font-black text-[24px] mb-6">Records</h1>
        <button
          onClick={() => setModal2(!modal2)}
          className="btn bg-[#0166FF] hover:bg-[#2f81fc] text-white h-8 rounded-3xl w-full mb-6"
        >
          + Add
        </button>
        <div className="mb-6">
          <input
            type="search"
            placeholder="Search"
            className="w-full py-1 px-3 rounded-md border-2"
          />
        </div>
        <p>Types</p>
        <div className="flex items-center gap-2 mb-2 mt-4">
          <input type="checkbox" className="checkbox checkbox-md" />
          <span>All</span>
        </div>
        <div className="flex items-center gap-2 mb-2">
          <input type="checkbox" className="checkbox checkbox-md" />
          <span>Income</span>
        </div>
        <div className="flex items-center gap-2">
          <input type="checkbox" className="checkbox checkbox-md" />
          <span>Expense</span>
        </div>
        <div className="flex justify-between mt-7 mb-5">
          <h2>Category</h2>
          <span className="text-[#E5E7EB]">Clear</span>
        </div>
        {categoryData.map((card, index) => (
          <div className=" w-full  mb-2 flex justify-between" key={index}>
            <div className="cursor-pointer hover:bg-gray-100 px-5 py-1 rounded-md flex flex-row w-full h-full items-center gap-[12px]">
              <img src="/eye.svg" />
              <p>{card.Category_name}</p>
            </div>
            <img src="/dropdown.svg" />
          </div>
        ))}
        <hr></hr>
        <div className="mt-2">
          <button
            onClick={() => setModal2(!modal2)}
            className="mt-1 hover:bg-gray-100 bg-gray-50 w-full p-1 rounded-md  "
          >
            + Add Category
          </button>
        </div>

        {/* <Range /> */}
      </div>

      {/* column-2 */}
      <div className="w-full h-full">
        <div className="flex justify-between w-full">
          <div className="flex items-center gap-2">
            <img src="arrow.svg"></img>
            <p className="w-[92p]">Last 30 Days</p>
            <img className="rotate-180" src="arrow.svg"></img>
          </div>

          <div className=" pr-2 bg-white border-2 rounded-md">
            <select className="py-3 px-4 pr-8  rounded-md">
              <option className="text-base">Newest first</option>
              <option className="text-base">Yesterday</option>
            </select>
          </div>
        </div>

        <div className="mt-4 flex justify-between items-center px-6 bg-white py-3 border-2 rounded-md mb-3">
          <div className="flex items-center gap-4">
            <input type="checkbox" className="checkbox rounded-sm" />
            <span>Select all</span>
          </div>

          <span>- 35,500₮</span>
        </div>

        <div>
          <h3 className="mb-3 mt-6">Today</h3>

          {recordData.map((card, index) => {
            const Icon = icons[card.recordIcon];
            return (
              <div
                className="flex bg-white border-2 border-gray-200 rounded-md w-full items-center gap-4  pb-2 cursor-pointer hover:bg-gray-50 mt-2 relative"
                key={index}
              >
                <div className="flex items-center h-full ml-5 ">
                  <div className=" flex h-10 items-center gap-3 pt-2 w-full">
                    <div className="flex gap-4">
                      <div
                        className="w-10 h-10 rounded-full relative"
                        style={{
                          background: card.color === "" ? "#000" : card.color,
                        }}
                      ></div>
                      <div className="m-auto absolute z-20 translate-x-[50%] translate-y-[50%]">
                        <Icon size="25px " fill="white"></Icon>
                      </div>

                      <p>{card.inputText}</p>
                    </div>
                    <p className="absolute right-4"> {card.amount}₮</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <AddCategory />
    </div>
  );
}
