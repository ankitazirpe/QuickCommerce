package com.quickcomm.pojo;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "Category")
@NoArgsConstructor
@Getter
@Setter
public class Category extends BaseEntity {
	@Column(name = "category_name")
	private String name;
}
