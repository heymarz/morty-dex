import React from 'react';

function DetailMorty({ submittedData }) {
  const {name, type} = submittedData
  
  return (
    <div>
      <h1>Detail morty</h1>
       <h2>{name}</h2>
    </div>
  )
}

export default DetailMorty;
