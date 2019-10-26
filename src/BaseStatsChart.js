  
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
                      beginAtZero: true,
                      max: 160,
                      stepSize: 25
                  }
              }]
          }
        }}
        data={props.props.data}
        />
    </div>
  );
}