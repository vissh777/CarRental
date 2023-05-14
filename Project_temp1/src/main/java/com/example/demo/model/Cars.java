package com.example.demo.model;

import java.time.LocalDate;

import javax.persistence.CascadeType;
import javax.persistence.Column;
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
public class Cars {
	@Id //PK 
	@GeneratedValue(strategy = GenerationType.IDENTITY) //strategy = AUTO will be replaced : auto_increment
	@Column(name = "id")
	private Integer carId;
	@Column(name="company",nullable = true)
	private String carCompany;

	@Column( name = "color")
	private String color;
	
	@Column(name = "purchase_date")
	private LocalDate purchaseDate;
	
	
	@Column
	private int owners;
	
	@Column(name = "total_running")
	private Integer totalRunning;
	
	
	@Column
	private String carModel;
	
	
	@Column(name = "reg_no")
	private String regno;
	
	@Column
	private double price;
	
	
	@Column(name = "city")
	private String city;
	
	

	@Column(name = "state")
	private String state;
	
	

	@Column(name = "pinNo")
	private String pinNo;
	
	@Column(name = "photo")
	private String photo;
	
	@ManyToOne()
	@JoinColumn(name = "cid")
	Register register;

	public Cars() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Cars(String carCompany, String color, LocalDate purchaseDate, int owners,
			Integer totalRunning, String carModel, String regno, double price, String city, String state, String pinNo,
			String photo, Register register) {
		super();
		this.carId = carId;
		this.carCompany = carCompany;
		this.color = color;
		this.purchaseDate = purchaseDate;
		this.owners = owners;
		this.totalRunning = totalRunning;
		this.carModel = carModel;
		this.regno = regno;
		this.price = price;
		this.city = city;
		this.state = state;
		this.pinNo = pinNo;
		this.photo = photo;
		this.register = register;
	}

	public Integer getCarId() {
		return carId;
	}

	public void setCarId(Integer carId) {
		this.carId = carId;
	}

	public String getCarCompany() {
		return carCompany;
	}

	public void setCarCompany(String carCompany) {
		this.carCompany = carCompany;
	}

	public String getColor() {
		return color;
	}

	public void setColor(String color) {
		this.color = color;
	}

	public LocalDate getPurchaseDate() {
		return purchaseDate;
	}

	public void setPurchaseDate(LocalDate purchaseDate) {
		this.purchaseDate = purchaseDate;
	}

	public int getOwners() {
		return owners;
	}

	public void setOwners(int owners) {
		this.owners = owners;
	}

	public Integer getTotalRunning() {
		return totalRunning;
	}

	public void setTotalRunning(Integer totalRunning) {
		this.totalRunning = totalRunning;
	}

	public String getCarModel() {
		return carModel;
	}

	public void setCarModel(String carModel) {
		this.carModel = carModel;
	}

	public String getRegno() {
		return regno;
	}

	public void setRegno(String regno) {
		this.regno = regno;
	}

	public double getPrice() {
		return price;
	}

	public void setPrice(double price) {
		this.price = price;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getState() {
		return state;
	}

	public void setState(String state) {
		this.state = state;
	}

	public String getPinNo() {
		return pinNo;
	}

	public void setPinNo(String pinNo) {
		this.pinNo = pinNo;
	}

	public String getPhoto() {
		return photo;
	}

	public void setPhoto(String photo) {
		this.photo = photo;
	}

	public Register getRegister() {
		return register;
	}

	public void setRegister(Register register) {
		this.register = register;
	}

	@Override
	public String toString() {
		return "Cars [carId=" + carId + ", carCompany=" + carCompany + ", color=" + color + ", purchaseDate="
				+ purchaseDate + ", owners=" + owners + ", totalRunning=" + totalRunning + ", carModel=" + carModel
				+ ", regno=" + regno + ", price=" + price + ", city=" + city + ", state=" + state + ", pinNo=" + pinNo
				+ ", photo=" + photo + ", register=" + register + "]";
	}

	
	
	
	
	
	
	
	
	
}
