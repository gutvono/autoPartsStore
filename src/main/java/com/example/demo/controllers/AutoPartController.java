package com.example.demo.controllers;

import com.example.demo.entities.AutoPartEntity;
import com.example.demo.services.AutoPartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

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

    @GetMapping("/search")
    public List<AutoPartEntity> searchAutoPartsByCategory(@RequestParam("category") String category) {
        return autoPartService.getPartByCategory(category);
    }
}
