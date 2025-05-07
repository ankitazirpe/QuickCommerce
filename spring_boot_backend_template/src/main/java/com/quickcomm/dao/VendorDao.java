package com.quickcomm.dao;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.quickcomm.pojo.Vendor;

public interface VendorDao extends JpaRepository<Vendor, Long> {
	Optional<Vendor> findByEmailAndPassword(String email, String password);
	
	Optional<Vendor> findByEmail(String email);
}
