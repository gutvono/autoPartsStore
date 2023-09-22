package com.example.demo.entities;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.text.DecimalFormat;

@Getter
@Setter
@Entity(name = "autoParts")
public class AutoPartEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Integer id;

    @Column(name = "part_name", length = 100, nullable = false)
    private String partName;

    @Column(name = "category", length = 40, nullable = false)
    private String category;

    @Column(name = "car_name", length = 80, nullable = false)
    private String carName;

    @Column(name = "price", nullable = false)
    private Double price;

    @Column(name = "image", nullable = false)
    private String image;
}
