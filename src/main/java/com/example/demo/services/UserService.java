package com.example.demo.services;

import com.example.demo.dto.UserOrdersRequest;
import com.example.demo.entities.UserEntity;
import com.example.demo.repositories.OrderRepository;
import com.example.demo.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private OrderRepository orderRepository;

    public Map<String, Object> userLogin(String username, String password) {
        Optional<UserEntity> userOptional = userRepository.findUserEntityByLogin(username);
        Map<String, Object> response = new HashMap<>();

        if (userOptional.isPresent()) {
            UserEntity user = userOptional.get();
            if (password.equals(user.getPassword())) {
                response.put("message", "Login realizado com sucesso.");
                response.put("status", 200);
                response.put("role", user.getRole());
                response.put("name", user.getName());
                response.put("id", user.getId());
            } else {
                response.put("message", "Login ou senha incorretos.");
                response.put("status", 401);
            }
        } else {
            response.put("message", "Usuário não encontrado.");
            response.put("status", 404);
        }

        return response;
    }

    public UserOrdersRequest getUser(Integer id) {
        Optional<UserEntity> userOptional = userRepository.findById(id);

        UserEntity user = userOptional.get();

        UserOrdersRequest userWithOrders = new UserOrdersRequest();
        userWithOrders.setId(user.getId());
        userWithOrders.setName(user.getName());
        userWithOrders.setRole(user.getRole());
        userWithOrders.setParts(orderRepository.findByUserId(user.getId()));

        return userWithOrders;
    }

    public void registerOrUpdateUser(UserEntity user) {
        userRepository.save(user);
    }

    public void deleteUser(Integer id) {
        userRepository.deleteById(id);
    }
}