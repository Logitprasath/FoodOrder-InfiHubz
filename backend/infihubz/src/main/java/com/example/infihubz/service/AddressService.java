package com.example.infihubz.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.infihubz.model.Address;
import com.example.infihubz.repository.AddressRepo;

@Service
public class AddressService {

    @Autowired
    private AddressRepo ar;

    public Address addUser(Address a)
    {
        return ar.save(a);
    }

    public Long getId()
    {
        throw new UnsupportedOperationException("Unimplemented method 'getId'");
    }
    
}
