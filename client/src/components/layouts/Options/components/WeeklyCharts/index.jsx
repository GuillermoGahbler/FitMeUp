import React from 'react';
import API from '../../../../../utils/API';
import {CalorieBarChart, MacroPieChart} from './components'

class WeeklyCharts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dailyCalorieTarget : 2200,
      avgDailyCalories : 2230,
      deviation : 1.5
    }

  }

  loadThisWeekStats = () => {
    console.log("loading this week's stats");
    API.calculateAvgDailyCalories({id: 1}).then(res => {
      console.log(res);
      this.setState({
        avgDailyCalories : res.avg
      });
    }).catch(err => console.log(err));

    API.calculateLastUpdate().then(res=>{
      console.log("response after calculateLastUpdate");
      console.log(res);
    });

  }

  componentDidMount() {
    this.loadThisWeekStats();
  }

  render() {
    return (
      <div>
        <h3>This week:</h3>
        <p>Daily calorie target: {this.state.dailyCalorieTarget}</p>
        <p>Average daily calories: {this.state.avgDailyCalories}</p>
        <p>Deviation: {this.state.deviation}% OPTIMAL</p>
        <CalorieBarChart />
        <MacroPieChart />
      </div>
    )
  }

}

export default WeeklyCharts;