import { useContext } from "react";
import { Record } from "@/app/records/recordMain";

export default function Type() {
  const { setSelectedType } = useContext(Record);
  return (
    <div className="flex flex-col gap-[16px] w-full h-fit">
      <footer className="text-[16px] font-[600] text-black">Types</footer>
      <main className="flex flex-col gap-[4px] w-full h-fit">
        <div className="flex flex-row gap-[8px]">
          <input
            type="radio"
            name="type"
            className="w-[16px]"
            onClick={() => {
              setSelectedType("All");
            }}
          ></input>
          <label>All</label>
        </div>
        <div className="flex flex-row gap-[8px]">
          <input
            type="radio"
            name="type"
            className="w-[16px]"
            onClick={() => {
              setSelectedType("Income");
            }}
          ></input>
          <label>Income</label>
        </div>
        <div className="flex flex-row gap-[8px]">
          <input
            type="radio"
            name="type"
            className="w-[16px]"
            onClick={() => {
              setSelectedType("Expense");
            }}
          ></input>
          <label>Expense</label>
        </div>
      </main>
    </div>
  );
}
