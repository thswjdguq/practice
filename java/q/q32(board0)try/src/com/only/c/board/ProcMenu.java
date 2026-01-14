package com. only.c.board;

import com.only.c.board.display.Disp;
import com.only.util.*;

public class ProcMenu {
	static void run() {
		Disp.menuMain();
		loop:
			while(true) {
				String cmd = Ci.r("명령");
				switch(cmd) {
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
				case "e":
					System.out.println("프로그램 종료");
					break loop;
					default:
						Cw.wn("장난x");
						break;
				}
			}
	}
}