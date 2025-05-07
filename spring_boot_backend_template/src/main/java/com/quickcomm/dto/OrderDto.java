package com.quickcomm.dto;

import java.util.List;

import com.quickcomm.pojo.Status;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class OrderDto {
	private Long customerId;
	private List<OrderItemDto> items;
    private double totalAount;
    private Status status;
    private Integer totalQuantity;
    private String productName;
//    private Long productId;

}
