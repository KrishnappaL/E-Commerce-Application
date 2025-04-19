package com.example.demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.entity.Cart;

@Repository
public interface CartRepository extends JpaRepository<Cart,Long>{
List<Cart> findByProductId(Long productId);
void deleteByProductId(Long productId);
}
