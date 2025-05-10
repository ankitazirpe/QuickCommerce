package com.quickcomm.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.quickcomm.Service.VendorService;
import com.quickcomm.dto.UserAuthDto;
import com.quickcomm.dto.VendorReqDto;


@RestController
@RequestMapping("/vendor")
@Validated
public class VendorController {
	@Autowired
	private VendorService vendorService;
	
	@PostMapping("/register")
	public ResponseEntity<?> Register(@RequestBody VendorReqDto vendrDto) {
		
		return ResponseEntity.status(HttpStatus.CREATED).body(vendorService.RegisterVendor(vendrDto));
	}
	
//	@PostMapping("/login")
//	public ResponseEntity<?> Login(@RequestBody UserAuthDto user) {
//	
//		return vendorService.LoginVendor(user);
//	}
	
	@PutMapping("/update/{uId}")
	public ResponseEntity<?> Update(@PathVariable Long uId,@RequestBody VendorReqDto user){
		return ResponseEntity.status(HttpStatus.CREATED).body(vendorService.UpdateVendor(uId, user));
	}
	
}
