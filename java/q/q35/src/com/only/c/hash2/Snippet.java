package com.only.c.hash2;

import java.util.*;

public class Snippet {
    // 1. 코드가 실행될 수 있도록 main 메서드를 추가해야 합니다.
    public static void main(String[] args) {
        
        HashSet<String> hs = new HashSet<>();
        hs.add("고양이");
        hs.add("고양이"); // 중복이라 무시됨
        hs.add("개");
        
        int size = hs.size();
        System.out.println("현재 크기: " + size);
        
        // 2. Iterator 사용
        Iterator<String> it = hs.iterator();
        System.out.println("-while, next() 으로 꺼내기-");
        while(it.hasNext()) {
            String s1 = it.next();
            System.out.println(s1);
        }
    }
}