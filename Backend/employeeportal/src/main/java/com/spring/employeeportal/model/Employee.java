package com.spring.employeeportal.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name="employee")
@Setter
@Getter
public class Employee {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	
	Integer eid;
	String ename;
	Double salary;
	Integer age;
	String state;
	String city;

	
}
