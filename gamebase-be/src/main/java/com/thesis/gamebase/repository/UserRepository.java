package com.thesis.gamebase.repository;

import com.thesis.gamebase.domain.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<UserEntity, Long> {
    public UserEntity findByUsername(String username);
    void deleteById(Long id);
}
