import React from "react";
import "./App.css";

function App() {
  const onMostpopular = async () => {
    let req = await fetch(
      "https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=zE0uXeFH19AB52dh61Pf3gcbxOgciZxS"
    );
    let res = req.json();
    console.log("res", res);
  };
  const onTopStories = async () => {
    let req = await fetch(
      "https://api.nytimes.com/svc/topstories/v2/science.json?api-key=zE0uXeFH19AB52dh61Pf3gcbxOgciZxS"
    );
    let res = req.json();
    console.log("res", res);
  };
  onTopStories();
  return <div className="App"></div>;
}

export default App;
