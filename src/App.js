import React from "react";
import "./App.css";
import myStore from "./store";
import Count from "./Count";

function App() {
  return (
    <div className="App">
      <h1>Redux Learn</h1>
      <Count></Count>
    </div>
  );
}

export default App;