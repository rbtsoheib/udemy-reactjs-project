import React, { useState } from "react";
import Counter from "./Components/Counter";
import Header from "./Components/Header";
import "./App.css";

function App() {
  return (
    <>
      <div className="main">
        <Header />
        <Counter />
      </div>
    </>
  );
}

export default App;
