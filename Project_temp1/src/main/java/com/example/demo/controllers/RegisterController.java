package com.example.demo.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.CustomerReg;
import com.example.demo.model.LoginUser;
import com.example.demo.model.Register;
import com.example.demo.repositary.Registerdao;
import com.example.demo.service.LoginService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class RegisterController {

	@Autowired
	Registerdao regdao;
	
	@Autowired
	LoginService lservice;
	
	@PostMapping("/register")
	public Register registerdata(@RequestBody CustomerReg c)
	{
		System.out.println(c);
		String usertype = c.getUsertype();
		LoginUser l = new LoginUser(c.getUsername(),c.getPassword(),usertype);
		System.out.println("login user -- "+l);
		LoginUser insert = lservice.addData(l);
		
		Register cus = new Register(c.getFname(),c.getLname(),c.getPhoneno(),c.getAdress(),insert);
		System.out.println("cus = "+cus);

		return regdao.save(cus);
		
//		
//		return "";
	}
	
	
	
	
	
}
