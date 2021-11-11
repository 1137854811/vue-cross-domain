package com.example.springsecurity.controller;

import org.springframework.web.bind.annotation.*;

/**
 * @Author: Tz
 * @date: 2020/9/2 17:17
 */
@RestController
public class hello {
    @PostMapping("/user")
    public User hello(@RequestBody User user) {
        System.err.println("userID"+user);
        return user;
    }
}
