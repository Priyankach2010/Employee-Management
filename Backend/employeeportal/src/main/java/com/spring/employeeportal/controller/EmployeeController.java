package com.spring.employeeportal.controller;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.spring.employeeportal.model.Employee;
import com.spring.employeeportal.repo.EmployeeRepo;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
public class EmployeeController {
	
	
	@Autowired
	EmployeeRepo employeeRepo;
	
	@RequestMapping("/hello")
	String hello() {
		return "Hello,This is my first SpringBoot Application";
	}
	
	//create the data
	@PostMapping("/createEmp")
	//http://localhost:9999/createEmployee
	Employee createEmployee(@RequestBody Employee e) {
		return employeeRepo.save(e);	
	}
		
	
	//retrieve the data
	//http://localhost:9999/getEmpList
	@GetMapping("/empList")
	List<Employee> getEmpList(){
		return employeeRepo.findAll();
	}
	
	//retrieve the data by id
	//http://localhost:9999/getEmp/1
	@GetMapping("/getempId/{eid}")
	Employee getEmp(@PathVariable Integer eid) {
		return employeeRepo.findById(eid).orElseThrow();
	}
	
	//update the data
	//http://localhost:9999/updateEmp/1
	@PutMapping("/updateEmp/{eid}")
	 Employee updateEmployee(@RequestBody Employee e,@PathVariable Integer eid) {
		 Employee EmployeeFrmDB=getEmp(eid);
		 EmployeeFrmDB.setAge(e.getAge());
		 EmployeeFrmDB.setCity(e.getCity());
		 EmployeeFrmDB.setSalary(e.getSalary());
		 EmployeeFrmDB.setEname(e.getEname());
		 EmployeeFrmDB.setState(e.getState());
		
		 return employeeRepo.save(EmployeeFrmDB); 
	 }
	
	
	//delete the data
	////http://localhost:9999/deleteEmp/1
	@DeleteMapping("/deleteEmp/{eid}")
	void deleteEmployee(@PathVariable("eid") Integer eid) {
		Employee EmployeeFrmDB=employeeRepo.findById(eid).orElseThrow();
				employeeRepo.deleteById(eid);
		
	}
	

}
