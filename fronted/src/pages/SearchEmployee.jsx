import { useState } from "react";
import axios from "axios";

function SearchEmployee() {
  const [id, setId] = useState("");
  const [emp, setEmp] = useState(null);

  const search = async () => {
    try {
      const res = await axios.get(
        `http://localhost:9999/getempId/${id}`
      );
      setEmp(res.data);
    } catch {
      alert("Employee Not Found");
      setEmp(null);
    }
  };

  return (
    <div className="page">
      <h1>Search Employee</h1>

      <input
        placeholder="Enter Employee ID"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />

      <button className="search" onClick={search}>
        Search
      </button>

      {emp && (
        <div className="result">
          <h3>Employee Details</h3>
          <p><b>ID:</b> {emp.eid}</p>
          <p><b>Name:</b> {emp.ename}</p>
          <p><b>Salary:</b> ₹{emp.salary}</p>
          <p><b>Age:</b> {emp.age}</p>
          <p><b>State:</b> {emp.state}</p>
          <p><b>City:</b> {emp.city}</p>
        </div>
      )}
    </div>
  );
}

export default SearchEmployee;