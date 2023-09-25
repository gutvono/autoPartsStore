package com.example.demo.services;

import com.example.demo.repositories.AutoPartRepository;
import com.example.demo.repositories.OrderRepository;
import com.example.demo.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class OrderService {
    @Autowired
    private UserRepository userRepository;
    private OrderRepository orderRepository;
    private AutoPartRepository autoPartRepository;

//    public UserOrdersRequest userOrders(Integer id) {
//        Optional<UserEntity> user = userRepository.findById(id);
//
//        if (user.isPresent()) {
//            List<AutoPartEntity> parts = autoPartRepository.findBy
//        }
//    }
}
