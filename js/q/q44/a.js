// 2. 내가 한 게임을 구매했다고 가정하고		

// 컴퓨터의 6개의 숫자랑 내꺼랑 비교해서 몇개가 일치하는 지 세어 출력하기					 ex. 3개 일치	


// 내 번호들
var pnum1 = 1;
var pnum2 = 2;
var pnum3 = 3;
var pnum4 = 4;
var pnum5 = 5;
var pnum6 = 6;

// 컴 번호들
// var r[0],r[1],r[2],r[3],r[4],r[5];

var num = [0,0,0,0,0,0];



// 랜덤 번호들
num[0] = Math.floor(Math.random() * 45) + 1; // 1 ~ n 까지 범위내에서 랜덤하게 숫자 하나 뽑아주는 애.
document.write(num[0]);
document.write("<br>");


////    앞선 번호들과 비교하여 중복된 번호가 나온 경우 다시 번호를 뽑게 하기(그렇게 해서 나온 번호도 또 검사를 계속 해야함)
while(true){

    num[1] = Math.floor(Math.random() * 45) + 1; // 1 ~ n 까지 범위내에서 랜덤하게 숫자 하나 뽑아주는 애.

    if(num[0] != num[1]){   // num[1]가 num[0]과 같지 않으면 빠져나감
        document.write(num[1]);
        document.write("<br>");
        break;
    }
}


// num[2]  가 num[0] 이나 num[1]와 같으면 다시뽑게하기(무한히)
while(true){

    num[2] = Math.floor(Math.random() * 45) + 1; // 1 ~ n 까지 범위내에서 랜덤하게 숫자 하나 뽑아주는 애.

    if(num[2] != num[0] && num[2] != num[1] ){   // num[2]  가 num[0] 이나 num[1]와 같으면 다시뽑게하기(무한히)
        document.write(num[2]);
        document.write("<br>");
        break;
    }
}




while(true){

    num[3] = Math.floor(Math.random() * 45) + 1; // 1 ~ n 까지 범위내에서 랜덤하게 숫자 하나 뽑아주는 애.

    if(num[3] != num[0] && num[3] != num[1] && num[3] != num[2]){
        document.write(num[3]);
        document.write("<br>");
        break;
    }
}



while(true){

    num[4] = Math.floor(Math.random() * 45) + 1; // 1 ~ n 까지 범위내에서 랜덤하게 숫자 하나 뽑아주는 애.

    if(num[4] != num[0] && num[4] != num[1] && num[4] != num[2] && num[4] != num[3]){
        document.write(num[4]);
        document.write("<br>");
        break;
    }
}



while(true){

    num[5] = Math.floor(Math.random() * 45) + 1; // 1 ~ n 까지 범위내에서 랜덤하게 숫자 하나 뽑아주는 애.

    if(num[5] != num[0] && num[5] != num[1] && num[5] != num[2] && num[5] != num[3] && num[5] != num[4]){
        document.write(num[5]);
        document.write("<br>");
        break;
    }
}



// 컴퓨터의 6개의 숫자랑 내꺼랑 비교해서 몇개가 일치하는 지 세어 출력하기					 ex. 3개 일치	
// pnum1 ~ pnum6


var win = 0;    //내가 맞춘 수

if(pnum1 == num[0]){
    win = win + 1;
}
if(pnum1 == num[1]){
    win = win + 1;
}
if(pnum1 == num[2]){
    win = win + 1;
}
if(pnum1 == num[3]){
    win = win + 1;
}
if(pnum1 == num[4]){
    win = win + 1;
}
if(pnum1 == num[5]){
    win = win + 1;
}

if(pnum2 == num[0]){
    win = win + 1;
}
if(pnum2 == num[1]){
    win = win + 1;
}
if(pnum2 == num[2]){
    win = win + 1;
}
if(pnum2 == num[3]){
    win = win + 1;
}
if(pnum2 == num[4]){
    win = win + 1;
}
if(pnum2 == num[5]){
    win = win + 1;
}

//3

if(pnum3 == num[0]){
    win = win + 1;
}
if(pnum3 == num[1]){
    win = win + 1;
}
if(pnum3 == num[2]){
    win = win + 1;
}
if(pnum3 == num[3]){
    win = win + 1;
}
if(pnum3 == num[4]){
    win = win + 1;
}
if(pnum3 == num[5]){
    win = win + 1;
}

//4

if(pnum4 == num[0]){
    win = win + 1;
}
if(pnum4 == num[1]){
    win = win + 1;
}
if(pnum4 == num[2]){
    win = win + 1;
}
if(pnum4 == num[3]){
    win = win + 1;
}
if(pnum4 == num[4]){
    win = win + 1;
}
if(pnum4 == num[5]){
    win = win + 1;
}

//5

if(pnum5 == num[0]){
    win = win + 1;
}
if(pnum5 == num[1]){
    win = win + 1;
}
if(pnum5 == num[2]){
    win = win + 1;
}
if(pnum5 == num[3]){
    win = win + 1;
}
if(pnum5 == num[4]){
    win = win + 1;
}
if(pnum5 == num[5]){
    win = win + 1;
}

//6

if(pnum6 == num[0]){
    win = win + 1;
}
if(pnum6 == num[1]){
    win = win + 1;
}
if(pnum6 == num[2]){
    win = win + 1;
}
if(pnum6 == num[3]){
    win = win + 1;
}
if(pnum6 == num[4]){
    win = win + 1;
}
if(pnum6 == num[5]){
    win = win + 1;
}

document.write("win:"+win);


