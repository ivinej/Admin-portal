import { Chart as ChartJS } from 'chart.js/auto'
import { Chart }            from 'react-chartjs-2'
import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';

class TrafficChart extends Component {
  data = {
    labels: ["Jan", "Feb", "March", "June", "July", "Aug"],
    datasets: [{
      label: '# of Votes',
      data: [10, 19, 3, 5, 2, 18],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
      ],
      borderColor: [
        'rgba(255,99,132,1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ],
      borderWidth: 1,
      fill: false
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
    },
    elements: {
      point: {
        radius: 0
      }
    }
  };

  calculateTrend() {
    const { data } = this.data.datasets[0];
    const trend = data[data.length - 1] > data[0] ? 'Hike' : 'Decline';
    const percentChange = ((data[data.length - 1] - data[0]) / data[0] * 100).toFixed(2);
    return {
      trend,
      percentChange,
    };
  }

  render() {
    const trendDetails = this.calculateTrend();

    return (
      <div className="row ">
        <div className="  p-4   col-md-6 ml-64 grid-margin stretch-card">
          <div className="bg-amber-100 shadow-md p-10 rounded-xl card">
            <div className="card-body">
              <h4 className="card-title font-serif text-4xl">Traffic Chart</h4>
              <Line data={this.data} options={this.options} />
            </div>
          </div>
        </div>
        <div className="  p-4   col-md-6 w-1/2 ml-64 grid-margin stretch-card">
          <div className="bg-blue-300 shadow-md p-10 rounded-xl card">
            <div className="card-body">
              <h4 className="card-title font-serif text-4xl p-4">Traffic Trend</h4>
              <p className='p-4 text-white text-2xl font-bold'>{`Trend: ${trendDetails.trend}, Change: ${trendDetails.percentChange}%`}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TrafficChart;
