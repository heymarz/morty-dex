import React from 'react';
import ListMortys from './Mortys/ListMortys';

function Home({ submittedData, setFavorite,favorite }) {

  function handleUpdateMorty(updatedMorty){
    const updateMorty = submittedData.map((morty)=>{
      if(morty.id === updatedMorty.id){
        return updateMorty;
      }else{
        return morty;
      }
    });
    setFavorite(updatedMorty)
  }

  return (
    <div>
      <h1>Welcome to the Morty-dex!</h1>
      <ListMortys submittedData={submittedData} setFavorite={setFavorite} favorite={favorite} handleFavoriteMorty={handleUpdateMorty}/>
    </div>
  )
}

export default Home;
