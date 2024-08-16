package com.example.infihubz.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.infihubz.model.User;
import com.example.infihubz.repository.UserRepo;

@Service
public class UserService {

    @Autowired
    private UserRepo userRepo;

    public User addUser(User user) {
        return userRepo.save(user);
    }

    public User findByEmailAndPassword(String email, String password) {
        return userRepo.findByEmailAndPassword(email, password);
    }
}
