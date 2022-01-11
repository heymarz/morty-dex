import React from 'react';
import ListMortys from './Mortys/ListMortys';

function Home({ displayMortys, handleDeleteMorty }) {
  return (
    <div>
      <h1>Welcome to the Morty-dex!</h1>
      <ListMortys displayMortys={displayMortys} handleDeleteMorty={handleDeleteMorty} />
    </div>
  )
}

export default Home
