import { useState } from "react";
import axios from "axios";

function UpdateEmployee() {
  const [searchId, setSearchId] = useState("");

  const [employee, setEmployee] = useState({
    eid: "",
    ename: "",
    salary: "",
    age: "",
    state: "",
    city: ""
  });

  // Search employee by ID
  const searchEmployee = async () => {
    if (searchId === "") {
      alert("Enter Employee ID");
      return;
    }

    try {
      const response = await axios.get(
        `http://localhost:9999/getempId/${searchId}`
      );
      setEmployee(response.data);
    } catch (error) {
      alert("Employee Not Found");
    }
  };

  // Handle input changes
  const handleChange = (e) => {
    setEmployee({
      ...employee,
      [e.target.name]: e.target.value
    });
  };

  // Update employee
  const updateEmployee = async () => {
    await axios.put(
      `http://localhost:9999/updateEmp/${employee.eid}`,
      employee
    );

    alert("Employee Updated Successfully");

    setEmployee({
      eid: "",
      ename: "",
      salary: "",
      age: "",
      state: "",
      city: ""
    });

    setSearchId("");
  };

  return (
    <div className="page">
      <h1>Update Employee</h1>

      <div className="card">
        <h3>Search Employee</h3>

        <input
          type="number"
          placeholder="Enter Employee ID"
          value={searchId}
          onChange={(e) => setSearchId(e.target.value)}
        />

        <button className="search-btn" onClick={searchEmployee}>
          Search
        </button>
      </div>

      <div className="card">
        <h3>Edit Details</h3>

        <div className="vertical-form">
          <input
            type="number"
            name="eid"
            value={employee.eid}
            disabled
          />

          <input
            type="text"
            name="ename"
            placeholder="Name"
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

        <button className="update-btn" onClick={updateEmployee}>
          Update Employee
        </button>
      </div>
    </div>
  );
}

export default UpdateEmployee;