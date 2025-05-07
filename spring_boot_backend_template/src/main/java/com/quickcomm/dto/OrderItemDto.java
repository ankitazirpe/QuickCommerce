package com.quickcomm.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class OrderItemDto {
//	private String productName;
	private Long productId;
	private Integer quantity;
}
