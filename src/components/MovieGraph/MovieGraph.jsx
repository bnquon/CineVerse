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
                            font: {
                                size: 20,
                            },
                        },
                        grid: {
                            display: false,
                        }
                    },
                    y: {
                        title: { 
                            display: true,
                            text: 'Rating',
                            font: {
                                size: 20,
                            },
                        },
                        ticks: {
                            font: {
                                size: 15,
                            }
                        },
                        grid: {
                            display: false,
                        }
                    }
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
