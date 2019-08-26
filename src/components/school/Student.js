import React, { Component } from "react";

export default class Student extends Component {
  render() {
    const { id, name, age } = this.props.student;
    return (
      <React.Fragment>
        <tr>
          <td>{id}</td>
          <td>{name}</td>
          <td>{age}</td>
        </tr>
      </React.Fragment>
    );
  }
}
