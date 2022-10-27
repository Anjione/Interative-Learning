package com.thesis.gamebase.controller;

import com.thesis.gamebase.domain.UserEntity;
import com.thesis.gamebase.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping
@RequiredArgsConstructor
public class UserController {
    private final UserRepository repository;

    @GetMapping("show-list")
    public List<UserEntity> getUser(){
        return repository.findAll();
    }
}
