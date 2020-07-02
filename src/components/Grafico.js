import React, { Component } from "react";
import { Doughnut, Line, Bar } from "react-chartjs-2";

export default class Grafico extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartTypes: {
        donught: Doughnut,
        line: Line,
        bar: Bar
      },
      chartData: {
        labels: props.labels || [],
        datasets: [
          {
            label: "My First dataset",
            fill: false,
            lineTension: 0.1,
            backgroundColor: "rgba(75,192,192,0.4)",
            borderColor: "rgba(75,192,192,1)",
            borderCapStyle: "butt",
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: "miter",
            pointBorderColor: "rgba(75,192,192,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(75,192,192,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: props.values || []
          }
        ]
      }
    };
  }

  render() {
    const Chart = this.state.chartTypes[this.props.chartType];
    return Chart ? <Chart data={this.state.chartData} /> : null;
  }
}