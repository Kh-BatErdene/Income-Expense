import Diagram2 from "./Diagram2";

export default function IncomeExpence2() {
  const data = [
    {
      title: "Bills",
      color: "#0166FF",
    },
    {
      title: "Food",
      color: "#E74694",
    },
    {
      title: "Shopping",
      color: "#FDBA8C",
    },
    {
      title: "Insurance",
      color: "#16BDCA",
    },
    {
      title: "Clothing",
      color: "#F2901C",
    },
  ];
  return (
    <div className="w-full max-w-[588px] h-[284px] rounded-2xl bg-white px-6 ">
      <div className="flex items-center gap-2 w-full h-[56px] border-b-1 border-b mb-8 justify-between">
        <span className=" font-semibold">Income - Expense</span>
        <span className="text-[#6B7280]">Jun 1 - Nov 30</span>
      </div>
      <div className="flex gap-10 ">
        <img src="diag.svg" />
        <div className="w-full">
          {data.map((item, index) => {
            return (
              <Diagram2 key={index} title={item.title} color={item.color} />
            );
          })}
        </div>
      </div>
    </div>
  );
}
