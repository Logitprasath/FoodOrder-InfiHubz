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
public class Homie {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long homieId;

    private String userName;
    private String email;
    private String password;
    private Long phoneNumber;
    
}
