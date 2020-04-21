import React, { Component } from "react";
import Ninjas from "./Ninjas";

class App extends Component {
  state = {
    ninjas: [
      { name: "Ryu", age: 30, belt: "black", id: 1 },
      { name: "Yoshi", age: 12, belt: "green", id: 2 },
      { name: "Crystal", age: 32, belt: "pink", id: 3 },
    ],
  };
  
  render() {
    const { ninjas } = this.state;

    return (
      <div className="App">
        <h1>My first react app</h1>
        <p>Welcome</p>
        <Ninjas ninjas={ninjas} />
      </div>
    );
  }
}

export default App;
