import React,{useEffect,useState} from "react";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NewMortys from "./components/Mortys/NewMortys";
import ErrorPage from "./components/ErrorPage";
import Search from "./components/Search";

function App() {
  const [submittedData, setSubmittedData] = useState([]);
  const [searchTerm, setSearch] = useState("")
 
  useEffect(()=>{
    fetch('http://localhost:3001/Mortys')
    .then((resp)=>resp.json())
    .then(setSubmittedData) 
  },[])
  
  const displayMortys = submittedData.filter((morty)=>{
    return morty.name.toLowerCase().includes(searchTerm.toLowerCase())
  })

  function handleAddMorty(newMorty){
    const updatedMortyArray= [...submittedData, newMorty];
    setSubmittedData(updatedMortyArray)
  }

  function handleDeleteMorty(id){
    const updatedMortyArray = submittedData.filter((morty)=> morty.id !== id);
    setSubmittedData(updatedMortyArray)
  }

  return (
    <div>
   <Router>
      <NavBar />
        <Routes>
          <Route 
            path="/Mortys/new" 
            element= {
              <NewMortys onNewMorty={handleAddMorty} />} 
          />
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
            path="/Mortys/search" 
            element= {
              <Search onSearch={setSearch} />
              }
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
