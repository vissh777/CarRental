package com.example.demo.repositary;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.model.LoginUser;
import com.example.demo.model.Register;

@Repository
public interface Registerdao extends CrudRepository<Register, Integer>{


	@Query("select c from Register c where loginid = ?1")
	public Register getCustomer(LoginUser l);
	
	
	@Query("select c from Register c where cid = ?1")
	public Register findCustomer(int l);
	
	
	@Query("select c from Register c")
	public List<Register> getAll();
	
}
