package com.example.infihubz.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.infihubz.model.Order;

@Repository
public interface OrderRepo extends JpaRepository<Order,Long> {
    
}
