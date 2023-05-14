package com.example.demo.model;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import org.hibernate.annotations.ManyToAny;

@Entity
public class LoginUser{

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int loginid;
	
	String username;
	String password;
	String userType;

	
	public LoginUser() {
		super();
		// TODO Auto-generated constructor stub
	}
	public LoginUser( String username, String password, String userType) {
		
		this.username = username;
		this.password = password;
		this.userType = userType;
	}
	public int getLoginid() {
		return loginid;
	}
	
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getUserType() {
		return userType;
	}
	public void setUserType(String userType) {
		this.userType = userType;
	}
	@Override
	public String toString() {
		return "LoginUser [loginid=" + loginid + ", username=" + username + ", password=" + password + ", userType="
				+ userType + "]";
	}
	
	
	
	
	
}
