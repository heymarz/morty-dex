import React from 'react';
import MortyCard from "../Mortys/MortyCard"
 
function ListMortys({ displayMorty, handleDeleteMorty }) {

  return (
    <div>
      <h1>List of Mortys</h1>
      <ul className="cards">
      {displayMorty.map((morty) =>{
    return (
      <MortyCard 
        key={morty.id}
        morty ={morty}  
        handleDeleteMorty={handleDeleteMorty}
      />
    );
    })}
     </ul> 
    </div>
  )
}

export default ListMortys
