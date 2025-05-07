package com.quickcomm.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.quickcomm.Service.ProductService;
import com.quickcomm.dto.ProductDto;
import org.springframework.web.bind.annotation.RequestParam;





@RestController
@RequestMapping("/product")
@Validated
public class ProductController {
	@Autowired
	private ProductService productService;
	
	@PostMapping("/addProduct/{vendorId}")
	public ResponseEntity<?> addProduct( @PathVariable Long vendorId ,@RequestBody ProductDto productDto) {
		
		return ResponseEntity.status(HttpStatus.CREATED)
				.body(productService.addProduct( vendorId, productDto));
	}
	
	@PutMapping("/updateProduct/{id}/{vId}")
	public ResponseEntity<?> updateProduct(@PathVariable Long id,@PathVariable Long vId, ProductDto  productDto) {
		
		return ResponseEntity.ok(productService.updateProduct(id, vId, productDto));
	}
	
	@GetMapping()
	public ResponseEntity<?> getAllProducts() {
		List<ProductDto> product = productService.getAllProducts();
		if (product.isEmpty())
			return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
		return ResponseEntity.ok(product);
	}
	
	@DeleteMapping("/deleteProduct/{pId}/{vId}")
	public ResponseEntity<?> deleteProduct(@PathVariable Long pId, @PathVariable Long vId){
		try {
			return ResponseEntity.ok(productService.deleteParkingLocation(pId, vId));
		}catch (RuntimeException e) {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body(new com.quickcomm.dto.ApiResponse(e.getMessage()));
		}
	}
	
	@GetMapping("/category/{categoryId}")
	public ResponseEntity<List<ProductDto>> getProductsByCategory(@PathVariable Long categoryId) {
		List<ProductDto> products = productService.getProductsByCategory(categoryId);
		return ResponseEntity.ok(products);
	}
	
	@GetMapping("/getById/{productId}")
	public ResponseEntity<ProductDto> getProductById(@PathVariable Long productId) {
		ProductDto product = productService.getProductById(productId);
		return ResponseEntity.ok(product);
	}
	
	
	
}
