import React,{useEffect,useState} from "react";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import FavoriteMortys from "./components/Mortys/FavoriteMortys";
import NewMortys from "./components/Mortys/NewMortys";
import DetailMorty from "./components/Mortys/DetailMorty";
import ErrorPage from "./components/ErrorPage";

function App() {
  const [submittedData, setSubmittedData] = useState([]);

  useEffect(()=>{
    fetch('http://localhost:3001/Mortys')
    .then((resp)=>resp.json())
    .then((data)=> setSubmittedData(data)) 
  },[])

  return (
    <div>
   <Router>
      <NavBar />
        <Routes>
          <Route path="/Mortys/new" element= {<NewMortys setData={setSubmittedData} submittedData={submittedData} />} />
          <Route path="/Mortys/favorites" element={<FavoriteMortys submittedData={submittedData} />} />
          <Route path="/Morty/:id" element={<DetailMorty />} />
          <Route path="/" element={<Home submittedData={submittedData} />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
    </Router>
  </div>
  );
}

export default App;
