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

import com.example.infihubz.model.Admin;
import com.example.infihubz.service.AdminService;

@RestController
@RequestMapping("/admin")
@CrossOrigin(origins = "http://localhost:5173")
public class AdminController {

    @Autowired
    private AdminService adminService;

    @PostMapping("/add")
    public ResponseEntity<?> addAdmin(@RequestBody Admin admin) {
        try {
            Admin newAdmin = adminService.addAdmin(admin);
            return ResponseEntity.ok(newAdmin);
        } catch (Exception e) {
            return ResponseEntity.status(500).body("Error adding admin: " + e.getMessage());
        }
    }

    @GetMapping("/login/{email}/{password}")
    public ResponseEntity<?> validLogin(@PathVariable("email") String email, @PathVariable("password") String password) {
        try {
            Admin admin = adminService.findByEmailAndPassword(email, password);
            if (admin != null) {
                return ResponseEntity.ok(admin);
            } else {
                return ResponseEntity.status(404).body("Admin Not Found");
            }
        } catch (Exception e) {
            return ResponseEntity.status(500).body("Error during login: " + e.getMessage());
        }
    }
}
