  
import React from 'react';
import { Bar } from 'react-chartjs-2';

export default function Chart(props) {

  // const [data, setData] = useState([]);
    console.log(props)
  return (
    <div className="Chat">
      <Bar 
        options={{
            responsive: true
        }}
        data={props.props}
        />
    </div>
  );
}