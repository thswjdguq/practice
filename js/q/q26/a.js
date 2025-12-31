var a = "G";
var b = "O";
var c = "A";
var d = a + "." + b + "." + c + ".";
function test(){
for (var i = 0; i <= 10; i++){
    if(i % 2 == 0 ){
    document.write(d + "T" + "<br>");
}
else{
    document.write("밥" + "<br>");
}
}
}
test();