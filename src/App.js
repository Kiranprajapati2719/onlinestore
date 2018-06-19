import React, { Component } from "react";
import Navbar from "./Components/Navbar";
import Homepage from "./Components/Homepage";
class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Homepage />
      </div>
    );
  }
}

export default App;
