import React from 'react';
import ListMortys from './Mortys/ListMortys';

function Home({ displayMorty, handleDeleteMorty }) {
  return (
    <div>
      <h1>Welcome to the Morty-dex!</h1>
      <ListMortys displayMorty={displayMorty} handleDeleteMorty={handleDeleteMorty} />
    </div>
  )
}

export default Home;
