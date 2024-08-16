package com.example.infihubz.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.infihubz.model.Address;
import com.example.infihubz.service.AddressService;

@RestController
@RequestMapping("/address")
@CrossOrigin(origins = "http://localhost:5173")
public class AddressController {

    @Autowired
    private AddressService as;

    @PostMapping("/add")
        public ResponseEntity<Address> addUser(@RequestBody Address a)
        {
            try {
                Address address = as.addUser(a);
                return ResponseEntity.ok(address);
            } catch (Exception e) {
                return ResponseEntity.status(500).build();
            }
        }

    @GetMapping("/address")
    public ResponseEntity<Long> getId()
    {
        try {
            Long id = as.getId();
            return ResponseEntity.ok(id);
            } catch (Exception e) {
                return ResponseEntity.status(500).build();
            }
    }
    
}
