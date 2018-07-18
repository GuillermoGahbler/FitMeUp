import React from "react";
import { Chart } from "chart.js"
// import "./style.css"

class IntakeChart extends React.Component {

  componentDidMount() {
    let ctx = document.getElementById('myChart').getContext('2d');

    new Chart(ctx, {
      type: 'line',
      data: {
        labels: ["Week 1", "Week 2", "Week 3", "Week 4", "Week 5"],
        datasets: [{
          label: 'Weight',
          data: [170, 171, 173, 172, 172],
          backgroundColor: [
            'rgba(100, 100, 100, 0.2)',

          ],
          borderColor: [
            'rgba(255,99,132,1)',

          ],
          borderWidth: 1
        },
        {
          label: 'Body Fat',
          data: [30, 29, 28, 24, 25],
          backgroundColor: [
            'rgba(100, 100, 100, 0.2)',

          ],
          borderColor: [
            'rgba(155, 1, 32, 1)',

          ],
          borderWidth: 1
        }],
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: false
            }
          }]
        }
      }
    });
  }

  render() {
    return (
      <div className="container">
        <canvas id="myChart"></canvas>
        <h3>Current Stats</h3>
        <p>Weight in lbs: 180</p>
        <p>Body fat percentage: 17%</p>
        <p>Lean body mass in lbs: 140</p>
        <p>Fat mass in lbs: 40</p>
      </div>
    );
  }
}


export default IntakeChart;