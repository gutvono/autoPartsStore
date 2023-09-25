package com.example.demo.dto;

import com.example.demo.entities.OrderEntity;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class UserOrdersRequest {
    private Integer id;
    private String name;
    private String role;
    private List<OrderEntity> parts;
}
