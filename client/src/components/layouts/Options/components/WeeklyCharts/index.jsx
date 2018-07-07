import React from 'react';
import {CalorieBarChart, MacroPieChart} from './components'

const WeeklyCharts = () => {

  return (
    <div>
      <h3>This week:</h3>
      <p>Daily calorie target: 2200</p>
      <p>Average daily calories: 2230</p>
      <CalorieBarChart />
      <MacroPieChart />
    </div>
  )
}

export default WeeklyCharts;