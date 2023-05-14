package com.example.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.LoginUser;
import com.example.demo.repositary.LoginRepositary;
import com.example.demo.repositary.Registerdao;

@Service
public class LoginService {

	@Autowired
	LoginRepositary  lrepo;
	
	

	@Autowired
	Registerdao crepo;
	
	public LoginUser addData(LoginUser l)
	{
		return lrepo.save(l);
	}
	
	public Object checkLogin(String username,String password)
	{
		
		LoginUser l = lrepo.checkLogin(username, password).get(0);
		String role =  l.getUserType();
		
		Object o = null;
		if(role.equals("buyer"))
		{
			o = crepo.getCustomer(l);
		}
//		else if(role.equals("seller"))
//		{
//			o = prepo.getPetOwner(l);
//		}
		else if(role.equals("admin"))
		{
			o = crepo.getCustomer(l);
		}
		return o;
		
	}
	
	
}
