package com.example.infihubz.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.infihubz.model.Chefs;

@Repository
public interface ChefRepo extends JpaRepository<Chefs,Long> {
    
}
