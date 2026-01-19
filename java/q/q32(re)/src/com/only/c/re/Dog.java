package com.only.c.re;

public class Dog {
	Cat wife = null;
	int age;
	String name;
	public Dog(int age, String name) {
		this.age = age;
		this.name = name;
	}
	
	void isMarraged() {
		if(wife != null) {
			System.out.println("마누라 있음");
			System.out.println(wife.name);
			System.out.println(wife.age);
		} else {
			System.out.println("총각");
		}
	}
}
