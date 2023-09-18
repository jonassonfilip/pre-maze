// components/MyLineChart.tsx
"use client";
import { Chart as ChartJS, ArcElement } from "chart.js";
import { read } from "fs";
import { Pie } from "react-chartjs-2";

/*--color-music: #f2b360;
--color-books-and-media: #81ced5;
--color-movies-and-tv: #bc6cca;
--color-webb-and-other: #f13c59;*/

const musicColor: string = "#f2b360";
const booksAndMedia: string = "#81ced5";
const moviesAndTv: string = "#bc6cca";
const webbAndOther: string = "#f13c59";

// Register ChartJS components using ChartJS.register
ChartJS.register(ArcElement);

export default function PieChart() {
  const pieData = {
    labels: ["Red", "Blue", "Yellow"],
    datasets: [
      {
        label: "My First Dataset",
        data: [45, 15, 9, 32],
        backgroundColor: [musicColor, booksAndMedia, moviesAndTv, webbAndOther],
        hoverOffset: 4,
      },
    ],
  };

  return (
    <>
      <div>
        <Pie data={pieData}></Pie>
      </div>
    </>
  );
}
