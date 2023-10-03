package com.example.demo.services;

import com.example.demo.entities.AutoPartEntity;
import com.example.demo.repositories.AutoPartRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AutoPartService {
    @Autowired
    private AutoPartRepository autoPartRepository;

    public List<AutoPartEntity> getAllParts() {
        return autoPartRepository.findAll();
    }

    public List<AutoPartEntity> getPartByCategory(String category) {
        return autoPartRepository.findAutoPartEntityByCategoryIgnoreCase(category);
    }

    public void insertOrUpdateAutoPart(AutoPartEntity autoPart) {
        autoPartRepository.save(autoPart);
    }

    public String deleteAutoPart(Integer id) {
        autoPartRepository.deleteById(id);
        return "Peça excluída com sucesso!";
    }
}
