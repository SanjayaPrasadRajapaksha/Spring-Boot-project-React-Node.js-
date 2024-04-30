package com.spring.hellospring.dto;



import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ProductDto {
    private String name;
    private double price;
    private int quantity;
    private Long category_id;
}
