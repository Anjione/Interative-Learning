package com.thesis.gamebase.controller;

import com.thesis.gamebase.domain.QuizEntity;
import com.thesis.gamebase.repository.QuizRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping
@RequiredArgsConstructor
public class QuizController {
    private final QuizRepository quizRepository;

    @GetMapping("/show-quiz")
    public List<QuizEntity> getQuiz() {
        return quizRepository.findAll();
    }
}
