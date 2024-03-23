package com.spring.hellospring.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.spring.hellospring.entity.User;
import com.spring.hellospring.repository.UserRepository;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public List<User> getAllUsers() {
        
       return userRepository.findAll();
    }

    @Override
    public User getUserById(long id) {

        return userRepository.findById(id).orElse(null);//use '.orElse(null)' because sometimes we can send id  but it is not in the user table
    }

    @Override
    public User createUser(User user) {

      return userRepository.save(user);
    }

} 
    

