import React from "react";
import { Chart } from "chart.js"
import axios from 'axios';
// import "./style.css"

class IntakeChart extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      weight : 0,
      bodyFat : 0
    }
  }

  loadCurrentStats = () => {
    console.log("loading current stats");
    axios.get(`http://localhost:3001${this.props.url}`)
      .then(res => {
        this.setState({
          weight : res.data.weight,
          bodyFat : res.data.bodyFat
        });
        console.log("current stats loaded");
        console.log(res.data.weight);
        console.log(res.data.bodyFat);
      })
      .catch(err => console.log(err))
  }

  componentDidMount() {
    let ctx = document.getElementById('myChart').getContext('2d');

    this.loadCurrentStats();

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
        <p>Weight: {this.state.weight}</p>
        <p>Body fat percentage: {this.state.bodyFat}%</p>
        <p>Lean body mass: 140</p>
        <p>Fat mass: 40</p>
      </div>
    );
  }
}


export default IntakeChart;