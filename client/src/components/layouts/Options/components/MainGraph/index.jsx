import React from "react";
import {Chart} from "chart.js"

class IntakeChart extends React.Component {

  componentDidMount(){
    let myChart = document.getElementById('myChart').getContext('2d');
    new Chart(myChart, {
      type: 'line',
      data: {
        labels: ['Protein', 'Fat', 'Carbohydrates'],
        datasets: [{
          label: 'grams',
          data: [80,75,150,570,160,210,50]
        }]
      },
      options: {}
    });
  }

  render(){
    return (
      <div class="container">
        <canvas id="myChart"></canvas>
      </div>
    );
  }
}


export default IntakeChart;