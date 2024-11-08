package com.concurrente.jurassicpark.controllers;

import com.concurrente.jurassicpark.dto.LoginRequest;
import com.concurrente.jurassicpark.services.UserService;
import com.concurrente.jurassicpark.utils.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("public/login")
public class LoginController {

    @Autowired
    private UserService userService;

    @Autowired
    private JwtUtil jwtUtil;

    @PostMapping
    public ResponseEntity<String> login(@RequestBody LoginRequest loginRequest) {
        boolean isValid = userService.verifyUser(loginRequest.getEmail(), loginRequest.getPassword());

        if (isValid) {
            String token = jwtUtil.generateToken(loginRequest.getEmail());
            return ResponseEntity.ok(token); // Return the JWT token
        } else {
            return ResponseEntity.status(401).body("Invalid user or password");
        }
    }
}
