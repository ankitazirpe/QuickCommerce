package com.quickcomm.pojo;

import jakarta.persistence.Entity;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "Review")
@NoArgsConstructor
@Getter
@Setter
public class Review extends BaseEntity {
	 	@ManyToOne
	    @JoinColumn(name = "user_id")
	    private User customer; // customer reviewing

	    @ManyToOne
	    @JoinColumn(name = "product_id")
	    private Product product;

	    private Integer rating; // 1-5 stars
	    private String comment;

}
