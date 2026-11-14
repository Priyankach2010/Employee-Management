import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">

      <h2>EMS</h2>

      <div>

        <Link to="/">Home</Link>

        <Link to="/add">Add Employee</Link>

        <Link to="/employees">Employees</Link>

        <Link to="/search">Search</Link>
        <Link to="/update">Update</Link>

      </div>

    </nav>
  );
}

export default Navbar;