"use client";

import IncomeExpence1 from "@/app/components/IncomeExpense1";
import IncomeExpence2 from "@/app/components/IncomeExpense2";
import LastRecords from "@/app/components/LastRecords";

export default function Main() {
  return (
    <div className="w-full max-w-[1200px] h-[1148px] m-auto ">
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
        <div className="w-full h-full rounded-xl bg-white ">
          <div className="flex items-center gap-2 w-full h-[56px] border-b-1 border-b font-semibold p-6">
            <span>Last Records</span>
          </div>
          <div className="px-6">
            <LastRecords />
            <LastRecords />
            <LastRecords />
            <LastRecords />
            <LastRecords />
          </div>
        </div>
      </div>
    </div>
  );
}
