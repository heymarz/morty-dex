import React from "react";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import ListMortys from "./components/Mortys/ListMortys";
import DetailMorty from "./components/Mortys/DetailMorty";
import NewMortys from "./components/Mortys/NewMortys";

function App() {
  return (
    <Router>
      <NavBar />
        <Routes>
          <Route path="/mortys" element= { <ListMortys />} />
          <Route path="/mortys/new" element= { <NewMortys />} />
          <Route path="/mortys/id" element= { <DetailMorty />} />
          <Route exact path="/" element= { <Home />} />
        </Routes>
    </Router>
  );
}

export default App;
