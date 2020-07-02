import React, { Component } from "react";
import "./App.css";
import Form from "./components/Form";
import Grafico from "./components/Grafico";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      labels: [],
      values: [],
      chartType: false
    };
  }

  addData = e => {
    e.preventDefault();
    const label = e.target.querySelector('[name="label"]').value;
    const value = e.target.querySelector('[name="value"]').value;
    const { labels, values } = this.state;
    labels.push(label);
    values.push(value);
    this.setState({
      ...this.state,
      values,
      labels
    });
    return false;
  };

  setChartType = e => {
    const chartType = e.currentTarget.value;
    this.setState({
      ...this.state,
      chartType
    });
  };

  render() {
    console.log(this.state.chartType);
    return (
      <div className="App">
        <Form handleSubmit={this.addData} setChartType={this.setChartType} />
        <Grafico
          labels={this.state.labels}
          values={this.state.values}
          chartType={this.state.chartType}
        />
      </div>
    );
  }
}
