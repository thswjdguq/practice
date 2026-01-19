package com.peisia.c.board;

// 게시글 데이터가 저장된 리스트를 사용하기 위한 import
import com.peisia.c.board.data.Data;
// 게시글 하나를 표현하는 클래스 import
import com.peisia.c.board.data.Post;
// 화면 출력 관련 클래스 import
import com.peisia.c.board.display.Disp;
// 입력을 받기 위한 유틸 import
import com.peisia.util.Ci;
// 출력 유틸 import
import com.peisia.util.Cw;
public class ProcMenuRead {

    // 게시글 상세보기 기능
    // 메뉴에서 "글 읽기"를 선택했을 때 실행됨
    static void run() {

        // 현재 실행 중인 기능이 "읽기"임을 사용자에게 알림
    	Cw.wn("읽기입니다.");
        // 사용자로부터 읽고 싶은 글 번호를 입력받음
        // - 문자열 형태로 입력받음
    	String cmd=Ci.r("읽을 글번호");
        // 게시글 목록 전체를 순회하면서
        // 사용자가 입력한 번호와 일치하는 게시글을 찾음
    	for(Post p:Data.posts) {
    		if(cmd.equals(p.instanceNo+""	)) {
    			p.infoForRead();
    		}
    	}
            // 입력한 글 번호와 현재 게시글의 번호가 같은지 비교

                // 일치하는 경우
                // - 해당 게시글의 상세 정보를 출력
                // - 제목, 작성자, 조회수, 작성일, 내용 포함
    }
}
