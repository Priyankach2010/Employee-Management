import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="home">

      {/* Hero Section */}
      <div className="hero">
        <div className="hero-left">
          <h1>Employee Management System</h1>
          <p>
            Manage employee records efficiently using
            React, Spring Boot and MySQL.
          </p>

          <div className="hero-buttons">
            <Link to="/add" className="btn primary">
              Add Employee
            </Link>

            <Link to="/employees" className="btn secondary">
              View Employees
            </Link>
          </div>
        </div>

        <div className="hero-right">
          <div className="circle">
            <span>EMS</span>
          </div>
        </div>
      </div>

  
      

      {/* Features */}
      <h2 className="section-title">Quick Actions</h2>

      <div className="features">

        <Link to="/add" className="feature-card">
          <div className="icon">➕</div>
          <h3>Add Employee</h3>
          <p>Create a new employee record.</p>
        </Link>

        <Link to="/employees" className="feature-card">
          <div className="icon">📋</div>
          <h3>Employee List</h3>
          <p>View and delete employees.</p>
        </Link>

        <Link to="/search" className="feature-card">
          <div className="icon">🔍</div>
          <h3>Search Employee</h3>
          <p>Find employee by ID instantly.</p>
        </Link>

        <Link to="/update" className="feature-card">
          <div className="icon">✏️</div>
          <h3>Update Details</h3>
          <p>Modify employee information.</p>
        </Link>

      </div>

      {/* About */}
      <div className="about">
        <h2>About This Project</h2>
        <p>
          This Employee Management System is built using
          React for the frontend, Spring Boot for the REST API,
          and MySQL as the database. It supports complete CRUD
          operations with a clean and responsive interface.
        </p>
      </div>

    </div>
  );
}

export default Home;