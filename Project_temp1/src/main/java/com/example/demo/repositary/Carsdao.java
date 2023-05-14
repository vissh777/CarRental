package com.example.demo.repositary;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.model.Cars;


@Repository
public interface Carsdao extends JpaRepository<Cars, Integer>{

	@Query("select c from Cars c where id=?1")
	public Cars getmycar(int id);


}
