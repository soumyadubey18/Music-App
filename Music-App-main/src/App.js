import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Components/Home";
import Lyrics from "./Components/Lyrics";
import "./App.css";
import { ContextController } from "./context";

const App = () => {
  return (
    <ContextController>
      <Router>
        <>
          <div className="container">
            <Route exact path="/" component={Home} />
            <Route exact path="/lyrics/:id" component={Lyrics} />
          </div>
        </>
      </Router>
    </ContextController>
  );
};

export default App;
