package com.quickcomm.dao;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.quickcomm.pojo.Category;
import com.quickcomm.pojo.Vendor;

public interface CategoryDao extends JpaRepository<Category, Long> {

	Optional<Vendor> findById(Category category);
	
	Optional<Category> findByName(String name);

}
