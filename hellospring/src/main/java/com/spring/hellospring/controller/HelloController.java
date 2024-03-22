package com.spring.hellospring.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloController {
    @GetMapping("/hello") //localhost:8080
    public String sayHello(){
        return "Hello Spring Boot"; //response is String,not JSON
    }
}
