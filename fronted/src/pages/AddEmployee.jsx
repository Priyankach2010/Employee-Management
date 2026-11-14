import { useState } from "react";
import { addEmployee } from "../services/EmployeeService";

function AddEmployee() {
  const [employee, setEmployee] = useState({
    ename: "",
    salary: "",
    age: "",
    state: "",
    city: ""
  });

  const handleChange = (e) => {
    setEmployee({
      ...employee,
      [e.target.name]: e.target.value
    });
  };

  const saveEmployee = async () => {
    try {
      await addEmployee(employee);
      alert("Employee Added Successfully");

      setEmployee({
        ename: "",
        salary: "",
        age: "",
        state: "",
        city: ""
      });

    } catch (error) {
      alert("Error while adding employee");
    }
  };

  return (
    <div className="page">
      <div className="card">
        <h2>Add New Employee</h2>

        <div className="vertical-form">

          <input
            type="text"
            name="ename"
            placeholder="Employee Name"
            value={employee.ename}
            onChange={handleChange}
          />

          <input
            type="number"
            name="salary"
            placeholder="Salary"
            value={employee.salary}
            onChange={handleChange}
          />

          <input
            type="number"
            name="age"
            placeholder="Age"
            value={employee.age}
            onChange={handleChange}
          />

          <input
            type="text"
            name="state"
            placeholder="State"
            value={employee.state}
            onChange={handleChange}
          />

          <input
            type="text"
            name="city"
            placeholder="City"
            value={employee.city}
            onChange={handleChange}
          />

        </div>

        <div className="buttons">
          <button className="save-btn" onClick={saveEmployee}>
            Save Employee
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddEmployee;