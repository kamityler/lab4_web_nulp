import './chart.css';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'
import {Bar} from 'react-chartjs-2'
import React, {useState, useEffect} from 'react'

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);


function Chart(props) {

  const [chartData, setChartData] = useState({
    datasets:[],
  })

  const [chartOptions, setChartOptions] = useState({});

  useEffect(()=>{
    setTimeout(() => {
      const pawns = document.querySelectorAll(".pawn").length,
        bishops = document.querySelectorAll(".bishop").length,
        knights = document.querySelectorAll(".knight").length,
        rooks = document.querySelectorAll(".rook").length,
        queens = document.querySelectorAll(".queen").length,
        kings = document.querySelectorAll(".king").length;
      setChartData({
        labels: ['Pawns', 'Bishops', 'Knights', 'Rooks', 'Queens', 'Kings'],
        datasets:[
          {
            label: 'Кількість',
            data: [pawns, bishops, knights, rooks, queens, kings],
            borderColor: 'rgb(118, 150, 86)',
            backgroundColor: ['rgb(118, 150, 86)','rgb(118, 150, 86)','rgb(118, 150, 86)','rgb(118, 150, 86)','rgb(118, 150, 86)','rgb(118, 150, 86)'],
          },
        ],
      })
      setChartOptions({
      responsive:true,
      plugins:{
        legend:{
          position:'top'
        },
        title:{
          display:true,
          text:'Фігури на дошці'
        }
      },
      scales: {
        y:{
          beginAtZero: true,
          ticks:{
            callback: function(value,index){
              //console.log(this.getLabelForValue(index));
              return index%2?null:value;
            }
          }
        }
      }
    })
    }, 1);
    
  },[])
 
  return (
    <div className="chart-container">
      <Bar height={300} width={300} options={chartOptions} data={chartData}/>
    </div>
  );
}

export default Chart;