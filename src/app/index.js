import React from "react";
import "./App.css";
import SelectedCurrency from "./components/Currency";
import Search from "./components/Search";

function App() {
  return (
    <div className="App">
      <Search />
      <SelectedCurrency />
    </div>
  );
}

export default App;
