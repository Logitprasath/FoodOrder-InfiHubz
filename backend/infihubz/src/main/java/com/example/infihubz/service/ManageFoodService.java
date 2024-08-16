package com.example.infihubz.service;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.infihubz.dto.OrderDTO;
import com.example.infihubz.model.Address;
import com.example.infihubz.model.ManageFood;
import com.example.infihubz.model.Order;
import com.example.infihubz.model.User;
import com.example.infihubz.repository.AddressRepo;
import com.example.infihubz.repository.ManageFoodRepo;
import com.example.infihubz.repository.OrderRepo;
import com.example.infihubz.repository.UserRepo;

@Service
public class ManageFoodService {

    @Autowired
    private ManageFoodRepo manageFoodRepo;

    @Autowired
    private UserRepo userRepo;

    @Autowired
    private AddressRepo addressRepo;

    @Autowired
    private OrderRepo orderRepo;

    public ManageFood addNewFood(ManageFood mf) {
        return manageFoodRepo.save(mf);
    }

    public List<ManageFood> fetch() {
        return manageFoodRepo.findAll();
    }

    public void delFood(Long id) {
        manageFoodRepo.deleteById(id);
    }

    public List<Order> addOrder(List<OrderDTO> orderDTOList) {
        List<Order> orders = new ArrayList<>();

        for (OrderDTO dto : orderDTOList) {
            User user = userRepo.findById(dto.getUserId())
                .orElseThrow(() -> new RuntimeException("User not found"));
            ManageFood food = manageFoodRepo.findById(dto.getFoodid())
                .orElseThrow(() -> new RuntimeException("Food not found"));
            Address address = addressRepo.findById(dto.getAddressId())
                .orElseThrow(() -> new RuntimeException("Address not found"));

            Order order = new Order();
            order.setUser(user);
            order.setManageFood(food);
            order.setAddress(address);
            order.setQuantity(dto.getQuantity());
            order.setDateTime(LocalDateTime.now());

            orders.add(order);
        }

        return orderRepo.saveAll(orders);
    }
}
