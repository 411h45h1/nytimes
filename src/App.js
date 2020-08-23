import React from "react";
import "./App.css";
import AppState from "./context/AppState";

function App() {
  return (
    <AppState>
      <div className="App"></div>
    </AppState>
  );
}

export default App;
