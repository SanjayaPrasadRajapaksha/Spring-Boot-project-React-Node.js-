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

    return userRepository.findById(id).orElse(null);
  }

  @Override
  public User createUser(User user) {

    return userRepository.save(user);
  }

  @Override
  public User updateUser(long id, User user) {

    User existUser = userRepository.findById(id).orElse(null);

    if (existUser != null) {
      existUser.setUsername(user.getUsername());
      existUser.setPassword(user.getPassword());
      existUser.setEmail(user.getEmail());
      return userRepository.save(existUser);
    } else {
      return null;
    }

  }

  @Override
  public void deleteUser(long id) {
    userRepository.deleteById(id);
  }
}
