import React, { Component } from "react";

export const SchoolContext = React.createContext();
export const SchoolConsumer = SchoolContext.Consumer;

class SchoolProvider extends Component {
  state = {
    name: "DELHI PUBLIC SCHOOL",
    city: "MUMBAI",
    students: [
      { id: 1, name: "MANASVI", age: 6 },
      { id: 2, name: "JAGRAV", age: 6 }
    ],
    employees: [
      { id: 1, name: "Uma", role: "Manager" },
      { id: 2, name: "Swathi", role: "CEO" }
    ]
  };
  render() {
    return (
      <SchoolContext.Provider value={this.state}>
        {this.props.children}
      </SchoolContext.Provider>
    );
  }
}

export default SchoolProvider;
