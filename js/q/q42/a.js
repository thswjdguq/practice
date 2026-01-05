// 1. 내 번호 설정
var pnum1 = 1;
var pnum2 = 2;
var pnum3 = 3;
var pnum4 = 4;
var pnum5 = 5;
var pnum6 = 6;

// 컴퓨터 번호 변수
var num1, num2, num3, num4, num5, num6;


// 2. 컴퓨터 번호 생성 및 중복 체크
num1 = Math.floor(Math.random() * 45) + 1;
document.write("플레이어 번호1 : " + pnum1 + " 컴퓨터 번호 1 : " + num1 + "<br>");

// num2
while (true) {
    num2 = Math.floor(Math.random() * 45) + 1;
    if (num2 != num1) {
        document.write("플레이어 번호2 : " + pnum2 + " 컴퓨터 번호 2 : " + num2 + "<br>");
        break;
    }
}

// num3
while (true) {
    num3 = Math.floor(Math.random() * 45) + 1;
    if (num3 != num1 && num3 != num2) {
        document.write("플레이어 번호3 : " + pnum3 + " 컴퓨터 번호 3 : " + num3 + "<br>");
        break;
    }
}

// num4
while (true) {
    num4 = Math.floor(Math.random() * 45) + 1;
    if (num4 != num1 && num4 != num2 && num4 != num3) {
        document.write("플레이어 번호4 : " + pnum4 + " 컴퓨터 번호 4 : " + num4 + "<br>");
        break;
    }
}

// num5
while (true) {
    num5 = Math.floor(Math.random() * 45) + 1;
    if (num5 != num1 && num5 != num2 && num5 != num3 && num5 != num4) {
        document.write("플레이어 번호5 : " + pnum5 + " 컴퓨터 번호 5 : " + num5 + "<br>");
        break;
    }
}

// num6
while (true) {
    num6 = Math.floor(Math.random() * 45) + 1;
    if (num6 != num1 && num6 != num2 && num6 != num3 && num6 != num4 && num6 != num5) {
        document.write("플레이어 번호6 : " + pnum6 + " 컴퓨터 번호 6 : " + num6 + "<br>");
        break;
    }
}

document.write("<hr>");


// 3. 당첨 개수 확인 (win 카운트)
var win = 0;

// pnum1 비교
if (pnum1 == num1) {
    win = win + 1;
}
if (pnum1 == num2) {
    win = win + 1;
}
if (pnum1 == num3) {
    win = win + 1;
}
if (pnum1 == num4) {
    win = win + 1;
}
if (pnum1 == num5) {
    win = win + 1;
}
if (pnum1 == num6) {
    win = win + 1;
}

// pnum2 비교
if (pnum2 == num1) {
    win = win + 1;
}
if (pnum2 == num2) {
    win = win + 1;
}
if (pnum2 == num3) {
    win = win + 1;
}
if (pnum2 == num4) {
    win = win + 1;
}
if (pnum2 == num5) {
    win = win + 1;
}
if (pnum2 == num6) {
    win = win + 1;
}

// pnum3 비교
if (pnum3 == num1) {
    win = win + 1;
}
if (pnum3 == num2) {
    win = win + 1;
}
if (pnum3 == num3) {
    win = win + 1;
}
if (pnum3 == num4) {
    win = win + 1;
}
if (pnum3 == num5) {
    win = win + 1;
}
if (pnum3 == num6) {
    win = win + 1;
}

// pnum4 비교
if (pnum4 == num1) {
    win = win + 1;
}
if (pnum4 == num2) {
    win = win + 1;
}
if (pnum4 == num3) {
    win = win + 1;
}
if (pnum4 == num4) {
    win = win + 1;
}
if (pnum4 == num5) {
    win = win + 1;
}
if (pnum4 == num6) {
    win = win + 1;
}

// pnum5 비교
if (pnum5 == num1) {
    win = win + 1;
}
if (pnum5 == num2) {
    win = win + 1;
}
if (pnum5 == num3) {
    win = win + 1;
}
if (pnum5 == num4) {
    win = win + 1;
}
if (pnum5 == num5) {
    win = win + 1;
}
if (pnum5 == num6) {
    win = win + 1;
}

// pnum6 비교
if (pnum6 == num1) {
    win = win + 1;
}
if (pnum6 == num2) {
    win = win + 1;
}
if (pnum6 == num3) {
    win = win + 1;
}
if (pnum6 == num4) {
    win = win + 1;
}
if (pnum6 == num5) {
    win = win + 1;
}
if (pnum6 == num6) {
    win = win + 1;
}

// 4. 결과 출력
document.write("당첨 개수 : " + win + "개");