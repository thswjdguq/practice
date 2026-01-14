package com.only.c.board;

import com.only.c.board.display.Disp;

public class Board {
	public static final String VERSION = "v0.0.0";
	public static final String TITLE = "고양이 게시판 (" + VERSION + ") feat. jh.son";

	public void run() {
		Disp.title();
		ProcMenu.run();
	}
}
