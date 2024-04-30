package com.spring.hellospring.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.spring.hellospring.entity.Category;

@Service
public interface CategoryService {

    List<Category> getAllCategory();
    Category getCategoryById(long id);
    Category createCategory(Category category);
    Category UpdateCategory(long id ,Category category);
    void deleteCategory(long id);

    
} 