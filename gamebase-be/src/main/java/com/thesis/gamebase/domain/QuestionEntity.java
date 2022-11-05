package com.thesis.gamebase.domain;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import javax.validation.Valid;
import java.time.Instant;
import java.util.Set;

@Data
@Valid
@Table(name = "question")
@Entity
@NoArgsConstructor
@AllArgsConstructor
public class QuestionEntity {
    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "quiz_id")
    private Long quizId;

    @Column(name = "question_name")
    private String questionName;

    @Column(name = "question_picture")
    private String questionPicture;

    @Column(name = "create_at")
    private Instant create_at;

    @Column(name = "create_by")
    private String createBy;

    @Column(name = "update_at")
    private Instant updateAt;

    @Column(name = "update_by")
    private String updateBy;

    @OneToMany(fetch = FetchType.LAZY)
    @JoinColumn(name = "question_id", referencedColumnName = "id")
    private Set<AnswerEntity> answers;
}
