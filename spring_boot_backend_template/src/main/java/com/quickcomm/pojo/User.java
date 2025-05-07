package com.quickcomm.pojo;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "User")
@NoArgsConstructor
@Getter
@Setter
public class User extends BaseEntity{
	@Column(length = 50) 
	private String firstName;
	
	@Column(length = 50) 
	private String lastName;
	
	@Column(length = 50, unique = true) // adds unique constraint
	private String email;
	
	@Column(length = 80, nullable = false) // not null constraint
	private String password;
	
	@Column(length = 15, nullable = false, unique = true) // not null constraint
	private String phone;
	
	@Column(length = 10) // not null constraint
	private String address;
	
	@Column(length = 80) // not null constraint
	private String city;
	
	@Column(name = "Pincode", nullable = false, length = 6)
	private String pincode;
	
	@Enumerated(EnumType.STRING) 
	@Column(length = 30) 
	private UserRole role;
	
	@Column(name="status")
	boolean Status =  true;
}  
