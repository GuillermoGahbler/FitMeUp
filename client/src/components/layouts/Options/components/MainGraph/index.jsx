import React from "react";
import { Chart } from "chart.js"
import axios from 'axios';
import { access } from "fs";
// import "./style.css"

class IntakeChart extends React.Component {

 weightArray = this.props.weeks.reduce((acc,week)=>[...acc,week.weight],[])
 bfArray = this.props.weeks.reduce((acc,week)=>[...acc,week.bodyFat],[])
 labelsArray = Array(this.weightArray.length).map((ele,index)=>`week${index+1}`)

/*
  loadCurrentStats = () => {
    console.log("loading current stats");
    axios.get(`http://localhost:3001${this.props.url}`)
      .then(res => {
        this.setState({
          weight : res.data.weight,
          bodyFat : res.data.bodyFat,
          fatMass : parseFloat(res.data.weight * res.data.bodyFat/100).toFixed(2),
          bodyMass : parseFloat(res.data.weight).toFixed(2) - parseFloat(res.data.weight * res.data.bodyFat/100).toFixed(2) 
        });
        console.log("current stats loaded");
        console.log(res.data.weight);
        console.log(res.data.bodyFat);
        
      })
      .catch(err => console.log(err))
  }

  */
  componentDidMount() {
    let ctx = document.getElementById('myChart').getContext('2d');
        // this.loadCurrentStats();


    new Chart(ctx, {
      type: 'line',
      data: {
        labels: ["Week 1", "Week 2", "Week 3", "Week 4", "Week 5"],
        datasets: [{
          //labels = this.labelsArray
          label: 'Weight',
          //data = this.weightArray
          data: [170, 171, 173, 172, 172],
          backgroundColor: ['rgba(100, 100, 100, 0.2)'],
          borderColor: ['rgba(255,99,132,1)'],
          borderWidth: 1
        },
        {
          //labels = this.labelsArray
          label: 'Body Fat',
          //data = to this.bfArray
          data: [30, 29, 28, 24, 25],
          backgroundColor: ['rgba(100, 100, 100, 0.2)'],
          borderColor: ['rgba(155, 1, 32, 1)'],
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
        <p>Weight: 0</p>
        <p>Body fat percentage: 0%</p>
        <p>Lean body mass:0</p>
        <p>Fat mass:0</p>
      </div>
    );
  }
}


export default IntakeChart;