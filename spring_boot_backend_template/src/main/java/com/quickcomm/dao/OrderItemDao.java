package com.quickcomm.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.quickcomm.pojo.OrderItem;

public interface OrderItemDao extends JpaRepository<OrderItem, Long>{

}
