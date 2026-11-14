import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import AddEmployee from "./pages/AddEmployee";
import EmployeeList from "./pages/EmployeeList";
import SearchEmployee from "./pages/SearchEmployee";
import UpdateEmployee from "./pages/UpdateEmployee";

function App() {
  return (
    <>
      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/add" element={<AddEmployee />} />

        <Route path="/employees" element={<EmployeeList />} />

        <Route path="/search" element={<SearchEmployee />} />
        

        <Route path="/update" element={<UpdateEmployee />} />

      </Routes>
    </>
  );
}

export default App;