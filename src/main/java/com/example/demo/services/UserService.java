package com.example.demo.services;

import com.example.demo.entities.UserEntity;
import com.example.demo.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    public String userLogin(String username, String password) {
        Optional<UserEntity> userOptional = userRepository.findUserEntityByLogin(username);

        if (userOptional.isPresent()) {
            UserEntity user = userOptional.get();
            if (password.equals(user.getPassword())) {
                return "Login feito com sucesso! Role: " + user.getRole();
            } else {
                return "Senha incorreta.";
            }
        } else {
            return "Usuário não encontrado.";
        }
    }

    public void registerOrUpdateUser(UserEntity user) {
        userRepository.save(user);
    }
}