package com.example.demo.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Register;
import com.example.demo.repositary.LoginRepositary;
import com.example.demo.repositary.Registerdao;
import com.example.demo.service.LoginService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class LoginController {

	
//	@Autowired
//	Registerdao regdao;
	
//	@Autowired
//	LoginRepositary loginrepo;
	
	@Autowired
	LoginService lservice;
	
	@Autowired
	Registerdao registerdao;
	
	@GetMapping("/login")
	public Object registerdata(@RequestParam("username") String username,@RequestParam("password") String password)
	{
	
		System.out.println("in login");
//		if(username.equals("admin"))
//		{
//			Register r = new Register()
//		}
		System.out.println("usern "+username+" pass "+password);
		System.out.println(username.getClass(). getSimpleName());
		
		Object registerObject = lservice.checkLogin(username, password);
		System.out.println("registerObject --> "+registerObject);
//		

		return registerObject;
	}
	
	
}
