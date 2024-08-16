package com.example.infihubz.dto;

import lombok.Data;

@Data
public class OrderDTO {

    private Long userId;
    private Long addressId;
    private Long quantity;
    private Long foodid;
    
}
