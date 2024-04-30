package com.spring.hellospring.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.spring.hellospring.entity.Order;


@Service
public interface OrderService {
      List<Order> getAllOrder();
      Order getOrderById(long id);
      Order createOrder(Order order);
      Order addProductTOrder(long order_id, long product_id, int quantity);
}
