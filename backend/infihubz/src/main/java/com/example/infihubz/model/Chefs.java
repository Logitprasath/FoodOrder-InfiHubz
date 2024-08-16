package com.example.infihubz.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Data
public class Chefs {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long chefId;

    private String chefName;

    private String email;

    private String password;

    private String phoneNumber;
    
}
