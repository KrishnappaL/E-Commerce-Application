package com.example.demo.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.dto.CartItemRequest;
import com.example.demo.entity.Cart;
import com.example.demo.service.CartService;

@RestController
@RequestMapping("/api/cart")
@CrossOrigin(origins="*")
public class CartController {
	private final CartService cartService;
	public CartController(CartService cartService) {
		super();
		this.cartService = cartService;
	}
	
@PostMapping("/add")
public ResponseEntity<Cart> addToCart(@RequestBody CartItemRequest cartItem)
{
	Cart cart=cartService.addToCart(cartItem.getProductId(),cartItem.getQuantity());
	return new ResponseEntity<>(cart,HttpStatus.CREATED);
}

@GetMapping
public ResponseEntity<List<Cart>> getCartItems(){
	List<Cart> cartItems=cartService.getAllCarts();
	return new ResponseEntity<>(cartItems,HttpStatus.OK);
}

@DeleteMapping("/product/{productId}")
public ResponseEntity<Void> removeFromCart(@PathVariable Long ProductId){
	cartService.removeCartByProductId(ProductId);
	return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	//return ResponseEntity.nonContent().build();
}

}