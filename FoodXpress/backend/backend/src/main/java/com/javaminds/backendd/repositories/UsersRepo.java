package com.javaminds.backendd.repositories;

import org.springframework.data.repository.Repository;

import com.javaminds.backendd.models.Users;







public interface UsersRepo extends Repository<Users,Integer> {


     
    public Users findById(Integer id);

    public Users findByusername(String username);

    public Users save(Users user);
}
