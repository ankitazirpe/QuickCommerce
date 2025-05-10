package com.quickcomm.Service;

import org.springframework.http.ResponseEntity;

import com.quickcomm.dto.UserAuthDto;
import com.quickcomm.dto.UserReqDto;

public interface UserService {
	ResponseEntity<?> RegisterUser(UserReqDto user); 
//	by mobile number
	
//	ResponseEntity<?> LoginUser(UserAuthDto user);
	
	ResponseEntity<?> UpdateUser(Long uId, UserReqDto user);
	
	ResponseEntity<?> LoginByMobile(UserAuthDto user);
}
