import React from "react";
import "./App.css";
import Login from "./components/Login.js";

class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="app">
        <Login />
      </div>
    );
  }
}

export default App;
