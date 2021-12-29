import React, { useState } from 'react'

function NewMortys({ submittedData, setData }){
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [height, setHeight] = useState("");
  const [rare, setRare] = useState("");
  const [characteristics, setCharacteristics] = useState("");
  const [img, setImg] = useState("");
  const [favorite, setFavorite] = useState(false)
  
  function handleSubmit(e){
    e.preventDefault();
    const formData = {
      name: name,
      type: type,
      height: height,
      rare: rare,
      characteristics: characteristics,
      img: img,
      favorite: favorite
    };
    const dataArray = 
    fetch("http://localhost:3001/Mortys",{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accepts": "application/json",
      },
      body: JSON.stringify(submittedData)
    });
    setData(...submittedData, formData)
  }

  return (
    <section>
      <h1>New Morty Form</h1>
      <form>
        <label htmlFor="name" >Name:
          <input
          type="text"
          value= {name}
          onChange={(e)=>setName(e.target.value)}
          />
        </label>
        <br />
        <label htmlFor="type">Type?</label>
        <select>
          <option value={type.rock}>Rock</option>
          <option value={type.paper}>Paper</option>
          <option value={type.scissor}>Scissor</option>
        </select>
        <br />
        <label htmlFor="height">Height:
          <input
          type="number"
          value={height}
          onChange={(e)=>setHeight(e.target.value)}
          />

        </label>
        <br />
        <input type="checkbox" id="rare" name={rare} />
        <label htmlFor="rare">Rare?</label>
        <br />
        <label htmlFor="characteristics">List characteristic(s):
          <input
          type="text"
          value={characteristics}
          onChange={(e)=>setCharacteristics(e.target.value)}
          />
        </label>
        <br />
        <label htmlFor="image">Upload Image:
          <input
          type="text"
          value={img}
          onChange={(e)=>setImg(e.target.value)}
          />
        </label>
        <br />
        <button type="submit" onSubmit={handleSubmit}>Submit</button>
      </form>
    </section>
  )
}

export default NewMortys
