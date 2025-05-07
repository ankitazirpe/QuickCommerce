package com.quickcomm.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class ProductDto {
	private String name;
	
	private String description;
	
	private double price;
	
	private int quantity;
	
//	private boolean status ;
	
	private String categoryName;
	
	private String imageUrl;
	
//	private Category categoryId;
//	
//	private User vendor;
}
