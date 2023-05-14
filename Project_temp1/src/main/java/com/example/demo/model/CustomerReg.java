package com.example.demo.model;

public class CustomerReg {

	
	String fname;
	String lname;
	String username;
	String password;
	String adress;
	String phoneno;
	String usertype;
	public CustomerReg() {
		super();
		// TODO Auto-generated constructor stub
	}
	public CustomerReg(String fname, String lname, String username, String password, String adress, String phoneno,
			String usertype) {
		super();
		this.fname = fname;
		this.lname = lname;
		this.username = username;
		this.password = password;
		this.adress = adress;
		this.phoneno = phoneno;
		this.usertype = usertype;
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
	public String getAdress() {
		return adress;
	}
	public void setAdress(String adress) {
		this.adress = adress;
	}
	public String getPhoneno() {
		return phoneno;
	}
	public void setPhoneno(String phoneno) {
		this.phoneno = phoneno;
	}
	public String getUsertype() {
		return usertype;
	}
	public void setUsertype(String usertype) {
		this.usertype = usertype;
	}
	@Override
	public String toString() {
		return "CustomerReg [fname=" + fname + ", lname=" + lname + ", username=" + username + ", password=" + password
				+ ", adress=" + adress + ", phoneno=" + phoneno + ", usertype=" + usertype + "]";
	}
	
	
	
	
}
