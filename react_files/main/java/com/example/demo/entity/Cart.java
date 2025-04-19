package com.example.demo.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name="cart")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class Cart {
@Id
@GeneratedValue(strategy=GenerationType.IDENTITY)
private Long id;
//foreign key
@ManyToOne
@JoinColumn(name="product_id" , nullable=false)
private Product product;
public Cart(Product product, int quantity) {
	super();
	this.product = product;
	this.quantity = quantity;
}
private int quantity;


public Long getId() {
	return id;
}
public void setId(Long id) {
	this.id = id;
}
public Product getProduct() {
	return product;
}
public void setProduct(Product product) {
	this.product = product;
}
public int getQuantity() {
	return quantity;
}
public void setQuantity(int quantity) {
	this.quantity = quantity;
}
}
