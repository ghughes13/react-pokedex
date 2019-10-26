import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';

export default function Chart(props) {

  const [data, setData] = useState([]);

  return (
    <div className="Chat">
      <Bar 
        options={{
          responsive: true,
          legend: false,
          scales: {
            yAxes: [{
                ticks: {
                    fontColor: "white",
                    beginAtZero: true,
                    max: 160,
                    stepSize: 20
                }
            }],
            xAxes: [{
                ticks: {
                    fontColor: "white",
                    beginAtZero: true
                }
            }]
        },
        layout: {
          padding: {
              left: 20,
              right: 20,
              top: 20,
              bottom: 20
          }
        }
        }}
        data={props.props.data}
        />
    </div>
  );
}