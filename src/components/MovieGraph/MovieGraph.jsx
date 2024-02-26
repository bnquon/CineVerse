import React from 'react'
import "./MovieGraph.css"
import { Chart as Chartjs, Legend, defaults} from "chart.js/auto";
import { Bar } from "react-chartjs-2";

export const MovieGraph = () => {
  return (
    <>  
        <div id="left-cell">

            <div id="average">
                <h2>USER AVERAGE RATING ⭐ 9/10 </h2>
            </div>
            <div id='graph-Container'>
                <Bar 
                    data={{
                        labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
                        datasets: [
                        {
                            data: [10, 2, 3, 4, 5, 6, 7, 8, 9, 10],
                            backgroundColor: 'hsl(17, 83%, 64%)',
                            borderWidth: 3,
                            borderColor: 'hsl(0, 100%, 50%)',
                            barPercentage: 0.7,
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
                                    display: true,
                                },
                                title: { 
                                    display: true,
                                    text: 'Rating',
                                    color: 'black', 
                                    font: {
                                        size: 22,
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
                                    text: 'Count',
                                    color: 'black', 
                                    font: {
                                        size: 22,
                                        weight: 'bold',                               
                                    },
                                },
                                ticks: {
                                    display: false,
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
        </div>
    </>
        
  )
}
