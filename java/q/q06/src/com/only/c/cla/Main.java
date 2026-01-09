package com.only.c.cla;

public class Main {				
	public static void main(String[] args) {
		Cat kitty = new Cat(10,"키티","식빵굽기");
		Cat meow = new Cat(1,"미미","츄르먹기");
		
		Cat yaongi = new Cat();
		yaongi.age = 10;
		
		Cat norangi = new Cat(100,"노랑이");
		
		int sum = norangi.add(1, 2);
		System.out.println(sum);
		System.out.println(kitty);
		System.out.println(meow);
	}			
}				