package com.quickcomm.dto;

import com.quickcomm.pojo.UserRole;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@Getter
@Setter
public class UserReqDto {
	
	private String firstName;
	
	private String lastName;
	
	private String email;

	private String password;
	
	private String phone;
	
	private String address;

	private String city;
	
	private UserRole role;
	
	private String pincode;
}
