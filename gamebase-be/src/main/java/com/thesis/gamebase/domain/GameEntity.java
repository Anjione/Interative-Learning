package com.thesis.gamebase.domain;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import javax.validation.Valid;

@Data
@Valid
@Table(name = "game")
@Entity
@NoArgsConstructor
@AllArgsConstructor
public class GameEntity {
    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "quiz_id")
    private Long quiz_id;

    @Column(name = "game_name")
    private String gameName;
}
