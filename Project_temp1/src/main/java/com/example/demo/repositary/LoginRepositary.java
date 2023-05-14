package com.example.demo.repositary;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.model.LoginUser;

@Repository
public interface LoginRepositary extends JpaRepository<LoginUser,Integer>{


	@Query("select l from LoginUser l where l.username =?1 and l.password=?2")
	public List<LoginUser> checkLogin(String username,String password);
	
}
