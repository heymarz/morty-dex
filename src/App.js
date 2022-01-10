import React,{useEffect,useState} from "react";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NewMortys from "./components/Mortys/NewMortys";
import ErrorPage from "./components/ErrorPage";
import Search from "./components/Search";

function App() {
  const [submittedData, setSubmittedData] = useState([]);
  const [search, setSearch] = useState("")
 
  useEffect(()=>{
    fetch('http://localhost:3001/Mortys')
    .then((resp)=>resp.json())
    .then((data)=> setSubmittedData(data)) 
  },[])

  const displayMorty = submittedData.filter((morty)=>{
    return morty.name.toLowerCase().includes(search.toLowerCase())
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
              displayMorty={displayMorty}
              handleDeleteMorty={handleDeleteMorty}
               />
              }
          />
          <Route 
            path="/Mortys/search" 
            element= {
              <Search 
              setSearch={setSearch} searchTerm={search} />
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
