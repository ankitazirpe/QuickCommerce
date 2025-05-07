package com.quickcomm.Service;

import java.util.List;

import com.quickcomm.dto.ApiResponse;
import com.quickcomm.dto.OrderDto;
import com.quickcomm.dto.OrderRespDto;

public interface OrderService {
	List<OrderDto> getAllOrders(Long userdId);
	
	ApiResponse placeOrder(OrderRespDto orderRespDto);

}
	
