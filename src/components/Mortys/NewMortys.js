import React, { useState } from 'react'
import {useNavigate} from "react-router-dom"

function NewMortys({ onNewMorty }){
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [height, setHeight] = useState("");
  const [rare, setRare] = useState(false);
  const [characteristics, setCharacteristics] = useState("");
  const [image, setImg] = useState("");
  let navigate = useNavigate();
  
  function handleSubmit(e){
    e.preventDefault();
    const formData = {
      name: name,
      type: type,
      height: height,
      rare: rare,
      characteristics: characteristics,
      image: image
    };
    
    fetch("http://localhost:3001/Mortys",{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accepts": "application/json",
      },
      body: JSON.stringify(formData)
    })
    .then(r=>r.json())
    .then((newMorty)=>{
      navigate('/')
      onNewMorty(newMorty)})
    
    setName('');
    setType('paper');
    setHeight('');
    setRare("checked");
    setCharacteristics('');
    setImg('')
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
          placeholder='New Morty'
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
          placeholder='300 inches'
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
          placeholder='eg. traits, likes, dislikes'
          onChange={(e)=>setCharacteristics(e.target.value)}
          />
        </label>
        <br />
        <label htmlFor="image">Upload Image:
          <input
          type="text"
          value={image}
          placeholder='input img here'
          onChange={(e)=>setImg(e.target.value)}
          />
        </label>
        <br />
        {/* <label html="favorite">
         <input 
         type="hidden" 
         value="false"
         ref={x => {setFavorite(false)}}
          />
        </label> */}
       <button type="submit">Submit</button>
      </form>
    </section>
  )
}

export default NewMortys
