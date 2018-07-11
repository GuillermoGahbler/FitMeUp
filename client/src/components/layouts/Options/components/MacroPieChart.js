import React from "react";
import PieChart from "react-svg-piechart";
 
const data = [
  {title: "Protein 40%", value: 40, color: "#22594e"},
  {title: "Carbs 40%", value: 40, color: "#2f7d6d"},
  {title: "Fat 20%", value: 20, color: "#3da18d"},
]
 
const MacroPieChart = () => (
  <PieChart
    data={data}
    // If you need expand on hover (or touch) effect
    expandOnHover={true}
    // If you need custom behavior when sector is hovered (or touched)
    onSectorHover={(d, i, e) => {
      // if (d) {
      //   console.log("Mouse enter - Index:", i, "Data:", d, "Event:", e)
      // } else {
      //   console.log("Mouse leave - Index:", i, "Event:", e)
      // }
    }
  }
  />
)

export default MacroPieChart;
