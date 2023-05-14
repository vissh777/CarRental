package com.example.demo.controllers;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Cars;
import com.example.demo.model.LoginUser;
import com.example.demo.model.Register;
import com.example.demo.model.User;
import com.example.demo.repositary.Carsdao;
import com.example.demo.repositary.LoginRepositary;
import com.example.demo.repositary.Registerdao;
import com.example.demo.repositary.Userdao;


@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class Mycontroller {

	// delete all user releated
//	@Autowired
//	Userdao userdao;
//	
//	List <User> li = new ArrayList<User>();
	
	
	
	@Autowired
	Registerdao registerdao;
	
	@Autowired
	LoginRepositary loginRepositary;
	
	
	//for admin work
	
	@RequestMapping("/users")
	public List<Register> getUsers()
	{
//		userdao.deleteAll();
		
	
		System.out.println("users called **** ");
		
//		userdao.save(new User("ketan", "shendge", "ktn.shendge", "abc"));
//		userdao.save(new User("rohan", "shendge", "rohan.shendge", "1234"));
//		userdao.save(new User("rushi", "doke", "rsh.shendge", "ktyym"));
//		userdao.save(new User("ashish", "shendge", "ashish.shendge", "hdkdd"));


		
		return registerdao.getAll();
		
	}
	
	
	
	//to delete in admin
	
	
	
	
	@DeleteMapping("/users/{cid}")
	public String findPerticularCar(@PathVariable int cid)
	{
		System.out.println("delete called");
		System.out.println("car id is- "+cid);
//		System.out.println("h1h1h1");
//		System.out.println(carsdao.findById(id));
		
		registerdao.deleteById(cid);
//		loginRepositary.deleteById(cid);
		
		
		 
		
		return "deleted ";
	}
	
	
	
	
	
	
	// delete this
	
		
//	@RequestMapping("/")
//	@ResponseBody
//	public String f()
//	{
//		
//		return "<h1>Hello</h1>";
//	}
	
//	@RequestMapping("/hi")
//	@ResponseBody
//	public String fnhi()
//	{
//		return "hhoii";
//	}
	
	
	
}
