import React, { useState } from "react";
import { Route } from "react-router-dom";
import Home from "./comps/Home";
import NotHome from "./comps/NotHome";
import NavBar from './comps/NavBar';
import Decks from './comps/Decks';
import Cards from './comps/Cards';
import data from './data';
import "./App.css";

function App() {

  const [decks, setDecks] = useState(data)

  return (
    <div className="App">
      <NavBar />
      <Route exact path="/" component={Home} />
      <Route path="/not" component={NotHome} />
      <Route path="/decks" render={props => {
        return <Decks {...props} data={decks} />
      }} />
      <Route path="/cards/:id" render={props => {
        return <Cards data={decks} {...props} />
      }} />
    </div>
  );
}

export default App;
