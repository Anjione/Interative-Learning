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
@Table(name = "quiz")
@Entity
@NoArgsConstructor
@AllArgsConstructor
public class QuizEntity {
    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "game_id")
    private Long gameId;

    @Column(name = "thumbnail")
    private String thumbnail;

    @Column(name = "description")
    private String description;

    @Column(name = "visible")
    private Integer visible;

    @Column(name = "active")
    private Integer active;

    @Column(name = "create_at")
    private Instant create_at;

    @Column(name = "create_by")
    private String createBy;

    @Column(name = "update_at")
    private Instant updateAt;

    @Column(name = "update_by")
    private String updateBy;

    @OneToMany(fetch = FetchType.LAZY)
    @JoinColumn(name = "quiz_id", referencedColumnName = "id")
    private Set<QuestionEntity> questions;

//    @OneToOne(fetch = FetchType.LAZY)
//    private GameEntity game;
}
