import React, { useState } from "react";
import { Switch, BrowserRouter, Route } from "react-router-dom";
import Mains from "./Components/Interface/Interface";
import Header from "./Components/Header/Header";
import GlobalStyle from './Styles/Global/index';


function App() {
  return (
    <div className="container">
      <BrowserRouter>
      <Header />
      <GlobalStyle />
        <Switch>
          <Route path="/" component={Mains} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
