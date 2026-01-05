// 2. 내가 한 게임을 구매했다고 가정하고		

// 컴퓨터의 6개의 숫자랑 내꺼랑 비교해서 몇개가 일치하는 지 세어 출력하기					 ex. 3개 일치	


// 내 번호들
var pnum1 = 1;
var pnum2 = 2;
var pnum3 = 3;
var pnum4 = 4;
var pnum5 = 5;
var pnum6 = 6;

// 랜덤 번호들
var num1 = Math.floor(Math.random() * 45) + 1; // 1 ~ n 까지 범위내에서 랜덤하게 숫자 하나 뽑아주는 애.
document.write(num1);
document.write("<br>");

var num2 = Math.floor(Math.random() * 45) + 1; // 1 ~ n 까지 범위내에서 랜덤하게 숫자 하나 뽑아주는 애.
document.write(num2);
document.write("<br>");

var num3 = Math.floor(Math.random() * 45) + 1; // 1 ~ n 까지 범위내에서 랜덤하게 숫자 하나 뽑아주는 애.
document.write(num3);
document.write("<br>");

var num4 = Math.floor(Math.random() * 45) + 1; // 1 ~ n 까지 범위내에서 랜덤하게 숫자 하나 뽑아주는 애.
document.write(num4);
document.write("<br>");

var num5 = Math.floor(Math.random() * 45) + 1; // 1 ~ n 까지 범위내에서 랜덤하게 숫자 하나 뽑아주는 애.
document.write(num5);
document.write("<br>");

var num6 = Math.floor(Math.random() * 45) + 1; // 1 ~ n 까지 범위내에서 랜덤하게 숫자 하나 뽑아주는 애.
document.write(num6);
document.write("<br>");



//todo:
// 컴퓨터의 6개의 숫자랑 내꺼랑 비교해서 몇개가 일치하는 지 세어 출력하기					 ex. 3개 일치	
// pnum1 ~ pnum6 : 내 번호(player number)
// num1 ~ num6 : 컴퓨터 번호 


var win = 0;    //내가 맞춘 수

if(pnum1 == num1){
    win = win + 1;
}
if(pnum1 == num2){
    win = win + 1;
}
if(pnum1 == num3){
    win = win + 1;
}
if(pnum1 == num4){
    win = win + 1;
}
if(pnum1 == num5){
    win = win + 1;
}
if(pnum1 == num6){
    win = win + 1;
}

if(pnum2 == num1){
    win = win + 1;
}
if(pnum2 == num2){
    win = win + 1;
}
if(pnum2 == num3){
    win = win + 1;
}
if(pnum2 == num4){
    win = win + 1;
}
if(pnum2 == num5){
    win = win + 1;
}
if(pnum2 == num6){      
    win = win + 1;
}
if(pnum2 == num5){
    win = win + 1;
}
if(pnum2 == num6){
    win = win + 1;
}

//3

if(pnum3 == num1){
    win = win + 1;
}
if(pnum3 == num2){
    win = win + 1;
}
if(pnum3 == num3){
    win = win + 1;
}
if(pnum3 == num4){
    win = win + 1;
}
if(pnum3 == num5){
    win = win + 1;
}
if(pnum3 == num6){
    win = win + 1;
}

//4

if(pnum4 == num1){
    win = win + 1;
}
if(pnum4 == num2){
    win = win + 1;
}
if(pnum4 == num3){
    win = win + 1;
}
if(pnum4 == num4){
    win = win + 1;
}
if(pnum4 == num5){
    win = win + 1;
}
if(pnum4 == num6){
    win = win + 1;
}
if(pnum4 == num6){
    win = win + 1;
}

//5

if(pnum5 == num1){
    win = win + 1;
}
if(pnum5 == num2){
    win = win + 1;
}
if(pnum5 == num3){
    win = win + 1;
}
if(pnum5 == num4){
    win = win + 1;
}
if(pnum5 == num5){
    win = win + 1;
}
if(pnum5 == num6){
    win = win + 1;
}
if(pnum5 == num6){
    win = win + 1;
}

//6

if(pnum6 == num1){
    win = win + 1;
}
if(pnum6 == num2){
    win = win + 1;
}
if(pnum6 == num3){
    win = win + 1;
}
if(pnum6 == num4){
    win = win + 1;
}
if(pnum6 == num5){
    win = win + 1;
}
if(pnum6 == num6){
    win = win + 1;
}

document.write("win:"+win);


