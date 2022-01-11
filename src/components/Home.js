import React from 'react';


function Home({ displayMortys }) {
  return (
    <div>
      <h1>Welcome to the Morty-dex!</h1>
      <ul className="cards">
      {displayMortys}
      </ul>
    </div>
  )
}

export default Home
