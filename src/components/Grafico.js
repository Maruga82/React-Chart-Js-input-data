import React, { Component } from "react";
import ChartJS from 'chart.js';

export default class Grafico extends Component {
  constructor(props) {
    super(props);
    this.chart = React.createRef()
    this.state = {
      chartData: {
        labels: [],
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
            data: []
          }
        ]
      }
    };
  }
  
  componentDidMount() {
    const data = {
      ...this.state.chartData,
      labels: this.props.labels || [],
      datasets: [{ ...this.state.chartData.datasets, data: this.props.values || [] }]
    }
    const chart = new ChartJS(this.chart.current, { type: this.props.chartType || 'pie', data })
    this.setState({
      ...this.state,
      chart
    })
  }
  
  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.state.chart && this.props.chartType) {
      this.state.chart.chart.config.type = this.props.chartType
    }
    this.state.chart.update();
  }
  
  render() {
    return <canvas ref={this.chart}></canvas>
  }
}