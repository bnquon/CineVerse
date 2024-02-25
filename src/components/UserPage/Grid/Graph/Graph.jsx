import React from 'react';
import "./Graph.css";
import { Chart as Chartjs, Legend, defaults} from "chart.js/auto";
import { Bar } from "react-chartjs-2";

defaults.maintainAspectRatio = false;

function Graph () {

return (
    <div className='graph-container'>

      <h1 id='chart-title'>Rating Distribution</h1>
      <div id="chart-container">
        <Bar
          data={{
            labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
            datasets: [
              {
                data: [1/55, 2/55, 3/55, 4/55, 5/55, 6/55, 7/55, 8/55, 9/55, 10/55],
                backgroundColor: 'hsl(17, 83%, 64%)',
                borderWidth: 3,
                borderColor: 'hsl(0, 100%, 50%)',
              },
            ],
          }}
          options={{
            scales: {
              x: {
                ticks: {
                  font: {
                    size: 18,
                  },
                },
                grid: {
                  display: false,
                },
              },
              y: {
                min: 0,
                max: 1,
                ticks: {
                  font: {
                    size: 14,
                  },
                },
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

export default Graph;