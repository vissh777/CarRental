package com.example.demo.service;

import com.example.demo.model.Cars;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Cars;
import com.example.demo.repositary.Carsdao;

@Service
public class CarService {

	
@Autowired
Carsdao cardao;

List <Cars> cars = new ArrayList<Cars>();


	public Cars adddata(Cars c)
	{
		return cardao.save(c);
	
	}


	public List<Cars> getAllCars()
	{
		return cardao.findAll();
	}
	
	
}