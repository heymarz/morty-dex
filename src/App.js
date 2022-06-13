import React,{useEffect,useState} from "react";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import NewMortys from "./components/Mortys/NewMortys";
import ErrorPage from "./components/ErrorPage";
import MortyCard from "./components/Mortys/MortyCard";


function App() {
  const [submittedData, setSubmittedData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("")
 
  useEffect(()=>{
    fetch('http://localhost:3001/Mortys')
    .then((resp)=>resp.json())
    .then(data=>setSubmittedData(data)) 
  },[])
  
  const displayMortys = submittedData
  .filter((morty)=>
    morty.name.toLowerCase().includes(searchTerm.toLowerCase())
  )
  .map((morty) => {
    return (
      <MortyCard 
        key={morty.id}
        morty ={morty}  
        handleDeleteMorty={handleDeleteMorty}
      />
    )
    })

  function handleAddMorty(newMorty){
    const updatedMortyArray= [...submittedData, newMorty];
    setSubmittedData(updatedMortyArray)
  }

  function handleDeleteMorty(id){
    const updatedMortyArray = submittedData.filter((morty)=> morty.id !== id);
    setSubmittedData(updatedMortyArray)
  }

  function handleSearch(newSearch){
    setSearchTerm(newSearch)
  }

  return (
    <div>
   <Router>
      <NavBar onSearch={handleSearch} />
        <Routes>
          <Route 
            path="/" 
            element= {
              <Home 
              displayMortys={displayMortys}
              handleDeleteMorty={handleDeleteMorty}
               />
              }
          />
          <Route 
            path="/mortys/new" 
            element= {
              <NewMortys onNewMorty={handleAddMorty} />} 
          />
          <Route 
            path="*" 
            element={<ErrorPage />} 
          />
        </Routes>
    </Router>
  </div>
  );
}

export default App;
