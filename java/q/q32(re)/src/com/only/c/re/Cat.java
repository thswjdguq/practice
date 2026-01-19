package com.only.c.re;

public class Cat {
	Dog husband = null;
	int age;
	public String name;
	
	public Cat() {
		
	}
	public Cat(int age, String name) {
		this.age = age;
		this.name = name;
	}
	
	void isMarraged() {
		if(husband != null) {
			System.out.println("남편 있음");
		} else {
			System.out.println("처녀");
		}
	}
}