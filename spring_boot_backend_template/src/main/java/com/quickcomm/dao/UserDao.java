package com.quickcomm.dao;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.quickcomm.pojo.User;

public interface UserDao extends JpaRepository<User, Long> {
	Optional<User> findByEmailAndPassword(String email, String password);
	
	Optional<User> findByEmail(String email);
	
	Optional<User> findByPhone(String phone);
}
