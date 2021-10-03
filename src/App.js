import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import { Switch, BrowserRouter, Route } from "react-router-dom";
import Mains from "./Components/Interface/Interface";

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Mains} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
