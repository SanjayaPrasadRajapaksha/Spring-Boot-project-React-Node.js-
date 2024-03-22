package com.spring.hellospring.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.spring.hellospring.entity.User;

@Service
public interface UserService {
    List<User> getAllUsers();
}
