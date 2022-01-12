import React from 'react';
import "../myStyles.css"

function MortyCard ({morty, handleDeleteMorty}){
  const {id, name, image, type, weight, height, rare, characteristics} = morty

  function handleDeleteClick(){
    fetch(`http://localhost:3001/mortys/${id}`, {
      method: "DELETE"
    });
    handleDeleteMorty(id)
  }

  return (
    <div className='cards'>
      <h2>{name}</h2>
      <img src={image} alt={name} height="150" />
      <p>Type: {type} <br />
      Weight: {weight}<br />
      Height: {height} <br />
      Rare: {rare ? "yes" : "no"} <br />
      Characteristics: {characteristics} 
      </p>
      <button onClick={handleDeleteClick} className="emoji-button delete">🗑</button>
    </div>
  )
}

export default MortyCard
