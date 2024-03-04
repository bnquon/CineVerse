import React, { useState, useEffect } from 'react'
import "./MovieGraph.css"
import { Chart as Chartjs, Legend, defaults} from "chart.js/auto";
import { Bar } from "react-chartjs-2";

export const MovieGraph = () => {

//   const [ratingCount, setRatingCount] = useState([]);

//   useEffect(() => {
//     const getMovieRatings = async () => {

//         try {
//             const response = await fetch(`/api/getMovieRatings?movieTitle=${props.title}`, {
//                 method: 'GET',
//             });

//             if (response.ok) {
//                 const data = await json.response();
//                 const temp = data.ratingDistribution;
//                 const valuesArray = Object.values(temp);
//                 setRatingCount(e => [...e, ...valuesArray]);
//             } else console.error('Failed to fetch movie ratings: ', response.statusText);

//         } catch (error) {
//             console.error('Error fetching movie review ratings')
//         }

//     }
//   }, [setRatingCount])

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
