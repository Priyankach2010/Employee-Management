import { useEffect, useState } from "react";
import axios from "axios";

function EmployeeList() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    loadEmployees();
  }, []);

  const loadEmployees = async () => {
    const res = await axios.get("http://localhost:9999/empList");
    setEmployees(res.data);
  };

  const deleteEmployee = async (id) => {
    if (!window.confirm("Delete this employee?")) return;

    await axios.delete(`http://localhost:9999/deleteEmp/${id}`);
    loadEmployees();
  };

  return (
    <div className="page">
      <h1>Employee List</h1>

      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Salary</th>
            <th>Age</th>
            <th>State</th>
            <th>City</th>
            <th>Delete</th>
          </tr>
        </thead>

        <tbody>
          {employees.map((emp) => (
            <tr key={emp.eid}>
              <td>{emp.eid}</td>
              <td>{emp.ename}</td>
              <td>₹{emp.salary}</td>
              <td>{emp.age}</td>
              <td>{emp.state}</td>
              <td>{emp.city}</td>
              <td>
                <button
                  className="delete"
                  onClick={() => deleteEmployee(emp.eid)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default EmployeeList;