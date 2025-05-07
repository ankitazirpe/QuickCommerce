package com.quickcomm.Service;

import java.util.List;

import com.quickcomm.dto.ApiResponse;
import com.quickcomm.dto.ProductDto;

public interface ProductService {
	List<ProductDto> getAllProducts();
	
	ApiResponse addProduct( Long vendorId, ProductDto product);
	
	ApiResponse updateProduct(Long productId, Long vendorId, ProductDto productDto);
	
	ApiResponse deleteParkingLocation(Long pid, Long vId);

	List<ProductDto> getProductsByCategory(Long categoryId);
	
	// get product by name-id
	ProductDto getProductById(long productId);
	
	}
