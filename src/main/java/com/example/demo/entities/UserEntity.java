package com.example.demo.entities;


import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity(name = "user")
public class UserEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Integer id;

    @Column(name = "name", length = 40, nullable = false)
    private String name;

    @Column(name = "lastname", length = 40, nullable = false)
    private String lastname;

    @Column(name = "age", nullable = false)
    private Integer age;

    @Column(name = "role", length = 20, nullable = false)
    private String role;

    @Column(name = "login", nullable = false)
    private String login;

    @Column(name = "password", nullable = false)
    private String password;
}
