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
import { faker } from "@faker-js/faker";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const data = {
  labels,
  datasets: [
    {
      label: "Income",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: "rgba(255, 99, 132, 0.8)",
    },
    {
      label: "Expense",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: "rgba(53, 162, 235, 0.8)",
    },
  ],
};
export default function IncomeExpence2() {
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
