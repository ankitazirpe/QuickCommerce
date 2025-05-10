package com.quickcomm.Service;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.quickcomm.dao.UserDao;
import com.quickcomm.dto.UserAuthDto;
import com.quickcomm.dto.UserReqDto;
import com.quickcomm.dto.UserRespDto;
import com.quickcomm.pojo.User;
import com.quickcomm.security.JwtUtil;

import jakarta.transaction.Transactional;

@Transactional
@Service
public class UserServiceImpl implements UserService {
	@Autowired
	private UserDao userDao;
	
	@Autowired
	private ModelMapper mapper;
	
	@Autowired
	private JwtUtil jwtUtil;
	
	@Autowired
	private PasswordEncoder passwordEncoder;

	@Override
	public ResponseEntity<?> RegisterUser(UserReqDto user) {
//		if(userDao.findByEmail(user.getEmail()).isPresent()) {
//			return ResponseEntity.status(HttpStatus.BAD_REQUEST)
//					.body("Email is already present");
//		}
		
		if(userDao.findByPhone(user.getPhone()).isPresent()) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST)
					.body("Mobile number is already register");
		}
		
		User u = mapper.map(user, User.class);
//		User persistantUser = userDao.save(u);
//		return ResponseEntity.status(HttpStatus.CREATED).body(persistantUser);
		u.setPassword(passwordEncoder.encode(user.getPassword()));
		User savedUser = userDao.save(u);
		
		return ResponseEntity.status(HttpStatus.CREATED).body(savedUser);
	}

//	@Override
//	public ResponseEntity<?> LoginUser(UserAuthDto user) {
//		Optional<User> userOpt = userDao.findByEmail(user.getEmail());
//		
//		if(userOpt.isEmpty()) {
//			return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
//					.body(Map.of("error", "Invalid credentials", "message", "User not found"));
//		}
//		
//		User u = userOpt.get();
//		
//		if(!user.getPassword().equals(u.getPassword())) {
//			return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
//					.body(Map.of("error", "Invalid credentials", "message", "User not found"));
//		}
//		
//		UserRespDto userResponse = mapper.map(u, UserRespDto.class);
//		Map<String, Object> response = new HashMap<>();
//		response.put("message", "Login successfull");
//		response.put("role", u.getRole());
//		response.put("user", userResponse);
//		
//		return ResponseEntity.ok(response);
//	}

	@Override
	public ResponseEntity<?> UpdateUser(Long uId, UserReqDto user) {
		Optional<User> userOpt = userDao.findById(uId);
		
		if(userOpt.isEmpty()) {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User not found");
		}
		
		User existingUser = userOpt.get();
		
		if(user.getFirstName() != null) existingUser.setFirstName(user.getFirstName());
		if(user.getLastName() != null) existingUser.setLastName(user.getLastName());
		if(user.getEmail() != null) existingUser.setEmail(user.getEmail());
		if(user.getPhone() != null) existingUser.setPhone(user.getPhone());
		if(user.getAddress()!=null) existingUser.setAddress(user.getAddress());
		if(user.getCity()!=null) existingUser.setCity(user.getCity());
		if(user.getPincode()!=null) existingUser.setPincode(user.getPincode());
		
		userDao.save(existingUser);
		
		return ResponseEntity.ok(existingUser);
	}

	@Override
	public ResponseEntity<?> LoginByMobile(UserAuthDto user) {
	    // Use the 'phone' field instead of 'mobileNumber'
	    Optional<User> userOpt = userDao.findByPhone(user.getPhone()); // Updated line to use 'phone'

	    if (userOpt.isEmpty()) {
	        return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
	                .body(Map.of("error", "Invalid credentials", "message", "User not found"));
	    }

	    User u = userOpt.get();

	    // Compare password (Ensure passwords are securely stored and compared)
//	    if (!user.getPassword().equals(u.getPassword())) {
//	        return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
//	                .body(Map.of("error", "Invalid credentials", "message", "Invalid password"));
//	    }
	    if(!passwordEncoder.matches(user.getPassword(), u.getPassword())) {
	    	return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
	    			.body(Map.of("error", "Invalid credentials", "message", "Incorrect password"));
	    }
	    
	    String token = jwtUtil.generateToken(u.getPhone());

	    UserRespDto userResponse = mapper.map(u, UserRespDto.class);
	    Map<String, Object> response = new HashMap<>();
	    response.put("message", "Login successful");
	    response.put("token", token);
	    response.put("role", u.getRole());
	    response.put("user", userResponse);

	    return ResponseEntity.ok(response);
	}


	
}
