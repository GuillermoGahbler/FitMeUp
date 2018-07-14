import React from "react";
import PieChart from "react-svg-piechart";

// const data = [
//   { title: "Protein 40%", value: 40, color: "#22594e" },
//   { title: "Carbs 40%", value: 40, color: "#2f7d6d" },
//   { title: "Fat 20%", value: 20, color: "#3da18d" },
// ]

const convertCurrentday = (day) => {
  if (!day)  return []; 

  const { fat, protein, carbs} = day;  
  const totalGramsConsumed = fat + protein + carbs;
  
 return [
    {title:`Fat ${100 * fat/totalGramsConsumed}%`, value: fat, color:'#22594e'},
    {title:`Protien ${100 * protein/totalGramsConsumed}%`, value:protein, color:'#2f7d6d'},
    {title:`Carbs${100 * carbs/totalGramsConsumed}%`, value:carbs, color:'#3da18d'},
  ]; 

 
}

const MacroPieChart = (props) => {
  return (
    
      <PieChart
        data={convertCurrentday(props.currentDay())}
         expandOnHover={true}
         onSectorHover={(d, i, e) => {
         }}
      />
  

  )
}

export default MacroPieChart;
