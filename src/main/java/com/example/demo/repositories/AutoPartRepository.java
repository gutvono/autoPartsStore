package com.example.demo.repositories;

import com.example.demo.entities.AutoPartEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface AutoPartRepository extends JpaRepository<AutoPartEntity, Integer> {
    Optional<AutoPartEntity> findAutoPartEntityByPartNameContainsIgnoreCase(String name);
}
