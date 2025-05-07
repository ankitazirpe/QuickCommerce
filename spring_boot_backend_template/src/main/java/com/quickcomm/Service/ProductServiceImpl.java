package com.quickcomm.Service;

import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.quickcomm.dao.CategoryDao;
import com.quickcomm.dao.ProductDao;
import com.quickcomm.dao.VendorDao;
import com.quickcomm.dto.ApiResponse;
import com.quickcomm.dto.ProductDto;
import com.quickcomm.pojo.Category;
import com.quickcomm.pojo.Product;
import com.quickcomm.pojo.UserRole;
import com.quickcomm.pojo.Vendor;

@Service
@Transactional
public class ProductServiceImpl implements ProductService {
	@Autowired
	private ProductDao productDao;
	
	@Autowired
	private VendorDao venderDao;
	
	@Autowired
	private ModelMapper mapper;
	
	@Autowired
	private CategoryDao categoryDao;
	
	@Override
	public List<ProductDto> getAllProducts() {
	
		return productDao.findAll().stream().filter(product-> product.isStatus())
				.map(product -> {
					ProductDto dto = mapper.map(product, ProductDto.class);
					if(product.getCategory()!=null)
						dto.setCategoryName(product.getCategory().getName());
					return dto;
					
				})
				
				.collect(Collectors.toList());
	}


	@Override
	public ApiResponse addProduct( Long vendorId, ProductDto product) {
		Vendor vendor = venderDao.findById(vendorId).orElseThrow(()-> new  RuntimeException("Invalid id"));
		
		if(vendor.getUserRole().equals(UserRole.VENDOR)) {
			
//			Category category = categoryDao.findById(product.getCategoryId())
//				    .orElseThrow(() -> new RuntimeException("Invalid category ID"));
			
			Category category = categoryDao.findByName(product.getCategoryName())
					.orElseThrow(()-> new RuntimeException("Invalid category name"));

			
			Product products = mapper.map(product, Product.class);
			products.setVendor(vendor);
			products.setCategory(category);
			Product persistentproduct = productDao.save(products);
			return new ApiResponse("product added with id " + persistentproduct.getId() );
			
		}
		
		
		return new ApiResponse("product not added");
	}
	
	

	@Override
	public ApiResponse updateProduct(Long productId, Long vendorId, ProductDto productDto) {
		Vendor vendor = venderDao.findById(vendorId).orElseThrow(()-> new RuntimeException("Invalid vendor id"));
		
		if(vendor.getUserRole().equals(UserRole.VENDOR)) {
			Product product = productDao.findById(productId)
					.orElseThrow(()-> new RuntimeException("product id is invalid"));
			product.setName(productDto.getName());
			product.setDescription(productDto.getDescription());
			product.setQuantity(productDto.getQuantity());
			product.setPrice(productDto.getPrice());
			product.setImageUrl(productDto.getImageUrl());
			
			productDao.save(product);
			return new ApiResponse("Product updated name =>  " + product.getName());
			
		}
		
		return new ApiResponse("product not updated");
	}

	

	@Override
	public ApiResponse deleteParkingLocation(Long pid, Long vId) {
		Vendor vendor = venderDao.findById(vId).orElseThrow(()-> new RuntimeException("Invalid vendor id"));
		
		if(vendor.getUserRole().equals(UserRole.VENDOR)) {
			Product product = productDao.findById(pid)
					.orElseThrow(()-> new RuntimeException("product id is invalid"));
			
			product.setStatus(false);
			productDao.save(product);
			return new ApiResponse("Product deleted");
		}
		return new ApiResponse("product not deleted");
	}


	@Override
	public List<ProductDto> getProductsByCategory(Long categoryId) {
		Category category = categoryDao.findById(categoryId)
				.orElseThrow(()-> new RuntimeException("invalid category id"));
		
		List<Product> products = productDao.findByCategory(category);
		
//		return products.stream()
//				.map(product->mapper.map(product, ProductDto.class))
//				.collect(Collectors.toList());
		 return products.stream().map(product -> {
		        ProductDto dto = mapper.map(product, ProductDto.class);
		        
		        // Manually set category name to avoid null
		        if (product.getCategory() != null && product.getCategory().getName() != null) {
		            dto.setCategoryName(product.getCategory().getName());
		        }
		        
		        return dto;
		    }).collect(Collectors.toList());
	}


	@Override
	public ProductDto getProductById(long productId) {

		Product product = productDao.findById(productId)
				.orElseThrow(()-> new RuntimeException("product not found with id "+productId));
		
		ProductDto dto  = mapper.map(product, ProductDto.class);
		
		if(product.getCategory() != null) {
			dto.setCategoryName(product.getCategory().getName());
		}
		return dto;
	}
	
}
