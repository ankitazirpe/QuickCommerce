package com.quickcomm.pojo;

import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "Orders")
@NoArgsConstructor
@Getter
@Setter
public class Order extends BaseEntity {
	@Column(name = "Total_amount", nullable = false)
	private double totalAount;
	
	@Enumerated(EnumType.STRING)
	@Column(length = 30)
	private Status status;
	
	@ManyToOne
	@JoinColumn(name = "customer_id")
	private User customer;
	
	@OneToMany(mappedBy = "order", cascade = CascadeType.ALL)
	private List<OrderItem> items;
	
	@Column(name = "product_name" , length = 500)
	private String productName;
	
	@Column(name = "total_quantity")
	private Integer totalQuantity;
}
