package com.example.infihubz.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.infihubz.model.ManageFood;

@Repository
public interface ManageFoodRepo extends JpaRepository<ManageFood, Long> {
}
