import React from 'react';
import { Link } from "react-router-dom";
 
function ListMortys({ submittedData, favorite, handleFavoriteMorty }) {

  function handleFavButton(e){
    fetch(`http://localhost:3001/Mortys/${e.target.id}`,{
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        favorite: !favorite,
      })
    })
    .then((r) => r.json())
    .then(data=>handleFavoriteMorty(data.favorite))
  }
  
  const renderAll = submittedData.map((morty,index) => (
    <div key={index} className="column">
      <p>{morty.name}</p>
      <img src={morty.image} alt="type of Morty" height="150" />
      <button id={morty.id} onClick={handleFavButton}>Favorite</button>
      <Link to={`/Morty/${morty.id}`}>Click for more info</Link> 
    </div>
  ));


  return (
    <div>
      <h1>List of Mortys</h1>
      <div>{renderAll}</div>
      
    </div>
  )
}

export default ListMortys
