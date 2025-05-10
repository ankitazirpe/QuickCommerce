package com.quickcomm.Service;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.quickcomm.dao.VendorDao;
import com.quickcomm.dto.UserAuthDto;
import com.quickcomm.dto.UserRespDto;
import com.quickcomm.dto.VendorReqDto;
import com.quickcomm.dto.VendorRespDto;
import com.quickcomm.pojo.User;
import com.quickcomm.pojo.Vendor;

@Transactional
@Service
public class VendorServiceImpl implements VendorService {
	@Autowired
	private VendorDao vendorDao;
	
	@Autowired
	private ModelMapper mapper;
	

	@Override
	public ResponseEntity<?> RegisterVendor(VendorReqDto user) {
		if(vendorDao.findByEmail(user.getEmail()).isPresent()) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST)
					.body("Email already present");
		}
		
		Vendor v = mapper.map(user, Vendor.class);
		Vendor persistantVendor = vendorDao.save(v);
		return ResponseEntity.status(HttpStatus.CREATED)
				.body(persistantVendor);
	}

//	@Override
//	public ResponseEntity<?> LoginVendor(UserAuthDto vendor) {
//		
//		Optional<Vendor> vendorOpt = vendorDao.findByEmail(vendor.getEmail());
//		
//		if(vendorOpt.isEmpty()) {
//			return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
//					.body(Map.of("error", "Invalid credentials", "message", "user not found"));
//		}
//		
//		Vendor v = vendorOpt.get();
//		
//		if(!vendor.getPassword().equals(v.getPassword())) {
//			return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
//					.body(Map.of("error", "Invalid credentials", "message", "user not found"));
//		}
//		
//		VendorRespDto vendorResponse = mapper.map(v, VendorRespDto.class);
//		Map<String, Object> response = new HashMap<>();
//		response.put("message", "Login successfull");
//		response.put("role", v.getUserRole());
//		response.put("vendor", vendorResponse);
//		
//		return ResponseEntity.ok(response);
//	}

	@Override
	public ResponseEntity<?> UpdateVendor(Long uId, VendorReqDto vendor) {
		Optional<Vendor> vendorOpt = vendorDao.findById(uId);
		
		if(vendorOpt.isEmpty()) {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User not found");
		}
		
		Vendor existingUser = vendorOpt.get();
		
		if(vendor.getOwnerName() != null) existingUser.setOwnerName(vendor.getOwnerName());
		if(vendor.getBussinessName()!=null) existingUser.setBussinessName(vendor.getBussinessName());
		if(vendor.getEmail() != null) existingUser.setEmail(vendor.getEmail());
		if(vendor.getMobileNo() != null) existingUser.setMobileNo(vendor.getMobileNo());
		
//		vendorDao.save(existingUser);
		
		return ResponseEntity.ok(existingUser);
	}
	
}
