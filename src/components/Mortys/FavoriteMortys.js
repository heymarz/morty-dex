import React from 'react';

function FavoriteMortys({ submittedData }) {

  const displayfavMortyArray = submittedData.map((m)=>{
    if(m.favorite=== true){
      return <li>{m}</li>
    }else{
      console.log("none")
    }
  })

  return (
    <div>
      <h1>List of favorite Mortys</h1>
      
    </div>
  )
}

export default FavoriteMortys
