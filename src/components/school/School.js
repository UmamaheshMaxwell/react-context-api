import React, { Component } from "react";
import { SchoolConsumer } from "../../Context";
import Student from "./Student";
import Department from "./Department";

export default class School extends Component {
  render() {
    return (
      <SchoolConsumer>
        {value => {
          const { name, city, students } = value;

          return (
            <React.Fragment>
              <br />
              <Department name={name} city={city} />
              <br />
              <br />
              <h2>Student Detail</h2>
              <table className="table table-hover table-bordered">
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Age</th>
                  </tr>
                </thead>
                <tbody>
                  {students.map(student => (
                    <Student key={student.id} student={student} />
                  ))}
                </tbody>
              </table>
            </React.Fragment>
          );
        }}
      </SchoolConsumer>
    );
  }
}
