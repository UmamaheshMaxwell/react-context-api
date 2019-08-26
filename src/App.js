import React, { Component } from "react";
import "./App.css";
import SchoolProvider from "./Context";
import School from "./components/school/School";

class App extends Component {
  render() {
    return (
      <SchoolProvider>
        <div className="App container">
          <h2>React Context API</h2>
          <School />
        </div>
      </SchoolProvider>
    );
  }
}

export default App;
