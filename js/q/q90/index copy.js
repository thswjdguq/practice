const LOGIN_ID = "cat";
const LOGIN_PW = "1234";

var i;
var p;
var loginBox;

var id;
var pw;

// 시계 변수
var clock;

function login() {
    id = i.value;
    pw = p.value;
    if (id == LOGIN_ID && pw == LOGIN_PW) {
        // alert("로그인 성공");
        procLogin();
    } else {
        alert("로그인 실패")
    }
}

function procLogin() {
    loginBox.innerHTML = `
        <div class="success_message">
            <div class="success_icon">✓</div>
            <h3 class="success_title">로그인 성공!</h3>
            <p class="success_text"><strong>${id}</strong>회원님 반갑습니다.</p>
            <button class="btn btn_primary" onclick="location.reload();">다시 로그인</button>
        </div>
    `;
}

// 시계 업데이트 함수
function updateClock() {
    var now = new Date();
    var result =
        now.getFullYear() + "년 "
        + (now.getMonth() + 1) + "월 "
        + now.getDate() + "일 "
        + now.getHours() + "시 "
        + now.getMinutes() + "분 "
        + now.getSeconds() + "초 ";
    clock.innerHTML = result;
}

window.onload = function () {
    // 로그인 요소 초기화
    i = document.getElementById("i");
    p = document.getElementById("p");
    loginBox = document.getElementById("login_box");

    // 시계 초기화 및 시작
    clock = document.getElementById("clock");
    if (clock) {
        setInterval(updateClock, 1000);  // 타이머 시작
    }
}