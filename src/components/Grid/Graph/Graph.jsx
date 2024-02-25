import React from 'react'
import "./Graph.css"
import { Chart as Chartjs, Legend, defaults} from "chart.js/auto";
import { Bar } from "react-chartjs-2";

defaults.maintainAspectRatio = false;

export const Graph = () => {

return (
    <div className='graph-container'>

      <h1 id='chart-title'>Rating Distribution</h1>
      <div id="chart-container">
        <Bar
          data={{
            labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
            datasets: [
              {
                data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
              },
            ],
          }}
          options={{
            scales: {
              x: {
                grid: {
                  display: false,
                },
              },
              y: {
                grid: {
                  display: false,
                },
              },
            },
            plugins: {
              legend: {
                display: false,
              },
            }
          }}
        />
      </div>

    </div>
  );
}
