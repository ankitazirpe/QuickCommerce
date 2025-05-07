package com.quickcomm.dto;

import com.quickcomm.pojo.UserRole;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class VendorReqDto {
	private String ownerName;

	private String bussinessName;
	
	private String email;
	
	private String password;
	
	private String mobileNo;
	
//	@Column(length = 100)
//	private String address;
	
//	private float rating;
	
	private UserRole userRole;
	
//	@Lob
//	private byte[] image;
//	
//	@Column(length = 50, nullable=false)
//	private int cin;
	private boolean status;
	
}
