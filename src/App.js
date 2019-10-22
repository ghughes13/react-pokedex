import React, {useState} from 'react';
import axios from 'axios';
import './App.css';
import LeftCard from './LeftCard';
import RightSide from './RightSide';

export default function App() {

  const getPokeInfo = (num= 1) => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/" + num + "/")
      .then(result => setpokeInfo(result))
  }

  const [counter, setCounter] = useState(true);
  const [pokeInfo, setpokeInfo] = useState([]);

  if(counter) {
    getPokeInfo();
    setCounter(false);;
    console.log(counter)
  }

  while(pokeInfo.length === 0) {
    return <h1>Loading</h1>;
  } 

  return (
    <div className="App">
      <LeftCard />
      <RightSide pokeInfo={pokeInfo} />
    </div>
  );
}
