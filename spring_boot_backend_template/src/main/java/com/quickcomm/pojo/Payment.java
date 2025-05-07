package com.quickcomm.pojo;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "Payment")
@NoArgsConstructor
@Getter
@Setter
public class Payment extends BaseEntity {
	@OneToOne
    @JoinColumn(name = "order_id")
    private Order order;
	
	@Enumerated(EnumType.STRING) 
	@Column(length = 30) 
	private PaymentMethod method;
	
	@Enumerated(EnumType.STRING) 
	@Column(length = 30) 
	private PaymentStatus status;
}
