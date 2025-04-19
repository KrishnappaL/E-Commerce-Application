package com.example.demo.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.example.demo.entity.Cart;
import com.example.demo.entity.Product;
import com.example.demo.repository.CartRepository;
import com.example.demo.repository.ProductRepository;

@Service
public class CartService {

	private final ProductRepository productRepository;
	private final CartRepository cartRepository;

	public CartService(ProductRepository productRepository, CartRepository cartRepository) {
		super();
		this.productRepository = productRepository;
		this.cartRepository = cartRepository;
	}

	public Cart addToCart(Long productId, int quantity) {
		Product product = productRepository.findById(productId)
				.orElseThrow(() -> new RuntimeException("Product not Found"));
		Cart cartItem = new Cart(product, quantity);
		return cartRepository.save(cartItem);
	}

	public List<Cart> getAllCarts() {
		return cartRepository.findAll();
	}

	public void removeCartByProductId(Long productId) {
		List<Cart> cartItems = cartRepository.findByProductId(productId);
		if (cartItems.isEmpty()) {
			throw new RuntimeException("No cart items found for product ID" + productId);
		}
		cartRepository.deleteAll(cartItems);
	}
}