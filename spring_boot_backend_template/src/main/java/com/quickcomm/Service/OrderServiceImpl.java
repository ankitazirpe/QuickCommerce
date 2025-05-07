package com.quickcomm.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.server.ResponseStatusException;

import com.quickcomm.dao.OrderDao;
import com.quickcomm.dao.ProductDao;
import com.quickcomm.dao.UserDao;
import com.quickcomm.dto.ApiResponse;
import com.quickcomm.dto.OrderDto;
import com.quickcomm.dto.OrderItemDto;
import com.quickcomm.dto.OrderRespDto;
import com.quickcomm.pojo.Order;
import com.quickcomm.pojo.OrderItem;
import com.quickcomm.pojo.Product;
import com.quickcomm.pojo.Status;
import com.quickcomm.pojo.User;
import com.quickcomm.pojo.UserRole;

@Service
@Transactional
public class OrderServiceImpl implements OrderService {
	
	@Autowired
	private ModelMapper mapper;
	
	@Autowired
	private OrderDao orderDao;
	
	@Autowired
	private UserDao userDao;
	
	@Autowired
	private ProductDao productDao;


	@Override
	public ApiResponse placeOrder(OrderRespDto orderRespDto) {
		User customer = userDao.findById(orderRespDto.getCustomerID())
				.orElseThrow(()-> new RuntimeException("Invalid customer id"));
		
		List<OrderItem> orderItems  = new ArrayList<>();
		List<String> productName = new ArrayList<>();
		double totalAmount = 0;
		int totalQuantity = 0;
		
		Order order = new Order();
		order.setCustomer(customer);
		order.setStatus(Status.PLACED);
		order.setItems(orderItems);
		
		
		for(OrderItemDto itemDto : orderRespDto.getItems()) {
			Product product = productDao.findById(itemDto.getProductId())
					.orElseThrow(()-> new RuntimeException("invalid product id"));
			
			if(product.getQuantity() < itemDto.getQuantity()) {
				throw new RuntimeException("Insufficient quantity for product " + product.getName());
			}
			
			OrderItem item = new OrderItem();
			item.setProduct(product);
			item.setQuantity(itemDto.getQuantity());
			item.setPrice(product.getPrice() *  itemDto.getQuantity());
			item.setOrder(order);
			
			product.setQuantity(product.getQuantity() - itemDto.getQuantity());
			
			totalAmount += item.getPrice();
			totalQuantity += itemDto.getQuantity();
			orderItems.add(item);
			productName.add(product.getName());
			

		}
		order.setTotalAount(totalAmount);
		order.setTotalQuantity(totalQuantity);
		order.setProductName(String.join(", ", productName));
		orderDao.save(order);
		return new ApiResponse("Order placed successfully with customerId "+ customer.getId() );
	}


	@Override
	public List<OrderDto> getAllOrders(Long userdId) {
		User user = userDao.findById(userdId)
				.orElseThrow(()-> new RuntimeException("Invalid user ID"));
		
		if(!user.getRole().equals(UserRole.CUSTOMER)) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Not a user");
		}
		
		return orderDao.findByCustomer(user).stream().map(order->{
			OrderDto dto = mapper.map(order, OrderDto.class);
			
			
			dto.setCustomerId(order.getCustomer().getId());
			
			List<OrderItemDto> itemDto = order.getItems().stream()
					.map(item->mapper.map(item, OrderItemDto.class))
					.collect(Collectors.toList());
			
			dto.setItems(itemDto);
			return dto;
		}).collect(Collectors.toList());
	}

//	@Override
//	public List getAllOrders(Long userId) {
//	    User user = userDao.findById(userId)
//	            .orElseThrow(() -> new RuntimeException("Invalid user id"));
//
//	    if (!user.getRole().equals(UserRole.CUSTOMER)) {
//	        throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Not a user");
//	    }
//
//	    return orderDao.findByCustomer(user).stream().map(order -> {
//	        OrderRespDto dto = mapper.map(order, OrderRespDto.class);
//
//	        // Manually set nested customerId
//	        dto.setCustomerID(order.getCustomer().getId());
//
//	        // Manually map OrderItemDto list
//	        List<OrderItemDto> itemDtos = order.getItems().stream().map(item -> {
//	            OrderItemDto itemDto = mapper.map(item, OrderItemDto.class);
//	            itemDto.setProductId(item.getProduct().getId()); // set nested field manually
//	            return itemDto;
//	        }).collect(Collectors.toList());
//
//	        dto.setItems(itemDtos);
//
//	        // Manually set calculated fields
//	        dto.setTotalQuantity(order.getItems().stream().mapToInt(OrderItem::getQuantity).sum());
//
//	        dto.setProductName(order.getItems().stream()
//	                .map(item -> item.getProduct().getName())
//	                .collect(Collectors.joining(", ")));
//
//	        return dto;
//	    }).collect(Collectors.toList());
//	}



}
