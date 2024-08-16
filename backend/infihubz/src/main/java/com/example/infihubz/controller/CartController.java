package com.example.infihubz.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;

import com.example.infihubz.service.CartService;
import com.example.infihubz.model.Cart; 
import java.util.List; 

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

@RestController
@RequestMapping("/cart")
@CrossOrigin(origins = "http://localhost:5173")
public class CartController {

    @Autowired
    private CartService cartService;

    @PostMapping("/checkout")
    public ResponseEntity<String> checkout(@RequestBody List<Cart> cartItems) {
        try {
            String cart = cartService.addfood(cartItems);
            return ResponseEntity.ok(cart);
        } catch (Exception e) {
            return ResponseEntity.status(500).build();
        }
    }
}
