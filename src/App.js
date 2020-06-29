import React from 'react';
import Pokedex from "./Pokedex";
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Pokedex</h1>
      <Pokedex pokecards={[{id: 4, name: 'Charmander', type: 'fire', base_experience: 62}]} word="hi"/>
    </div>
  );
}

export default App;
