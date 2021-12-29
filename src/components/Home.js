import React from 'react';
import ListMortys from './Mortys/ListMortys';

function Home({ submittedData }) {

  return (
    <div>
      <h1>Welcome to the Morty-dex!</h1>
      <ListMortys submittedData={submittedData}/>
    </div>
  )
}

export default Home;
