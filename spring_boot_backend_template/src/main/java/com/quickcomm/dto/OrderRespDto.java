package com.quickcomm.dto;

import java.util.List;

import com.quickcomm.pojo.OrderItem;
import com.quickcomm.pojo.Status;
import com.quickcomm.pojo.User;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class OrderRespDto {
//	private double totalAount;
//
//	private Status status;
//	
//	private User customer;
	
//    private double totalAmount;
//    private String status;
	
	private Long customerID;
	
	private List<OrderItemDto> items;



}
