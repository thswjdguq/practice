package com.only.c.hash;

import java.util.HashMap;

public class Main1 {
	public static void main(String[] args) {
		//음식 리스트를 등록
		//음식을 검색
		HashMap<String,Food1> foods = new HashMap<>();
		
		Food1 f1 = new Food1("라면",true,3500);
		Food1 f2 = new Food1("냉면",false,12000);
		
		foods.put("라면", f1);
		foods.put("냉면", f2);
	
		Food1 selectFood = foods.get("냉면");
		System.out.println("주문하신 음식은:"+selectFood.name);
		System.out.println("hot/cold 는:"+selectFood.isHot);
		System.out.println("가격은 :"+selectFood.price);
	}
}

