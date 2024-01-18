import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { useAll } from "./providers/AuthProvider";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function IncomeExpence2() {
  const { recordData } = useAll();

  const labels = recordData.map((item) => [item.inputText]);
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
    },
    scales: {
      y: {
        min: 0,
      },
    },
  };

  const data = {
    labels,

    datasets: [
      {
        label: "Income",
        data: recordData.map((item) =>
          item.isExpense === false ? item.amount : null
        ),
        backgroundColor: "#84CC16",
      },
      {
        label: "Expense",
        data: recordData.map((item) =>
          item.isExpense === true ? item.amount : null
        ),
        backgroundColor: "#0166FF",
      },
    ],
  };
  return (
    <div className="w-full max-w-[588px] h-[284px] rounded-2xl bg-white px-6 ">
      <div className="flex items-center gap-2 w-full h-[56px] border-b-1 border-b mb-8 justify-between">
        <span className=" font-semibold">Income - Expense</span>
        <span className="text-[#6B7280]">Jun 1 - Nov 30</span>
      </div>

      <div className="flex gap-10 ">
        <div className="w-full max-w-[588px] h-[200px] flex justify-center -translate-y-7">
          <Bar data={data} options={options} />
        </div>
      </div>
    </div>
  );
}
