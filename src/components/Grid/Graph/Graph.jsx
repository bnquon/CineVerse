import React, { useState, useEffect } from 'react'
import "./Graph.css"
import { Chart as Chartjs, Legend, defaults, elements} from "chart.js/auto";
import { Bar } from "react-chartjs-2";

defaults.maintainAspectRatio = false;

export const Graph = (props) => {

  console.log('PROPS IN GRAPH.jsx: ', props);
  const [ratingCount, setRatingCount] = useState([]);

  useEffect(() => {
    const temp = props.distribution;
    const valuesArray = Object.values(temp);
    setRatingCount(valuesArray);

  }, []);
  
  return (
      <div className='graph-container'>

        <h1 id='chart-title'>Rating Distribution</h1>
        <div id="chart-container">
          <Bar
            data={{
              labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
              datasets: [
                {
                  data: ratingCount,
                  backgroundColor: 'hsl(17, 83%, 64%)',
                  borderWidth: 3,
                  borderColor: 'hsl(0, 100%, 50%)',
                  barPercentage: 0.8,
                },
              ],
            }}
            options={{
              scales: {
                x: {
                  ticks: {
                    color: 'black',
                    font: {
                      size: 18,
                      weight: 'bold',
                    },
                  },
                  grid: {
                    display: false,
                  },
                  title: { 
                    display: true,
                    text: 'Rating',
                    color: 'black', 
                    font: {
                        size: 18,
                        weight: 'bold',
                    },
                  },
                },
                y: {
                  ticks: {
                    precision: 0,
                    color: 'black',
                    font: {
                      size: 14,
                      weight: 'bold',
                    },
                  },
                  grid: {
                    display: false,
                  },
                  title: { 
                    display: true,
                    text: 'Count',
                    color: 'black', 
                    font: {
                        size: 18,
                        weight: 'bold',                               
                    },
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
