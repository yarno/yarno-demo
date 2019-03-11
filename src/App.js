import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Login from "./Login";
import "./App.css";

function About() {
  return <h2>About</h2>;
}

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Route path="/" exact component={Login} />
            <Route path="/about/" component={About} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
