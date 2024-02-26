import React from 'react'
import "./MovieGraph.css"
import { Chart as Chartjs, Legend, defaults} from "chart.js/auto";
import { Bar } from "react-chartjs-2";

export const MovieGraph = () => {
  return (
    <div id='graph-Container'>
        <Bar 
            data={{
                labels: ["10", "9", "8", "7", "6", "5", "4", "3", "2", "1"],
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
                indexAxis: 'y',
                scales: {
                    x: {                        
                        ticks: {
                            display: false,
                        },
                        title: { 
                            display: true,
                            text: 'Frequency',
                            color: 'black', 
                            font: {
                                size: 20,
                                weight: 'bold',
                            },
                        },
                        grid: {
                            display: false,
                        },
                        border: {
                            display: false,
                        },
                    },
                    y: {
                        title: { 
                            display: true,
                            text: 'Rating',
                            color: 'black', 
                            font: {
                                size: 20,
                                weight: 'bold',                               
                            },
                        },
                        ticks: {
                            color: 'black', 
                            font: {
                                size: 15,
                                weight: 'bold',
                            }
                        },
                        grid: {
                            display: false,
                        },
                        border: {
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
  )
}
