import React from "react";
import "./styles/index.css";
import Dashboard from "./Components/Dashboard/Dashboard";
import {
  BrowserRouter,
} from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Dashboard />
      </div>
    </BrowserRouter>
  );
};

export default App;
