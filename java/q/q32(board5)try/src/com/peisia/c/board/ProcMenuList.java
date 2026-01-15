package com.peisia.c.board;

// 게시글 데이터가 저장된 클래스를 사용하기 위한 import
import com.peisia.c.board.data.Data;
import com.peisia.c.board.data.Post;
// 출력 관련 유틸을 사용하기 위한 import
import com.peisia.util.Ci;
import com.peisia.util.Cw;

public class ProcMenuList {

	// 게시글 목록을 출력하는 기능
	// 메뉴에서 "목록 보기"를 선택했을 때 실행됨
	static void run() {

        // 현재 실행 중인 기능이 "목록"임을 사용자에게 알림
    	Cw.wn("리스트입니다.");
        // 게시글이 하나도 없는 경우를 먼저 검사
        // - 게시글 리스트의 크기를 기준으로 판단
    		if(Post.no<=0)
    		{
            // 게시글이 없다는 메시지를 출력
    	Cw.wn("게시글이 없습니다.");
            // 더 이상 처리할 필요가 없으므로 메소드 종료
    	return;
    		}
        // 게시글이 존재하는 경우
    		else {
    		// 게시글 리스트에 저장된 모든 게시글을 순서대로 처리
    		       // 하나의 게시글 정보를 출력
                // - 글 번호
                // - 제목
                // - 작성자
                // - 조회수

    			for(var p: Data.posts) {
    				Cw.wn("번호: " + p.instanceNo);
    				Cw.wn("제목: " + p.title);
    				Cw.wn("작성자: " + p.writer);
    				Cw.wn("조회수: " + p.hit);
    				Cw.wn("작성일 : " + p.date);
    				Cw.line();
    			}
     
            // 다음 게시글과 구분하기 위한 출력
    }
}
}
