import React from "react";
function Pokecard (props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <img src = {`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.id}.png`}/>
      <p>{props.type}</p>
      <p>{props.experience}</p>
    </div>
  )
}
export default Pokecard;