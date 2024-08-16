package com.example.infihubz.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.infihubz.model.User;
import com.example.infihubz.service.UserService;

@RestController
@RequestMapping("/user")
@CrossOrigin(origins = "http://localhost:5173")
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("/add")
    public ResponseEntity<?> addUser(@RequestBody User user) {
        try {
            User newUser = userService.addUser(user);
            return ResponseEntity.ok(newUser);
        } catch (Exception e) {
            return ResponseEntity.status(500).build();
        }
    }

    @GetMapping("/login/{email}/{password}")
    public ResponseEntity<?> validLogin(@PathVariable("email") String email, @PathVariable("password") String password) {
        try {
            User user = userService.findByEmailAndPassword(email, password);
            if (user != null)
                return ResponseEntity.ok(user);
            else
                return ResponseEntity.status(404).body("User Not Found");
        } catch (Exception e) {
            return ResponseEntity.status(500).build();
        }
    }
}
