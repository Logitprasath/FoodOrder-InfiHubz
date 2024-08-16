package com.example.infihubz.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.infihubz.dto.OrderDTO;
import com.example.infihubz.model.ManageFood;
import com.example.infihubz.model.Order;
import com.example.infihubz.service.ManageFoodService;

@RestController
@RequestMapping("/admin/food")
@CrossOrigin(origins = "http://localhost:5173")
public class ManageFoodController {

    @Autowired
    private ManageFoodService mfs;

    @PostMapping("/add")
    public ResponseEntity<?> addNewItem(@RequestBody ManageFood mf) {
        try {
            ManageFood food = mfs.addNewFood(mf);
            return ResponseEntity.ok(food);
        } catch (Exception e) {
            return ResponseEntity.status(500).body(null);
        }
    }

    @GetMapping("/list")
    public ResponseEntity<?> listItems() {
        try {
            List<ManageFood> l = mfs.fetch();
            return ResponseEntity.ok(l);
        } catch (Exception e) {
            return ResponseEntity.status(500).build();
        }
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteFood(@PathVariable long id) {
        try {
            mfs.delFood(id);
            return ResponseEntity.ok("Successfully Removed");
        } catch (Exception e) {
            return ResponseEntity.status(500).build();
        }
    }

    @PostMapping("/orders")
    public ResponseEntity<?> addOrder(@RequestBody List<OrderDTO>odto)
    {
        try {
            List<Order> order= mfs.addOrder(odto);
            return ResponseEntity.ok(order);
            }catch(Exception e)
            {
                return ResponseEntity.status(500).build();
            }
    }
}
