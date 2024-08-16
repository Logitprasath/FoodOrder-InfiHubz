package com.example.infihubz.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.infihubz.model.Homie;
import com.example.infihubz.service.HomieService;

@RestController
@RequestMapping("/homie")
public class HomieController {

    @Autowired
    private HomieService hs;

    @PostMapping("/add")
    public ResponseEntity<?> addNewUser(@RequestBody Homie h) {
        try {
            Homie homie = hs.addNewUser(h);
            return ResponseEntity.ok(homie);
        } catch (Exception e) {
            return ResponseEntity.status(500).build();
        }
    }

    @GetMapping("/login/{email}/{password}")
    public ResponseEntity<?> loginValid(@PathVariable("email") String email, @PathVariable("password") String password) {
        try {
            Homie user = hs.findByEmailAndPassword(email, password);
            if (user != null)
                return ResponseEntity.ok(user);
            else
                return ResponseEntity.status(404).body("User Not Found");
        } catch (Exception e) {
            return ResponseEntity.status(500).build();
        }
    }
}
