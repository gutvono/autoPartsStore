package com.example.demo.controllers;

import com.example.demo.dto.LoginRequest;
import com.example.demo.dto.UserOrdersRequest;
import com.example.demo.entities.UserEntity;
import com.example.demo.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping
@CrossOrigin(origins = {"http://localhost:4200"})
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("/login/permission")
    public ResponseEntity<Map<String, Object>> login(@RequestBody LoginRequest loginRequest) {
        String username = loginRequest.getUsername();
        String password = loginRequest.getPassword();

        Map<String, Object> loginResult = userService.userLogin(username, password);

        if (loginResult.get("status").equals(200)) {
            return ResponseEntity.ok(loginResult);
        } else if (loginResult.get("status").equals(401)) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(loginResult);
        } else if (loginResult.get("status").equals(404)) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(loginResult);
        }

        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(loginResult);
    }
    
    @PostMapping("/register/permission")
    public String register(@RequestBody UserEntity user) {
        userService.registerOrUpdateUser(user);
        return "Usuário registrado com sucesso.";
    }

    @GetMapping("/user/profile")
    public UserOrdersRequest getUserProfile(@RequestParam("id") Integer id) {
        return userService.getUser(id);
    }
}
