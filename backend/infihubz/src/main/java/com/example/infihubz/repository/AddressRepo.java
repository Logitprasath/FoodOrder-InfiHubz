package com.example.infihubz.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.infihubz.model.Address;

@Repository
public interface AddressRepo extends JpaRepository<Address,Long> {

    
}  
