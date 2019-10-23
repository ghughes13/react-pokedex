import React, {useState} from 'react';
import axios from 'axios';
import './App.css';
import LeftCard from './LeftCard';
import RightSide from './RightSide';

export default function App() {

  const getPokeInfo = (num= 1) => {
    let pokeNum = num;
    if(pokeNum < 10) {
      pokeNum = '00' + pokeNum;
    } else if(pokeNum < 100) {
      pokeNum = "0" + pokeNum;
    } 
    axios
      .get("https://pokeapi.co/api/v2/pokemon/" + num + "/")
      .then(result => setpokeInfo(result))
      .then(setPokePic("https://assets.pokemon.com/assets/cms2/img/pokedex/full/" + pokeNum + ".png"))
  }

  const [pokePic, setPokePic] = useState("https://assets.pokemon.com/assets/cms2/img/pokedex/full/0.png")
  const [counter, setCounter] = useState(true);
  const [pokeInfo, setpokeInfo] = useState([]);

  const updatePokeNumState = (num) => {
    getPokeInfo(num);
  }

  if(counter) {
    getPokeInfo();
    setCounter(false);
  }

  while(pokeInfo.length === 0) {
    return <h1>Loading</h1>;
  } 

  return (
    <div className="App">
      <LeftCard passfunct={updatePokeNumState} />
      <RightSide pokeInfo={pokeInfo} pokePic={pokePic}/>
    </div>
  );
}
