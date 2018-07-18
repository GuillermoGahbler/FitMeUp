import React from "react";
import axios from 'axios';
import { Chart } from "chart.js"
// import "./style.css"

class IntakeChart extends React.Component {

  constructor(props){
    super(props);
    console.log("main graph props");
    console.log(props);    
  }

  state = {
    weeks: [],
    weight: [],
    bodyfat: [],
    leanbodymass: [],
    fatmass: [],
    labels: []
  }



  readWeeks = (id)=>{
    axios.get(`/weeks/${id}`)
    .then(res=>{
      this.setState({
        weeks : res.data,
        weight: res.data.reduce((acc, week) => [...acc, week.weight], []),
        bodyfat : res.data.reduce((acc, week) => [...acc, week.bodyFat], []),
        leanbodymass : res.data.reduce((acc, week) => [...acc, week.bodyMass], []),
        fatmass : res.data.reduce((acc, week) => [...acc, week.fatMass], []),
        labels : Array(res.data.reduce((acc, week) => [...acc, week.weight], []).length).map((ele,index) => `week${index + 1}`)
      });

      console.log("MainGraph state");
      console.log(this.state);

     /* weightArray = this.state.weeks.reduce((acc, week) => [...acc, week.weight], []);
    bfArray = this.state.weeks.reduce((acc, week) => [...acc, week.bodyFat], []);
    lbmArray = this.state.weeks.reduce((acc, week) => [...acc, week.bodyMass], []);
    fmArray = this.state.weeks.reduce((acc, week) => [...acc, week.fatMass], []);
    labelsArray = Array(this.weightArray.length).map((ele, index) => `week${index + 1}`);*/
    })
  }

  componentDidMount() {
    let ctx = document.getElementById('myChart').getContext('2d');
    console.log("User ID");
    console.log(this.props.account_id);

    this.readWeeks(this.props.account_id);

    new Chart(ctx, {
      type: 'line',
      data: {
        labels: this.state.labels,
        datasets: [{
          label: 'Weight',
          data: this.state.weight,
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
          data: this.state.fatmass,
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
        <p>Weight: {this.state.weight[this.state.weight.length - 1]}</p>
        <p>Body fat percentage: {this.state.bodyfat[this.state.bodyfat.length - 1]}</p>
        <p>Lean body mass: {this.state.leanbodymass[this.state.leanbodymass.length - 1]}</p>
        <p>Fat mass: {this.state.fatmass[this.state.fatmass.length - 1]}</p>
      </div>
    );
  }
}


export default IntakeChart;