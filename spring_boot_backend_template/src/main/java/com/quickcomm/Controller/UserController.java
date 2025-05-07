package com.quickcomm.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.quickcomm.Service.UserService;
import com.quickcomm.dto.UserAuthDto;
import com.quickcomm.dto.UserReqDto;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;


@RestController
@RequestMapping("/user")
@Validated
public class UserController {
	@Autowired
	private UserService userService;
	
	@PostMapping("/register")
	public ResponseEntity<?> Register(@RequestBody UserReqDto user) {
		return ResponseEntity.status(HttpStatus.CREATED).body(userService.RegisterUser(user));
	}
	
//	@PostMapping("/login")
//	public ResponseEntity<?> Login(@RequestBody UserAuthDto user) {
//	
//		return userService.LoginUser(user);
//	}
	
	@PutMapping("/update/{uId}")
	public ResponseEntity<?> Update(@PathVariable Long uId,@RequestBody UserReqDto user){
		return ResponseEntity.status(HttpStatus.CREATED).body(userService.UpdateUser(uId, user));
	}
	
	@PostMapping("/loginByMobile")
	public ResponseEntity<?> LoginByMobile(@RequestBody UserAuthDto user) {
		//TODO: process POST request
		
		return userService.LoginByMobile(user);
	}
	
	
	
}
