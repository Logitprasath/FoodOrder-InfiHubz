package com.example.infihubz.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.infihubz.model.Chefs;
import com.example.infihubz.model.Order;
import com.example.infihubz.repository.ChefRepo;
import com.example.infihubz.repository.OrderRepo;

@Service
public class ChefService {

    @Autowired
    private ChefRepo cr;

    @Autowired
    private OrderRepo or;

    public Chefs addnew(Chefs c)
    {
        return cr.save(c);
    }

    public List<Order> get()
    {
        List<Order> o = or.findAll();
        return o;
    }
    
}
