package com.example.demo.controllers;

import com.example.demo.entities.AutoPartEntity;
import com.example.demo.services.AutoPartService;
import jakarta.websocket.server.PathParam;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/autoparts")
@CrossOrigin(origins = {"http://localhost:4200"})
public class AutoPartController {
    @Autowired
    private AutoPartService autoPartService;

    @GetMapping("/all")
    public List<AutoPartEntity> getAllParts() {
        return autoPartService.getAllParts();
    }

    @GetMapping("/name")
    public Optional<AutoPartEntity> searchAutoParts(@PathParam("name") String name) {
        return autoPartService.getPartByName(name);
    }
}
