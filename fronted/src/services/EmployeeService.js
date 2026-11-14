import axios from "axios";

const URL = "http://localhost:9999";

export const getEmployees = () =>
  axios.get(URL + "/empList");

export const addEmployee = (emp) =>
  axios.post(URL + "/createEmp", emp);

export const getEmployee = (id) =>
  axios.get(URL + "/getempId/" + id);

export const updateEmployee = (id, emp) =>
  axios.put(URL + "/updateEmp/" + id, emp);

export const deleteEmployee = (id) =>
  axios.delete(URL + "/deleteEmp/" + id);