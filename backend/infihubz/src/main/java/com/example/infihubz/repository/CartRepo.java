package com.example.infihubz.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.infihubz.model.Cart;

@Repository

public interface CartRepo extends JpaRepository <Cart,Long>{

    
} 
