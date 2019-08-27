import React, { Component } from "react";
import { SchoolConsumer } from "../../Context";

class Employee extends Component {
  render() {
    return (
      <SchoolConsumer>
        {value => {
          const { employees } = value;
          return (
            <div>
              <h2>Employee Details</h2>
              <table className="table">
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Role</th>
                  </tr>
                </thead>
                <tbody>
                  {employees.map(employee => (
                    <tr key={employee.id}>
                      <td>{employee.id}</td>
                      <td>{employee.name}</td>
                      <td>{employee.role}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          );
        }}
      </SchoolConsumer>
    );
  }
}

export default Employee;
