"use client";
import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { useAll } from "./providers/AuthProvider";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function IncomeExpense1() {
  const { recordData } = useAll();
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "right",
      },
    },
  };
  const labels = recordData.map((item) => [item.inputText]);
  const data = {
    labels,
    datasets: [
      {
        label: "Count",
        data: recordData.map((item) => item.amount),
        backgroundColor: [
          "rgba(255, 99, 132, 0.8)",
          "rgba(54, 162, 235, 0.8)",
          "rgba(255, 206, 86, 0.8)",
          "rgba(75, 192, 192, 0.8)",
          "rgba(153, 102, 255, 0.8)",
          "rgba(255, 159, 64, 0.8)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };
  return (
    <div className="w-[588px] h-[284px] rounded-[12px] flex flex-col bg-white">
      <header className="flex flex-row w-full h-[56px] px-[24px] py-[16px] justify-between">
        <h1>Income - Expense</h1>
      </header>
      <hr></hr>
      <div className="h-[300px] flex justify-center -translate-y-9">
        <Doughnut data={data} options={options} />
      </div>
    </div>
  );
}
