import React from 'react';
import axios from 'axios';
import './App.css';
import LeftCard from './LeftCard';

export default function App() {
  
  const getZip = () => {
    console.log('hi');
      axios
        .get("https://pokeapi.co/api/v2/pokemon/1/")
        .then(result => console.log(result));
  }

  getZip();
  return (
    <div className="App">
      <LeftCard />
    </div>
  );
}
