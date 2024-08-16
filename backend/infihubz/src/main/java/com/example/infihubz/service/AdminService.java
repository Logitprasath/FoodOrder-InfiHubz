package com.example.infihubz.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.infihubz.model.Admin;
import com.example.infihubz.repository.AdminRepo;

@Service
public class AdminService {

    @Autowired
    private AdminRepo adminRepo;

    public Admin addAdmin(Admin admin) {
        return adminRepo.save(admin);
    }

    public Admin findByEmailAndPassword(String email, String password) {
        return adminRepo.findByEmailAndPassword(email, password);
    }
}
