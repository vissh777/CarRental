package com.example.demo.controllers;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.example.demo.model.Cars;
import com.example.demo.model.Cars_coming;
import com.example.demo.model.Register;
import com.example.demo.model.User;
import com.example.demo.repositary.Carsdao;
import com.example.demo.repositary.Registerdao;
import com.example.demo.service.CarService;



@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class CarsController {
	
	@Autowired
	Registerdao registerdao;

	@Autowired
	Carsdao carsdao;

	
	@Autowired
	CarService  carservice;
	
	
	List <Cars> cars = new ArrayList<Cars>();
	

	
	
	
	
	
	
	@PostMapping("/sell")
	public String  saveCar(@RequestBody Cars_coming c)
	{
		System.out.println("car came through api "+c);
		System.out.println("price is = "+c.getPrice());
		System.out.println("ccid is = "+c.getCcid());
		
		
		 Register r = registerdao.findCustomer(c.getCcid());
		 
		 Cars tosave = new Cars(c.getCarCompany(),c.getColor(),c.getPurchaseDate(),c.getOwners(),c.getTotalRunning(),c.getCarModel(),c.getRegno(),c.getPrice(),c.getCity(),c.getState(),c.getPinNo(),c.getPhoto(),r);
		 
		 
		
		
		carservice.adddata(tosave);
		return "";
	}
	
	
	
	
	
	
	
	
	//backup
	
//	@PostMapping("/sell")
//	public String  saveCar(@RequestBody Cars c)
//	{
//		System.out.println(c.getPrice());
//		System.out.println(c);
//		//System.out.println(c.getPhoto());
//		carservice.adddata(c);
//		return "";
//	}
	
	
	
	@GetMapping("/buy")
	public List<Cars> getBuy()
	{
//		carservice.deleteAll();
		
		
		
//		carsdao.save(new Cars(300,300,"XUV",100));
//		carsdao.save(new Cars(300,300,"Ferrari",20));
//		carsdao.save(new Cars(300,300,"Audi",30));
//		carsdao.save(new Cars(300,300,"Jaguar",40));


		
		return carservice.getAllCars();
		
	}
	

	@GetMapping("/viewdetails/{id}")
	public Cars findPerticularCar(@PathVariable int id)
	{
		System.out.println("car id is- "+id);
//		System.out.println("h1h1h1");
//		System.out.println(carsdao.findById(id));
		 Cars car =  carsdao.getmycar(id);
		System.out.println(car);
		return car;
	}
	
	
	
	
	
	//backup
//	@ResponseBody
//	@GetMapping("/viewdetails/{id}")
//	public Optional<Cars> findPerticularCar(@PathVariable int id)
//	{
//		System.out.println("car id is- "+id);
////		System.out.println("h1h1h1");
////		System.out.println(carsdao.findById(id));
//		return carsdao.findById(id);
//	}
	
	
	
	
	
	
	
	
	// FOR ADMIN*
	
	@GetMapping("/getcars")
	public List<Cars> getAllCars()
	{
		return carsdao.findAll();
	}
	
	
}
