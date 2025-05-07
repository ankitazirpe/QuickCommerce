package com.quickcomm.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.quickcomm.pojo.Order;
import com.quickcomm.pojo.User;

public interface OrderDao extends JpaRepository<Order, Long> {
	List<Order> findByCustomer(User customer);
}
