package com.quickcomm.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.quickcomm.pojo.Category;
import com.quickcomm.pojo.Product;

public interface ProductDao extends JpaRepository<Product, Long> {
	List<Product> findByCategory(Category category);
}
