import React from "react";
import { Route } from "react-router-dom";
import Home from "./comps/Home";
import NotHome from "./comps/NotHome";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Home} />
      <Route path="/not" component={NotHome} />
    </div>
  );
}

export default App;
