import { Component } from "react";

import './chart.css'

class Chart extends Component{
    constructor(props){
        super(props);
        this.state={
            chart: true,
        };
    }



    render(){
        const pawns = document.querySelectorAll(".pawn").length,
            bishops = document.querySelectorAll(".bishop").length,
            knights = document.querySelectorAll(".knight").length,
            rooks = document.querySelectorAll(".rook").length,
            queens = document.querySelectorAll(".queen").length,
            kings = document.querySelectorAll(".king").length;
        let myChart = document.querySelector("#my-chart").getContext('2d');
        const chart = new Chart(myChart, {
            type: 'bar',
            data: {
                labels: ['Pawns', 'Bishops', 'Knights', 'Rooks', 'Queens', 'Kings'],
                datasets: [{
                    label: 'Amount',
                    data: [pawns, bishops, knights, rooks, queens, kings],
                    // data: [pawns, 3, 2, 1, 5, kings],
                    backgroundColor: ['red', 'orange', 'yellow', 'green', 'blue', 'purple']
                }]
            },
            options: {
            }
        });
        return(
            <div class="chart-container">
                <canvas id="my-chart"></canvas>
            </div>
        );
    }
}

export default Chart;


// const pawns = document.querySelectorAll("#pawn").length,
// bishops = document.querySelectorAll("#bishop").length,
// knights = document.querySelectorAll("#knight").length,
// rooks = document.querySelectorAll("#rook").length,
// queens = document.querySelectorAll("#queen").length,
// kings = document.querySelectorAll("#king").length;
// let myChart = document.getElementById("my-chart").getContext('2d');
// let chessChart = new Chart(myChart, {
// type: 'bar',
// data: {
//     labels: ['Pawns', 'Bishops', 'Knights', 'Rooks', 'Queens', 'Kings'],
//     datasets: [{
//         label: 'Amount',
//         data: [pawns, bishops, knights, rooks, queens, kings],
//         // data: [pawns, 3, 2, 1, 5, kings],
//         backgroundColor: ['red', 'orange', 'yellow', 'green', 'blue', 'purple']
//     }]
// },
// options: {
// }
// });