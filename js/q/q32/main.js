/**********************************************************************
가위 바위 보 게임 (v0.4.0)

[기존 기능]
- 가위바위보 기능
- 유저 가위바위보 입력 시 예외처리 추가
- 유저 가위바위보 입력을 입력창에서 받도록 수정
v0.4.0 업데이트 내용
- 결과 출력 화면을 dw()가 아닌 출력화면용 textarea에 출력하도록 개선
(가위바위보 게임을 단판이 아닌 무한으로 가능해졌음)


todo:
**********************************************************************/
// t1.addEventListener('click', btn_listener);

// 선언
var userRsp = "";
var comRsp = "";

var rspInputText;
var rspResultScreen;

var resultString = "";

// ***** 중요 ******
window.onload = function(){

    rspInputText = document.getElementById("rsp_input_text");       // 연결
    rspResultScreen = document.getElementById("rsp_result_screen");       // 연결
    
}

function rspInputButtonClick(){
    resultString = "";  //결과 화면 초기화
    rspResultScreen.value = resultString;   // 텍스트 에어리어 지움

    // userRsp = prompt("가위,바위,보 중에 하나를 입력하세요:");
    userRsp = rspInputText.value;
    if(userRsp == "가위" || userRsp == "바위" || userRsp == "보"){  //정상 입력 검사. ok면 가위바위보 로직을 처리
        ////    가위바위보 로직을 처리  ////
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
    
        
        // dw("유저:"+userRsp);
    
        resultString = resultString + "유저:"+userRsp;
        
        // br();
        resultString = resultString + "\n";
        
        // dw("컴:"+comRsp);    
        resultString = resultString + "컴:"+comRsp;
        
        // br();
        resultString = resultString + "\n";
    
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
        resultString = resultString + "결과: " + winDrawLose;
        // 결과 출력
        rpcResultScreen.value = resultString;
    } else {
        alert("장난치지마세요");
    }
}