package com.only.c.javamemory;

public class cat {
    // 1. 필드 (속성): 고양이의 이름을 저장할 변수
    // Main에서 직접 접근(kitty.name)하기 위해 public으로 설정했습니다.
    public String name;

    // 2. 기본 생성자
    // 매개변수가 없는 생성자입니다. new Cat() 호출 시 사용됩니다.
    public cat() {
    }

    // 3. 매개변수가 있는 생성자 (선택 사항)
    // 생성과 동시에 이름을 지어주고 싶을 때 사용합니다.
    public cat(String name) {
        this.name = name;
    }

    // 4. 메소드 (행동)
    // 고양이가 소리를 내는 기능을 추가해 볼 수 있습니다.
    public void meow() {
        System.out.println(name + ": 야옹~");
    }
}