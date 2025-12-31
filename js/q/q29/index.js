/**********************************************************************
가위 바위 보 게임 (v0.1.0)

[구현 기능]
- 가위바위보 기능
**********************************************************************/
// Rock Paper Scissors
var userrsp = prompt("가위,바위,보 중에 하나를 입력하세요:");
var comrspNumber = Math.floor(Math.random()*3+1);   // 1~3 랜덤값 뽑아서 저장
var comrspStr = ""; // 컴퓨터가 낸 가위,바위,보 중 하나 텍스트로 저장할 변수.
if(comrspNumber == 1){
    comrspStr = "가위";
}
if(comrspNumber == 2){
    comrspStr = "바위";
}
if(comrspNumber == 3){
    comrspStr = "보";
}

dw("유저:"+userrsp);
br();
dw("컴:"+comrspStr);
br();

var winDrawLose = "";
switch(userrsp){
    case "가위":
        switch(comrspStr){
            case "가위":
                winDrawLose = "DRAW";
                break;
            case "바위":
                winDrawLose = "패배";
                break;
            case "보":
                winDrawLose = "승리";
                break;
        }
        break;
    case "바위":
        switch(comrspStr){
            case "가위":
                winDrawLose = "승리";
                break;
            case "바위":
                winDrawLose = "DRAW";
                break;
            case "보":
                winDrawLose = "패배";
                break;
        }        
        break;
    case "보":
        switch(comrspStr){
            case "가위":
                winDrawLose = "패배";
                break;
            case "바위":
                winDrawLose = "승리";
                break;
            case "보":
                winDrawLose = "DW";
                break;
        }        
        break;
}

dw(winDrawLose);