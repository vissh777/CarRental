package com.example.demo.model;

import com.example.demo.model.Cars;

import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import org.hibernate.annotations.ManyToAny;

@Entity
@Table
public class Register {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int cid;
	String fname;
	String lname;
	String phoneno;
	String address;
	
	
	
	@OneToOne(cascade= CascadeType.ALL)
	@JoinColumn(name="loginid")
	LoginUser loginid;
	
	
	@OneToMany(mappedBy = "register", cascade = CascadeType.ALL)
	Set<Cars> cars;
	

	public Register() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Register(String fname, String lname, String phoneno, String address, LoginUser loginid) {
		
		this.fname = fname;
		this.lname = lname;
		this.phoneno = phoneno;
		this.address = address;
		this.loginid = loginid;
	}

	public int getCid() {
		return cid;
	}

	@Override
	public String toString() {
		return "Register [cid=" + cid + ", fname=" + fname + ", lname=" + lname + ", phoneno=" + phoneno + ", address="
				+ address + ", loginid=" + loginid + "]";
	}

	public String getFname() {
		return fname;
	}

	public void setFname(String fname) {
		this.fname = fname;
	}

	public String getLname() {
		return lname;
	}

	public void setLname(String lname) {
		this.lname = lname;
	}

	public String getPhoneno() {
		return phoneno;
	}

	public void setPhoneno(String phoneno) {
		this.phoneno = phoneno;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public LoginUser getLoginid() {
		return loginid;
	}

	public void setLoginid(LoginUser loginid) {
		this.loginid = loginid;
	}
	
	
	
	
	
}
