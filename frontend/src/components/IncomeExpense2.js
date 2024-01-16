import Diagram2 from "./Diagram2";
import { Chart as ChartJS } from "chart.js/auto";
import { Doughnut } from "react-chartjs-2";
export default function IncomeExpence2() {
  const data = [
    {
      title: "Bills",
      value: "1000",
      color: "#0166FF",
    },
    {
      title: "Food",
      value: "1000",
      color: "#E74694",
    },
    {
      title: "Shopping",
      value: "1000",
      color: "#FDBA8C",
    },
    {
      title: "Insurance",
      value: "1000",
      color: "#16BDCA",
    },
    {
      title: "Clothing",
      value: "1000",
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
        <div className="w-full">
          <Doughnut
            data={{
              labels: data.map((data) => data.title),
              datasets: [
                {
                  label: "Count",
                  data: data.map((data) => data.value),
                  backgroundColor: [
                    "rgba(43, 63, 229, 0.8)",
                    "rgba(250, 192, 19, 0.8)",
                    "rgba(253, 135, 135, 0.8)",
                  ],
                  borderColor: [
                    "rgba(43, 63, 229, 0.8)",
                    "rgba(250, 192, 19, 0.8)",
                    "rgba(253, 135, 135, 0.8)",
                  ],
                },
              ],
            }}
            options={{
              plugins: {
                title: {
                  text: "Revenue Sources",
                },
              },
            }}
          />
        </div>
      </div>
    </div>
  );
}
