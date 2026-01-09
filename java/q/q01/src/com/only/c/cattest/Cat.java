package com.only.c.cattest;

public class Cat {

	
	String name;	// 문자열 변수는 클래스 String 형으로 지정해야함.
 
	
	int age;		
	long id;		
	float inch = 3.5f;	
	double pi = 3.141592d; 
	boolean isMine = false;	 
	
	////멤버함수들
	void info() {
		String s = "고양이 이름은 " + name + "이고 나이는 " + age + " 살 이예용";
		System.out.println(s);
	}
}