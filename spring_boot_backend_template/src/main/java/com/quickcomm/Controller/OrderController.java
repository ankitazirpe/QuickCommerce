package com.quickcomm.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.quickcomm.Service.OrderService;
import com.quickcomm.dto.OrderDto;
import com.quickcomm.dto.OrderRespDto;



@RestController
@RequestMapping("/order")
@Validated
public class OrderController {
	
	@Autowired
	private OrderService orderService;
	
	@PostMapping("/order")
	public ResponseEntity<?> placeOrder(@RequestBody OrderRespDto orderDto) {
		
		return ResponseEntity.ok(orderService.placeOrder(orderDto));
	}
	
	@GetMapping("/getAllOrders/{userId}")
	public ResponseEntity<?> getAllOrders(@PathVariable Long userId	) {
		List<OrderDto> orders = orderService.getAllOrders(userId);
		
		if(orders.isEmpty()) {
			return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
		}
		
		return ResponseEntity.ok(orders);
	}
	
	

}
