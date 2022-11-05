package com.thesis.gamebase.domain;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import javax.validation.Valid;

@Data
@Valid
@Table(name = "answer")
@Entity
@NoArgsConstructor
@AllArgsConstructor
public class AnswerEntity {
    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    @Column(name = "question_id")
    private int questionId;

    @Column(name = "answer_name")
    private String answerName;

    @Column(name = "correct_answer")
    private int correctAnswer;
}
