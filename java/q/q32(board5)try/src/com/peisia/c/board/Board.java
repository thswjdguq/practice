package com.peisia.c.board;

// 🔹 데이터 관련 클래스 import
// import ???
import com.peisia.c.board.data.Data;
// 🔹 화면 출력 담당 클래스 import
 import com.peisia.c.board.display.Disp;

public class Board {

    // 🔹 프로그램 버전 상수
     public static final String VERSION = "v0.0.5";

    // 🔹 프로그램 제목 상수
    // - VERSION을 포함해서 문자열 구성
     public static final String TITLE = "게시판 " + VERSION;

    // 🔹 게시판 프로그램 실행 메소드
    // - 외부(Main)에서 호출됨
    public void run() {

        // 🔹 데이터 초기화
        // - 게시글 리스트 생성
        // - 필요 시 샘플 데이터 로드
         Data.loadData();

        // 🔹 타이틀 화면 출력
         Disp.title();

        // 🔹 메뉴 처리 시작
        // - while문 + switch-case는 ProcMenu에 있음
         ProcMenu.run();
    }
}
