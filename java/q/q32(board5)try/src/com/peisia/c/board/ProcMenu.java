package com.peisia.c.board;

// 🔹 메뉴 화면 출력 담당 import
import com.peisia.c.board.display.Disp;

// 🔹 입력/출력 유틸 import
import com.peisia.util.*;

public class ProcMenu {

    // 🔹 메뉴 루프 실행 (객체 없이 호출)
    static void run() {

        // 🔹 메인 메뉴 출력
        // - 메뉴 항목을 화면에 보여줌

        // 🔹 무한 반복 시작
        // - 종료 명령이 들어오면 반복 종료
        // - break 라벨을 쓸 수도 있음
         loop:
        while(true) {
        	Disp.menuMain();
            // 🔹 사용자 명령 입력 받기
            // - 문자열로 입력 받기
             String cmd = Ci.r("명령");

            // 🔹 입력 값에 따라 기능 실행 분기
            // - switch(cmd)
            switch(cmd) {

                // 🔹 메뉴 1~5: 각각 다른 기능 실행 (여기서 “어떤 기능인지”는 일부러 안 적음)
                case "1":
                     ProcMenuList.run();
                    break;

                case "2":
                     ProcMenuRead.run();
                    break;

                case "3":
                	ProcMenuWrite.run();
                    break;

                case "4":
                     ProcMenuDel.run();
                    break;

                case "5":
                  ProcMenuUpdate.run();
                    break;

                // 🔹 종료 명령 처리
                // - "e" 입력 시 반복문 탈출 + 종료 메시지 출력
                case "e":
                    // 종료 메시지 출력 (Cw 또는 System.out 사용 가능)
                	System.out.println("게시판을 종료합니다.");
                    // 반복문 탈출
                    break loop;

                // 🔹 그 외 입력 처리
                default:
                    // 잘못된 입력 안내 메시지 출력
                	System.out.println("장난X");
                    break;
            }
        }
    }
}
