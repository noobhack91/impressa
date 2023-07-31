import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Update import
import Home from "./Components/Home";
import Navbar from "./navbar";
import Pages from "./Components/Page";
import History from "./Components/History";
import 'bootstrap/dist/css/bootstrap.min.css';
const App = () => {

      return (
        <div>
          <Navbar />
        </div>
      );
    };
  
export default App;
