package com.thesis.gamebase.service;

import com.thesis.gamebase.domain.UserEntity;
import com.thesis.gamebase.domain.UserRoleEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Set;

@Service
public interface UserService {

    List<UserEntity> showListUser();
    UserEntity createUser(UserEntity user, Set<UserRoleEntity> userRole) throws Exception;
    UserEntity getUser(String username);
    void deleteUser(Long id);
}
