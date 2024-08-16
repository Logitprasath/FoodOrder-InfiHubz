package com.example.infihubz.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.infihubz.model.Homie;
import com.example.infihubz.repository.HomieRepo;

@Service
public class HomieService {

    @Autowired
    private HomieRepo hr;

    public Homie addNewUser(Homie h)
    {
        return hr.save(h);
    }

    public Homie findByEmailAndPassword(String email, String password)
    {
        return hr.findByEmailAndPassword(email, password);
    }
    
}
