package com.only.c.re;

public class Main {
	public static void main(String[] args) {
		Dog d1 = new Dog(40,"개1");
		Dog d2 = new Dog(40,"개2");
		
		Cat c1 = new Cat(40,"고1");
		Cat c2 = new Cat(40,"고2");
		
		Marriage m = new Marriage();
		m.matching(d1, c2);
		
		d1.isMarraged();
		d2.isMarraged();
		c1.isMarraged();
		c2.isMarraged();
	}
}

