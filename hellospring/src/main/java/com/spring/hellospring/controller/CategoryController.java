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

import com.spring.hellospring.entity.Category;
import com.spring.hellospring.service.CategoryService;

@RestController
@CrossOrigin(origins = "*")
public class CategoryController {

    @Autowired
    private CategoryService categoryService;

    @GetMapping("/categories")
    public List<Category> getAllCategory() {
        return categoryService.getAllCategory();
    }

    @GetMapping("/category/{id}")
    public ResponseEntity<Category> getCategoryById(@PathVariable long id) {
        Category category = categoryService.getCategoryById(id);

        if (category == null) {
                return ResponseEntity.status(404).build();
        }else{
            return ResponseEntity.status(200).body(category);
        }
    }

    @PostMapping("/category")
    public ResponseEntity<Category> createCategory(@RequestBody Category category){

        Category createCategory =  categoryService.createCategory(category);

        return ResponseEntity.status(201).body(createCategory);
    }

}
