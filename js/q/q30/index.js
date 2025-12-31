/**********************************************************************
* 가위 바위 보 게임 (v0.2.0)
*
* - 가위바위보 기능
* - 유저 가위바위보 입력 시 예외처리 추가
**********************************************************************/

// Rock Paper Scissors
var userRsp = "";
while(true){    // while 무한루프 걸기는 이렇게 하면 됩니다
    userRsp = prompt("가위,바위,보 중에 하나를 입력하세요:");
    if(userRsp == "가위" || userRsp == "바위" || userRsp == "보"){
        break;  // while 무한루프를 빠져나감
    } else {
        alert("장난치지마세요");
    }
}


var comRsp = Math.floor(Math.random()*3+1);
if(comRsp == 1){
    comRsp = "가위";
}
if(comRsp == 2){
    comRsp = "바위";
}
if(comRsp == 3){
    comRsp = "보";
}


dw("유저:"+userRsp);
br();
dw("컴:"+comRsp);
br();

var winDrawLose = "";
switch(userRsp){
    case "가위":
        switch(comRsp){
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
        switch(comRsp){
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
        switch(comRsp){
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