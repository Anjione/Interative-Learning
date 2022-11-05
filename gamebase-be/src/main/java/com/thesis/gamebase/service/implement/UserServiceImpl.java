package com.thesis.gamebase.service.implement;

import com.thesis.gamebase.domain.UserEntity;
import com.thesis.gamebase.domain.UserRoleEntity;
import com.thesis.gamebase.repository.RoleRepository;
import com.thesis.gamebase.repository.UserRepository;
import com.thesis.gamebase.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Set;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;

    private final RoleRepository roleRepository;

    @Override
    public List<UserEntity> showListUser() {
        return userRepository.findAll();
    }

    //Create User
    @Override
    public UserEntity createUser(UserEntity user, Set<UserRoleEntity> userRole) throws Exception {

        UserEntity newUser = this.userRepository.findByUsername(user.getUsername());
        if (newUser != null) {
            System.out.println("User is already here");
            throw new Exception("User is already present");
        } else {
            //create user
            for (UserRoleEntity ur : userRole) {
                roleRepository.save(ur.getRole());
            }
            user.getUserRole().addAll(userRole);
            newUser = this.userRepository.save(user);
        }
        return newUser;
    }

    @Override
    public UserEntity getUser(String username) {
        return this.userRepository.findByUsername(username);
    }

    @Override
    public void deleteUser(Long userId) {
        this.userRepository.deleteById(userId);
    }
}
