import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';

class ErrorFrequencyChart extends Component {
  data = {
    labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    datasets: [{
      label: 'Error Frequency',
      data: [5, 8, 3, 10, 2, 1, 6],
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgba(255,99,132,1)',
      borderWidth: 1
    }]
  };

  options = {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    },
    legend: {
      display: false
    }
  };

  render() {
    return (
      <div className="col-md-6 grid-margin ml-64 stretch-card">
        <div className="card">
          <div className="card-body">
            <h4 className="card-title">Error Frequency Chart</h4>
            <Bar data={this.data} options={this.options} />
          </div>
        </div>
      </div>
    );
  }
}

export default ErrorFrequencyChart;
