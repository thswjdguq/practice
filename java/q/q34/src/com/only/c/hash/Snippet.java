package com.only.c.hash;

import java.util.*;

public class Snippet {
    // 실행을 위해 main 메서드가 필요합니다.
    public static void main(String[] args) {
        
        HashSet<String> hs = new HashSet<>();
        
        // 데이터 추가
        hs.add("개");
        hs.add("고양이");
        hs.add("고양이"); // 중복된 값은 저장되지 않음

        // 1. 데이터 유무 확인
        if (hs.isEmpty()) {
            System.out.println("데이터 없음");
        } else {
            System.out.println("데이터 있음");
        }

        // 2. 특정 데이터 포함 여부
        if (hs.contains("고양이")) {
            System.out.println("이 안에 고양이 있다");
        }

        // 3. 크기 확인
        System.out.println("크기: " + hs.size());

        // 4. 전체 출력 (향상된 for문)
        System.out.println("======= 다 출력(순서는 보장 안됨) =======");
        for (String s : hs) {
            System.out.println(s);
        }

        // 5. Iterator를 이용한 출력 (hs1을 hs로 수정)
        System.out.println("======= Iterator로 꺼내기 =======");
        Iterator<String> it = hs.iterator(); // hs1 -> hs 로 수정
        while (it.hasNext()) {
            String value = it.next();
            System.out.println(value);
        }
    }
}	