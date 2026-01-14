package com.only.c.board.display;

import com.only.c.board.Board;
import com.only.util.Cw;

public class Disp {
	public static void title() {
		Cw.line();
		Cw.dot();
		Cw.space(15);
		Cw.w(Board.TITLE);
		Cw.space(11);
		Cw.dot();
		Cw.wn();
		Cw.line();
	}
	public static void menuMain() {
		Cw.dot();
		Cw.w("[1.글 리스트/2.글 읽기/ 3.글쓰기/4.글삭제/e.종료]");
		Cw.dot();
		Cw.wn();
}
}