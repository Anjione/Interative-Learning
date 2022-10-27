package com.thesis.gamebase.controller;

import com.thesis.gamebase.domain.QuestionEntity;
import com.thesis.gamebase.repository.QuestionRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping
@RequiredArgsConstructor
public class QuestionController {
    private final QuestionRepository questionRepository;

    @GetMapping("/show-answer")
    public List<QuestionEntity> getQuestion(){
        return questionRepository.findAll();
    }
}
