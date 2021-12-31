import React, { useState } from 'react'

function NewMortys({ submittedData, setData, favorite }){
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [height, setHeight] = useState("");
  const [rare, setRare] = useState(false);
  const [characteristics, setCharacteristics] = useState("");
  const [image, setImg] = useState("");
  
  function handleSubmit(e){
    e.preventDefault();
    const formData = {
      name: name,
      type: type,
      height: height,
      rare: rare,
      characteristics: characteristics,
      image: image,
      favorite: favorite
    };
    fetch("http://localhost:3001/Mortys",{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accepts": "application/json",
      },
      body: JSON.stringify(formData)
    });
    setData(...submittedData, formData)
  }
  
  function handleCheckbox(e) {
    if(e.target.checked){
      setRare((rare)=> !rare)
    }else{setRare(!rare)}
  }
  
  return (
    <section>
      <h1>New Morty Form</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name" >Name:
          <input
          type="text"
          value= {name}
          onChange={(e)=>setName(e.target.value)}
          />
        </label>
        <br />
        <label htmlFor="type">Type?</label>
        <select onChange={(e)=>setType(e.target.value)}>
          <option value={type.rock} >Rock</option>
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
        <label htmlFor="rare">Rare?</label>
        <input type="checkbox" id={rare.toString()} name={rare.toString()} onClick={handleCheckbox} />
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
          value={image}
          onChange={(e)=>setImg(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </section>
  )
}

export default NewMortys
