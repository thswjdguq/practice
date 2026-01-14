package com.only.c.board;

import com.only.c.board.data.Data;
import com.only.c.board.display.Disp;
import com.only.util.Ci;

public class Board {
	public static final String VERSION = "v0.0.1";
	public static final String TITLE = "고양이 게시판 (" + VERSION + ") feat. sm.ahn";
	public void run() {
		Data.loadData();	//데이터 초기화(글리스트 객체 생성 등)
		Disp.title();
		ProcMenu.run();
	}
}
