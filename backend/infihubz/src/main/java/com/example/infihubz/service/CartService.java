package com.example.infihubz.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.infihubz.model.Cart;
import com.example.infihubz.repository.CartRepo;

@Service
public class CartService {

    @Autowired
    private CartRepo cartRepo;

    public String addfood(List<Cart> cartItems)
    {
        cartRepo.saveAll(cartItems);
        return("Successfully Added");
    }
    
}
