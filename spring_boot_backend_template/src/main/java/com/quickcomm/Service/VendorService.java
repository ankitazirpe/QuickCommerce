package com.quickcomm.Service;

import org.springframework.http.ResponseEntity;

import com.quickcomm.dto.UserAuthDto;
import com.quickcomm.dto.VendorReqDto;

public interface VendorService {
	ResponseEntity<?> RegisterVendor(VendorReqDto user);
	
//	ResponseEntity<?> LoginVendor(UserAuthDto vendor);
	
	ResponseEntity<?> UpdateVendor(Long uId, VendorReqDto vendor);
}
