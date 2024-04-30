package com.spring.hellospring.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.spring.hellospring.entity.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

}
