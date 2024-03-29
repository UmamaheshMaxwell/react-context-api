import React, { Component } from "react";
import "./App.css";
import SchoolProvider from "./Context";
import School from "./components/school/School";
import Employee from "./components/company/Employee";

class App extends Component {
  render() {
    return (
      <SchoolProvider>
        <div className="App container">
          <h2>React Context API</h2>
          <br />
          <Employee />
          <School />
        </div>
      </SchoolProvider>
    );
  }
}

export default App;
