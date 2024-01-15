"use client";
import * as icons from "@/components/ReactIcons";
import IncomeExpence1 from "@/components/IncomeExpense1";
import IncomeExpence2 from "@/components/IncomeExpense2";
import { useAll } from "@/components/providers/AuthProvider";

export default function Main() {
  const { recordData } = useAll();
  return (
    <div className="w-full max-w-[1200px] max-h-[1080px] h-full m-auto ">
      <div className="flex gap-6 mb-6 flex-wrap justify-center">
        <img src="card.svg" />
        {/* +12m */}
        <div className="w-[384px] h-[216px] bg-white p-6 rounded-md">
          <div className="flex items-center gap-2 w-full h-[56px] border-b-1 border-b ">
            <div className="w-2 h-2 bg-[#0166FF] rounded-full"></div>
            <span>Total Expenses</span>
          </div>
          <div>
            <h2 className="text-[36px] font-bold">1,200,000₮</h2>
            <p className="text-[#64748B] text-lg -translate-y-2 mb-3">
              Your Income Amount
            </p>
          </div>

          <div className="flex items-center gap-2">
            <img src="uparrow.svg" />
            <span>32% from last month</span>
          </div>
        </div>
        {/* -12m */}

        <div className="w-[384px] h-[216px] bg-white p-6 rounded-md">
          <div className="flex items-center gap-2 w-full h-[56px] border-b-1 border-b ">
            <div className="w-2 h-2 bg-[#84CC16] rounded-full"></div>
            <span>Your Income</span>
          </div>
          <div>
            <h2 className="text-[36px] font-bold">-1,200,000₮</h2>
            <p className="text-[#64748B] text-lg -translate-y-2 mb-3">
              Your Income Amount
            </p>
          </div>

          <div className="flex items-center gap-2">
            <img className=" rotate-180 " src="uparrow.svg" />
            <span>32% from last month</span>
          </div>
        </div>
      </div>

      {/* Income - Expense */}

      <div className="flex gap-6 mb-6 flex-wrap justify-center">
        <IncomeExpence1 />
        <IncomeExpence2 />
      </div>
      <div>
        <div className="w-full h-full rounded-xl bg-white">
          <div className="flex items-center gap-2 w-full h-[56px] border-b-1 border-b font-semibold p-6">
            <span>Last Records</span>
          </div>
        </div>

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
                        background: card.color === "" ? "#000" : card.cateColor,
                      }}
                    ></div>
                    <div className="m-auto absolute z-20 translate-x-[50%] translate-y-[50%] top-0 left-4">
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
  );
}
