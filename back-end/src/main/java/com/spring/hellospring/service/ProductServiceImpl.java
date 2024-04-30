package com.spring.hellospring.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.spring.hellospring.entity.Product;
import com.spring.hellospring.repository.ProductRepository;

@Service
public class ProductServiceImpl implements ProductService {

   @Autowired
   private ProductRepository productRepository;

   @Override
   public List<Product> getAllProducts() {
      return productRepository.findAll();
   }

   @Override
   public Product getProductById(long id) {
      return productRepository.findById(id).orElse(null);
   }

   @Override
   public Product createProduct(Product product) {
      return productRepository.save(product);
   }

   @Override
   public Product updateProduct(long id, Product product) {
    Product exisProduct = productRepository.findById(id).orElse(null);

    if (exisProduct != null) {
      exisProduct.setName(product.getName());
      exisProduct.setPrice(product.getPrice());
      exisProduct.setQuantity(product.getQuantity());
      exisProduct.setCategory(product.getCategory());
      return productRepository.save(exisProduct);
    }
    return null;
   }

   @Override
   public void deleteProduct(long id) {
     productRepository.deleteById(id);
   }

}
