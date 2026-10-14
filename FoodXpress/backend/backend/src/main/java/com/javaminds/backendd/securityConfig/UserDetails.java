package com.javaminds.backendd.securityConfig;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.javaminds.backendd.models.Users;
import com.javaminds.backendd.repositories.UsersRepo;
import com.javaminds.backendd.securityConfig.UserPrinciples;


@Service
public class UserDetails implements UserDetailsService {

   @Autowired
   UsersRepo repo;

    @Override
    public org.springframework.security.core.userdetails.UserDetails loadUserByUsername(String username) throws UsernameNotFoundException{
          
      Users user=repo.findByusername(username);
      if(user ==null){
        throw new UsernameNotFoundException(username);
      }

      return  new UserPrinciples(user);

    }

    
}