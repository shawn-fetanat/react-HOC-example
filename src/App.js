import React, { Component } from "react";
import ClickCounter from "./ClickCounter";
import HoverCounter from "./Hover";

class App extends Component {
  render() {
    return (
      <div className="App">
        <ClickCounter name="Shawn" />
        <HoverCounter />
      </div>
    );
  }
}

export default App;
