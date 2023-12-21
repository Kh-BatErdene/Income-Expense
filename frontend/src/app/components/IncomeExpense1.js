import Diagram from "./Diagram";

export default function IncomeExpence1() {
  return (
    <div className="w-full max-w-[588px] h-[284px] rounded-2xl bg-white px-6 ">
      <div className="flex items-center gap-2 w-full h-[56px] border-b-1 border-b font-semibold">
        <span>Income - Expense</span>
      </div>
      <div className="flex gap-4 mt-8">
        <div className="text-[#71717A] flex flex-col gap-4">
          <p>3`000`000</p>
          <p>2`000`000</p>
          <p>1`000`000</p>
          <p>0</p>
        </div>

        <Diagram />
      </div>
    </div>
  );
}
