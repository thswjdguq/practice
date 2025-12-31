var random;
random = Math.floor(Math.random() * 100) + 1; // 1 ~ n 까지 범위내에서 랜덤하게 숫자 하나 뽑아주는 애.
for(var x=1; x<random; x++)
{
    document.write(x + "<img src='cat.jpg'><br>");
}