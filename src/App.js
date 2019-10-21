import React, {useState} from 'react';
import axios from 'axios';
import './App.css';
import LeftCard from './LeftCard';
import RightSide from './RightSide';

export default function App() {
  
  const getPokeInfo = (num= 1) => {
    let data;
      axios
        .get("https://pokeapi.co/api/v2/pokemon/" + num + "/")
        .then(result => data = result)
    return data;
  }

  const [pokeInfo, setpokeInfo] = useState([getPokeInfo(1)]);

  console.log(pokeInfo);
  return (
    <div className="App">
      <LeftCard />
      <RightSide pokeInfo={pokeInfo} />
    </div>
  );
}
