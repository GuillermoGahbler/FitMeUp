import React, { Component } from "react";
import PieChart from "react-svg-piechart";
import API from "../../../../../../utils/API";

class MacroPieChart extends Component {
  state = {
    data: [
      { title: "Protein", value: 0, color: "#22594e" },
      { title: "Carbs", value: 0, color: "#2f7d6d" },
      { title: "Fat", value: 0, color: "#3da18d" }
    ]
  };

  componentDidMount() {
    this.loadCalories();
  }

  loadCalories = () => {
    API.getCalorieInfo().then((res) => {
      console.log(res);
      this.setState({
        data: [
          { title: "Protein", value: 0, color: "#22594e" },
          { title: "Carbs", value: 0, color: "#2f7d6d" },
          { title: "Fat", value: 0, color: "#3da18d" }
        ]
      });
    }).catch(err => console.log(err));
  }

  render() {
    return (
      <PieChart
        data={this.state.data}
        // If you need expand on hover (or touch) effect
        expandOnHover={true}
        // If you need custom behavior when sector is hovered (or touched)
        onSectorHover={(d, i, e) => {
          if (d) {
            console.log("Mouse enter - Index:", i, "Data:", d, "Event:", e)
          } else {
            console.log("Mouse leave - Index:", i, "Event:", e)
          }
        }
        }
      />
    );
  }
}

export default MacroPieChart;
