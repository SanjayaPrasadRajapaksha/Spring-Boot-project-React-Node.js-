package com.spring.hellospring.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.spring.hellospring.entity.Product;

@Service
public interface ProductService {

    List<Product> getAllProducts();

    Product getProductById(long id);

    Product createProduct(Product product);

    Product updateProduct(long id, Product product);
}
