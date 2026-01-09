package com.only.c.cla;

public class Cat {
    int age;
    String name;
    String hobby; // Main에서 사용하신 '행동' 데이터가 여기 저장되겠네요!

    void x() {}
    
    int y() {
        return 100;
    }
    
    int add(int a, int b) {
        int sum = a + b;
        return sum;
    }

    // 생성자들
    public Cat() {}
    
    public Cat(int age, String name, String hobby) {
        this.age = age;
        this.name = name;
        this.hobby = hobby;
    }
    
    public Cat(int age, String name) {
        this.age = age;
        this.name = name;
    }

    // --- 여기에 이 내용을 추가하세요! ---
    @Override
    public String toString() {
        return "고양이 [이름: " + name + ", 나이: " + age + ", 취미: " + hobby + "]";
    }
}