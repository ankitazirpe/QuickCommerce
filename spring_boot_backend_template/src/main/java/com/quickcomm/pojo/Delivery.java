package com.quickcomm.pojo;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "Delivery")
@NoArgsConstructor
@Getter
@Setter
public class Delivery extends BaseEntity {
	@OneToOne
    @JoinColumn(name = "order_id")
    private Order order;

    @ManyToOne
    @JoinColumn(name = "delivery_partner_id")
    private User deliveryPartner;  // delivery partner assigned

    @Enumerated(EnumType.STRING) 
	@Column(length = 30) 
    private DeliveryStatus status; // pending, assigned, delivered
}
