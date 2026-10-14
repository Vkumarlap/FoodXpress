package com.javaminds.backendd.services;

import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.stereotype.Service;

import com.javaminds.backendd.models.Users;
import com.javaminds.backendd.repositories.UsersRepo;





@Service 
public class UserService {
    @Autowired 
    UsersRepo repo;

    @Autowired 
   AuthenticationManager authenticationManager;

 private BCryptPasswordEncoder encoder=new BCryptPasswordEncoder(12);

public Users addUser(Users user){

   user.setPassword(encoder.encode(user.getPassword()));

   return repo.save(user);

}






    public String loginService(Users user) {

        // Integer Id=user.getId();
        // String username=user.getUsername();
        // String password=user.getPassword();

        // DemoUsers DBUser=repo.findById(Id);

        // String DBusername=DBUser.getUsername();
        // String DBpassword=DBUser.getPassword();


        
        
        // System.out.println("//////////////////// passworddd"+password);
        // System.out.println("//////////////////// username"+username);

        // System.out.println("//////////////////// DBpassworddd"+Id);
        // System.out.println("//////////////////// DBpassworddd"+DBpassword);
        // System.out.println("//////////////////// DBusername"+DBusername);

        // if(DBusername.equals(username) &&DBpassword.equals(password))
        //     return "Login Succesfull";
        // else 
        //     return "failed";


        


         Authentication authentication =
                authenticationManager.authenticate(
                        new UsernamePasswordAuthenticationToken(
                                user.getUsername(),
                                user.getPassword()
                        )
                );

        if (authentication.isAuthenticated()) {
                
            return "login Succesfull";
        }

        return "failed";
        
        
    }


    
}
