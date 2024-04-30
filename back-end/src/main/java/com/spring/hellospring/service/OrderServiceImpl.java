package com.spring.hellospring.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.spring.hellospring.entity.Order;
import com.spring.hellospring.entity.Product;
import com.spring.hellospring.repository.OrderReposirory;
import com.spring.hellospring.repository.ProductRepository;

@Service
public class OrderServiceImpl implements OrderService {

    @Autowired
    private OrderReposirory orderReposirory;
    @Autowired
    private ProductRepository productRepository;

    @Override
    public List<Order> getAllOrder() {
        return orderReposirory.findAll();
    }

    @Override
    public Order getOrderById(long id) {
        return orderReposirory.findById(id).orElse(null);
    }

    @Override
    public Order createOrder(Order order) {
        return orderReposirory.save(order);
    }

    @Override
    public Order addProductTOrder(long order_id, long product_id, int quantity) {
        Order order = orderReposirory.findById(order_id).orElse(null);

        if (order == null) {
            return null;
        }

        Product product = productRepository.findById(product_id).orElse(null);

        if (product == null) {
            return null;
        }

        order.getOrderedProducts().add(product);

        order.setTotalPrice(order.getTotalPrice() + product.getPrice() * quantity);

        return orderReposirory.save(order);

    }

    @Override
    public Order removeProductFromOrder(long order_id, long product_id) {
      Order order = orderReposirory.findById(order_id).orElse(null);

      if (order == null) {
          return null;
      }

      Product product = productRepository.findById(product_id).orElse(null);

      if (product == null) {
          return null;
      }

      order.getOrderedProducts().remove(product);

      order.setTotalPrice(order.getTotalPrice() - product.getPrice());

      return orderReposirory.save(order);


    }

    @Override
    public void deleteOrder(long order_id) {

        orderReposirory.deleteById(order_id);
      
    }

}
