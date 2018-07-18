import React from "react";
import { Chart } from "chart.js"
// import "./style.css"

class IntakeChart extends React.Component {

  weightArray = this.props.weeks.reduce((acc, week) => [...acc, week.weight], []);
  bfArray = this.props.weeks.reduce((acc, week) => [...acc, week.bodyFat], []);
  lbmArray = this.props.weeks.reduce((acc, week) => [...acc, week.bodyMass], []);
  fmArray = this.props.weeks.reduce((acc, week) => [...acc, week.fatMass], []);
  labelsArray = Array(this.weightArray.length).map((ele, index) => `week${index + 1}`);



  componentDidMount() {
    let ctx = document.getElementById('myChart').getContext('2d');

    new Chart(ctx, {
      type: 'line',
      data: {
        labels: this.labelsArray,
        datasets: [{
          label: 'Weight',
          data: this.weightArray,
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
          data: this.fmArray,
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
        <p>Weight: {this.weightArray[this.weightArray.length - 1]}</p>
        <p>Body fat percentage: {this.bfArray[this.bfArray.length - 1]}</p>
        <p>Lean body mass: {this.lbmArray[this.lbmArray.length - 1]}</p>
        <p>Fat mass: {this.fmArray[this.fmArray.length - 1]}</p>
      </div>
    );
  }
}


export default IntakeChart;