package com.spring.hellospring.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.spring.hellospring.entity.User;
import com.spring.hellospring.service.UserService;

@RestController
@CrossOrigin(origins = "*")//use @CrossOrigin to decide which crossOrigin is allowed
public class UserController {
    @Autowired
    private UserService userService;

    @GetMapping("/users") //static routing path
    public List<User> getAllUsers() {
        return userService.getAllUsers();
    }

    @GetMapping("/user/{id}") //dynamic routing path using ID => use 'id' within '{}' because 'id' path is dynamic(change like 1 2 ect...) and 'user'path is static because it is not changed 
    public User getUserById(@PathVariable long id) { // use '@PathVariable' because get 'id' from using a dynamic variable of path
        return userService.getUserById(id);
    }

    @PostMapping("/user")
    public User creatUser(@RequestBody User user) {//use '@RequestBody' because get user's data from  API request
        return userService.createUser(user);
    }
}
