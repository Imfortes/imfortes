import React, { Component, ReactPropTypes } from 'react';
import { Route, Switch } from "react-router-dom";

import Header from "./components/Header/Header";

import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Skills from "./pages/Skills/Skills";
import Projects from "./pages/Projects/Projects";
import Contacts from "./pages/Contacts/Contacts";


import './sass/index.scss'

function App() {
  return (
    <div className="App">

        <Header/>

        <main className="main">
            <Switch>
                <Route path="/" component={Home} exact/>
                <Route path="/about" component={About} exact/>
                <Route path="/skills" component={Skills} exact/>
                <Route path="/projects" component={Projects} exact/>
                <Route path="/contacts" component={Contacts} exact/>
            </Switch>
        </main>

    </div>
  );
}

export default App;
