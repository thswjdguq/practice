package com.only.c.board;

import com.only.c.board.data.Data;
import com.only.c.board.data.Post;
import com.only.util.Cw;

public class ProcMenuList {
	static void run() {
		//todo
		//임시
		Cw.wn("리스트임");
		for(Post p:Data.posts) {
			p.info();
		}
	}

}
