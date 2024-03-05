import React, { useState, useEffect } from 'react'
import "./MovieGraph.css"
import { Bar } from "react-chartjs-2";

export const MovieGraph = (props) => {

    const [movieRatingCount, setMovieRatingCount] = useState([]);
    const [averageRating, updateAverageRating] = useState(0);

    useEffect(() => {
        const populateMovieGraph = async () => {
            try {
                const response = await fetch(`/api/getMovieRatings?movieName=${props.title}`, {
                    method: 'GET',
                });
                if (response.ok) {
                    const data = await response.json();
                    const temp = data.movieInfo;
                    const movieValuesArray = Object.values(temp);
                    setMovieRatingCount(movieValuesArray);
                }
            } catch (error) {
                console.error('Error fetching user ratings: ', error.message);
            }
        }
        populateMovieGraph();
    }, [props.title])

    useEffect(() => {
        var numOfReviews = 0;
        var sum = 0;
        for (let i = 0; i < movieRatingCount.length; i++) {
            if (movieRatingCount[i] != 0) {
                numOfReviews += movieRatingCount[i];
                sum += (movieRatingCount[i]*(i+1));
            }
        }
        var temp = sum / numOfReviews;
        updateAverageRating(Math.round(temp * 10) / 10)
    }, [movieRatingCount])

    return (
    <>  
        <div id="left-cell">

            <div id="average">
                <h2>Average Rating by Users ⭐ {averageRating}/10 </h2>
            </div>
            <div id='graph-Container'>
                <Bar 
                    data={{
                        labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
                        datasets: [
                        {
                            data: movieRatingCount,
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
                                    precision: 0,
                                    color: 'black',
                                    font: {
                                      size: 18,
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
