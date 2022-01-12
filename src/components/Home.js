import React from 'react';
import "./myStyles.css"

function Home({ displayMortys }) {
  return (
    <div>
      <h1>Welcome to the Morty-dex!</h1>
      <ul className="container">
      {displayMortys}
      </ul>
    </div>
  )
}

export default Home
