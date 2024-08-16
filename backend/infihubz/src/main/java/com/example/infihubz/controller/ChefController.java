package com.example.infihubz.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.infihubz.model.Chefs;
import com.example.infihubz.model.Order;
import com.example.infihubz.service.ChefService;


@RestController
@RequestMapping("/chefs")
@CrossOrigin(origins = "http://localhost:5173")
public class ChefController {

    @Autowired
    private ChefService cs;

    @PostMapping("/add")
    public ResponseEntity<?> addnew(@RequestBody Chefs c)
    {
        try {
            Chefs chef=cs.addnew(c);
            return ResponseEntity.ok(chef);
        } catch (Exception e) {
            return ResponseEntity.status(500).build();

        }
    }
    @GetMapping("/food")
    public ResponseEntity<?>get()
    {
        try {
            List<Order> order=cs.get();
            return ResponseEntity.ok(order);
        }
        catch (Exception e) {
            return ResponseEntity.status(500).build();
        }
    }


    
}
