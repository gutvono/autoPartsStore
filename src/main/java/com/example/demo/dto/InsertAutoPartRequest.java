package com.example.demo.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class InsertAutoPartRequest {
    private String partName;
    private String category;
    private String carName;
    private Double price;
    private String image;
}
