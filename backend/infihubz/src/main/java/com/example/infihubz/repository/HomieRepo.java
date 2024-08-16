package com.example.infihubz.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.infihubz.model.Homie;

@Repository
public interface HomieRepo extends JpaRepository<Homie,Long> {
    @Query("select h from Homie h where h.email = ?1 and h.password = ?2")
    Homie findByEmailAndPassword(String email, String password);
    
}
