import React from "react"
import BarChart from "react-svg-bar-chart"
 
const data = [ { x: 1, y: 2390 },
      { x: 2, y: 2303 },
      { x: 3, y: 2256 },
      { x: 4, y: 2200 },
      { x: 5, y: 2410 }];


 
const CalorieBarChart = () => (
    <BarChart data={data} onHover={this.handlePointHover} />
)

export default CalorieBarChart;