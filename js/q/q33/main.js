/**********************************************************************
가위 바위 보 게임 (v0.5.0)

[기존 기능]
- 가위바위보 기능
- 유저 가위바위보 입력 시 예외처리 추가
- 유저 가위바위보 입력을 입력창에서 받도록 수정
- 결과 출력 화면을 dw()가 아닌 출력화면용 textarea에 출력하도록 개선
(가위바위보 게임을 단판이 아닌 무한으로 가능해졌음)
v0.5.0 업데이트 내용
- 컴퓨터와 유저의 가위 바위 보 를 이미지로도 표현

todo:
**********************************************************************/
// t1.addEventListener('click', btn_listener);

// 선언
var userRsp = "";
var comRsp = "";

var rspInputText;
var rspResultScreen;

var resultString = "";

//이미지 놓일 div들
var divRspImgUser;
var divRspImgCom;

// ***** 중요 ******
window.onload = function(){

    rspInputText = document.getElementById("rsp_input_text");       // 연결
    rspResultScreen = document.getElementById("rsp_result_screen");       // 연결
    divRspImgUser = document.getElementById("rsp_user");       // 연결
    divRspImgCom = document.getElementById("rsp_com");       // 연결

    // rspResultScreen.value = "고양이";
    
}

function rspInputButtonClick(){

    while(true){    // while 무한루프 걸기는 이렇게 하면 됩니다
        // userRsp = prompt("가위,바위,보 중에 하나를 입력하세요:");
        userRsp = rspInputText.value;
        if(userRsp == "가위" || userRsp == "바위" || userRsp == "보"){
            break;  // while 무한루프를 빠져나감
        } else {
            alert("장난치지마세요");
            return;
        }
    }
    
    comRsp = Math.floor(Math.random()*3+1); // 컴퓨터 난수 발생 시키기 (1~3)
    if(comRsp == 1){
        comRsp = "가위";
    }
    if(comRsp == 2){
        comRsp = "바위";
    }
    if(comRsp == 3){
        comRsp = "보";
    }
    
    resultString = "유저:"+userRsp; // * 주의 * 다시 게임을 할 경우 이 명령줄로 인해 기존 누적된 내용이 초기화가 됨.
    resultString = resultString + "\n";
    resultString = resultString + "컴:"+comRsp;
    resultString += "\n";

    // 이미지 추가
    switch(userRsp){
        case "가위":
            divRspImgUser.innerHTML = "<img src='sc.png'>"
            break;
        case "바위":
            divRspImgUser.innerHTML = "<img src='ro.png'>"
            break;
        case "보":
            divRspImgUser.innerHTML = "<img src='pa.png'>"
            break;
    }
    switch(comRsp){
        case "가위":
            divRpcImgCom.innerHTML = "<img src='c_sc.png'>"
            break;
        case "바위":
            divRpcImgCom.innerHTML = "<img src='c_ro.png'>"
            break;
        case "보":
            divRpcImgCom.innerHTML = "<img src='c_pa.png'>"
            break;
    }

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
    // dw(winDrawLose);    
    // resultString += "결과: " + winDrawLose;
    resultString = resultString + "결과: " + winDrawLose;

    // 결과 출력
    rspResultScreen.value = resultString;
}