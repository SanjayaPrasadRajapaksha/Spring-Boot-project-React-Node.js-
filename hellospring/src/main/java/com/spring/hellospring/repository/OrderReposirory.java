package com.spring.hellospring.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.spring.hellospring.entity.Order;

@Repository
public interface OrderReposirory extends JpaRepository<Order,Long>{
    
}
