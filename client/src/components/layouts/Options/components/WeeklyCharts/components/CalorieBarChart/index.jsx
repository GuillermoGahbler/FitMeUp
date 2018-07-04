import React, { Component } from "react";
import BarChart from "react-bar-chart";


class CalorieBarChart extends Component {
  state = {
    data: [
      { text: '7/15', value: 2390 },
      { text: '7/16', value: 2303 },
      { text: '7/17', value: 2256 },
      { text: '7/18', value: 2200 },
      { text: '7/19', value: 2410 }
    ],
    margin: { top: 20, right: 20, bottom: 30, left: 40 },
    width: 280
  };


  componentDidMount() {
    window.onresize = () => {
      this.setState({ width: this.refs.root.offsetWidth });
    };
  }

  handleBarClick(element, id) {
    console.log(`The bin ${element.text} with id ${id} was clicked`);
  }

  render() {
    return (
      <div ref="root">
        <div style={{ width: '100%' }}>
          <BarChart ylabel='Calories'
            width={this.state.width}
            height={300}
            margin={this.state.margin}
            data={this.state.data}
            onBarClick={this.handleBarClick} />
        </div>
      </div>
    );
  }
}

export default CalorieBarChart;