package com.thesis.gamebase.repository;

import com.thesis.gamebase.domain.QuestionEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface QuestionRepository extends JpaRepository<QuestionEntity, Long> {
}
