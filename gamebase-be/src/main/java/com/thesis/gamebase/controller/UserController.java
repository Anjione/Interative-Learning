package com.thesis.gamebase.controller;

import com.thesis.gamebase.domain.RoleEntity;
import com.thesis.gamebase.domain.UserEntity;
import com.thesis.gamebase.domain.UserRoleEntity;
import com.thesis.gamebase.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

@RestController
@CrossOrigin("*")
@RequestMapping("api/user/")
@RequiredArgsConstructor
public class UserController {
    private final UserService userService;

    @GetMapping("show-list")
    public List<UserEntity> getAllUser(){
        return userService.showListUser();
    }

    @PostMapping("create")
    public UserEntity createUser(@RequestBody UserEntity user) throws Exception {

        Set<UserRoleEntity> roles = new HashSet<>();

        user.setActive(1);
        user.setVisible(1);

        RoleEntity role = new RoleEntity();
        role.setRoleName("ADMIN");

        UserRoleEntity userRole = new UserRoleEntity();
        userRole.setUsers(user);
        userRole.setRole(role);

        roles.add(userRole);
        return this.userService.createUser(user, roles);
    }

    @GetMapping("{username}")
    public UserEntity getDetailUser(@PathVariable("username") String username){
        return this.userService.getUser(username);
    }

    @DeleteMapping("{id}")
    public void deleteUser(@PathVariable("id") Long id){
        this.userService.deleteUser(id);
    }
}
