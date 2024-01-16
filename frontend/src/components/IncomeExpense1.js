"use client";
import { Chart as ChartJS } from "chart.js/auto";
import { Bar } from "react-chartjs-2";

export default function IncomeExpense1() {
  return (
    <div className="w-[588px] h-[284px] rounded-[12px] flex flex-col bg-white">
      <header className="flex flex-row w-full h-[56px] px-[24px] py-[16px] justify-between">
        <h1>Income - Expense</h1>
      </header>
      <hr></hr>
      <main className="w-full h-full px-5 flex items-center justify-center">
        <Bar
          data={{
            labels: [
              "January",
              "February",
              "March",
              "April",
              "May",
              "June",
              "July",
            ],
            datasets: [
              {
                label: "Income",
                data: [1000, 2000, 3000, 4000, 5000, 6000, 7000],
              },
              {
                label: "Expense",
                data: [1000, 2000, 3000, 4000, 5000, 6000, 7000],
              },
            ],
          }}
        />
        <div className="w-[450px] h-[250px]"></div>
      </main>
    </div>
  );
}
