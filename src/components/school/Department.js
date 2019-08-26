import React, { Component } from "react";

export default class Department extends Component {
  render() {
    const { name, city } = this.props;
    return (
      <div className="container">
        <h2>School Details</h2>
        <h4>Name : {name}</h4>
        <h4>City : {city}</h4>
      </div>
    );
  }
}
