package com.example.demo.services;

import com.example.demo.dto.UserOrdersRequest;
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

    public UserOrdersRequest getUser(Integer id) {
        Optional<UserEntity> userOptional = userRepository.findById(id);

        UserEntity user = userOptional.get();

        UserOrdersRequest userWithOrders = new UserOrdersRequest();
        userWithOrders.setId(user.getId());
        userWithOrders.setName(user.getName());
        userWithOrders.setRole(user.getRole());
        userWithOrders.setParts(user.getOrders());

        return userWithOrders;
    }

    public void registerOrUpdateUser(UserEntity user) {
        userRepository.save(user);
    }

    public void deleteUser(Integer id) {
        userRepository.deleteById(id);
    }
}