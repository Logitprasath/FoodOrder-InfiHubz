package com.example.infihubz.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.infihubz.model.Admin;

@Repository
public interface AdminRepo extends JpaRepository<Admin, Long> {

    @Query("SELECT a FROM Admin a WHERE a.email = ?1 AND a.password = ?2")
    Admin findByEmailAndPassword(String email, String password);
}
