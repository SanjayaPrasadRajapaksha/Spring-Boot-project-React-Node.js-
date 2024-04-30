package com.spring.hellospring.controller;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.spring.hellospring.dto.OrderedProductDto;

import com.spring.hellospring.entity.Order;

import com.spring.hellospring.service.OrderService;

@RestController
@CrossOrigin(origins = "*")
public class OrderController {

    @Autowired
    private OrderService orderService;

    @GetMapping("/orders")
    public List<Order> getAllOrder() {
        return orderService.getAllOrder();
    }

    @GetMapping("/orders/{id}")
    public ResponseEntity<Order> getOrderById(@PathVariable long id) {
        Order order = orderService.getOrderById(id);

        if (order == null) {
            return ResponseEntity.status(404).build();
        } else {
            return ResponseEntity.status(200).body(order);
        }

    }

    @PostMapping("/order")
    public ResponseEntity<Order> createOrder() {
        Order Order = new Order();

        Order.setTotalPrice(0.0);
        Order.setOrderDate(LocalDateTime.now());
        Order.setOrderedProducts(null);

        Order createOrder = orderService.createOrder(Order);
        return ResponseEntity.status(201).body(createOrder);

    }

    @PostMapping("/order/{id}/addProduct")

    public Order addPOrderProduct(@PathVariable long id, @RequestBody OrderedProductDto orderedProductDto) {

        return orderService.addProductTOrder(id, orderedProductDto.getProduct_id(), orderedProductDto.getQuantity());
    }

    @DeleteMapping("/order/{order_id}/product/{product_id}")
    public void removeProductFromOrder(@PathVariable long order_id, @PathVariable long product_id) {
        orderService.removeProductFromOrder(order_id, product_id);
    }

    @DeleteMapping("/order/{id}")
    public void deleteOrder(@PathVariable long id) {
        orderService.deleteOrder(id);
    }

}
