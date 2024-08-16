package com.example.infihubz.model;

import jakarta.persistence.Column;
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
public class ManageFood {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long foodId;

    private String foodName;

    @Column(name = "image", columnDefinition = "longtext")
    private String foodImage; // Corrected typo from 'foodImgage' to 'foodImage'

    private String foodDescription;

    private String foodCategory;

    private int foodPrice;
}
