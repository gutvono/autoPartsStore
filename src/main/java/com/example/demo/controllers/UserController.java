package com.example.demo.controllers;

import com.example.demo.dto.LoginRequest;
import com.example.demo.dto.UserOrdersRequest;
import com.example.demo.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping
@CrossOrigin(origins = {"http://localhost:4200"})
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody LoginRequest loginRequest) {
        String username = loginRequest.getUsername();
        String password = loginRequest.getPassword();

        String loginResult = userService.userLogin(username, password);

        if (loginResult.equals("Login feito com sucesso!")) {
            return ResponseEntity.ok(loginResult);
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(loginResult);
        }
    }

    @GetMapping("/market")
    public UserOrdersRequest getUserAfterLogin(@RequestParam("id") Integer id) {
        return userService.getUser(id);
    }
}
