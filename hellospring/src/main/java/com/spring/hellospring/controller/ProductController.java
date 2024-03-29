package com.spring.hellospring.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.spring.hellospring.dto.ProductDto;
import com.spring.hellospring.entity.Category;
import com.spring.hellospring.entity.Product;
import com.spring.hellospring.service.CategoryService;
import com.spring.hellospring.service.ProductService;

@RestController
@CrossOrigin(origins = "*")
public class ProductController {

    @Autowired
    private ProductService productService;
    @Autowired
    private CategoryService categoryService;

    @GetMapping("/products")
    public List<Product> getAllProduct() {
        return productService.getAllProducts();
    }

    @GetMapping("/product/{id}")
    public ResponseEntity<Product> getProductById(@PathVariable long id) {
        Product product = productService.getProductById(id);

        if (product == null) {
            return ResponseEntity.status(404).build();
        } else {
            return ResponseEntity.status(200).body(product);
        }
    }

    @PostMapping("/product")
    public ResponseEntity<Product> createProduct(@RequestBody ProductDto productDto) {
        

        Product product = new Product();

        product.setName(productDto.getName());
        product.setPrice(productDto.getPrice());
        product.setQuantity(productDto.getQuantity());
        product.setCategory(categoryService.getCategoryById(productDto.getCategory_id()));
     
        Product createProduct = productService.createProduct(product);
        return ResponseEntity.status(201).body(createProduct);


    }
}
