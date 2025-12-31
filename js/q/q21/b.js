// 문21	반복문 - 별찍기

/*

         *
        **
       ***
      ****
     *****
    ******
   *******
  ********
 *********
**********

이런 모양 나오게

*/

var z = 3;
for(var i=1; i<=3; i=i+1){

    for(var k=1; k<=z; k=k+1){
        document.write("&nbsp;");
    }
    z = z - 1;

    for(var j=1; j<=i; j=j+1){
        document.write("*");
    }
    document.write("<br>");
}