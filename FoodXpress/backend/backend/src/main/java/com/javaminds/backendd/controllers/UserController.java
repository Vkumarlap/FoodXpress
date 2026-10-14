package com.javaminds.backendd.controllers;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.javaminds.backendd.models.Users;
import com.javaminds.backendd.services.UserService;

//





@RestController 
@RequestMapping("/user")
@CrossOrigin 
public class UserController {

@Autowired 
 UserService serv;   

@PostMapping("/login")    
public String login(@RequestBody Users user){

    return serv.loginService(user);
}

@PostMapping("/register")
public Users register(@RequestBody  Users user)
{      System.out.println("Reached here");
      return serv.addUser(user);
}
}