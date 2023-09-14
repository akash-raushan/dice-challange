var randomNumber1=Math.floor(Math.random()*6+1)
var randomImage1="dice"+randomNumber1+".png";
var randomSource1="images/"  + randomImage1;
var image1=document.getElementsByClassName("img1")[0]
image1.setAttribute("src",randomSource1)


var randomNumber2=Math.floor(Math.random()*6+1)
var randomImage2="dice"+randomNumber2+".png";
var randomSource2="images/"  + randomImage2;
var image2=document.getElementsByClassName("img2")[0]
image2.setAttribute("src",randomSource2)

function winner(){
    // var title=document.getElementById("title")
    if (randomNumber1>randomNumber2){
        document.getElementById("title").innerHTML="Player 1 wins";
    }else if(randomNumber1==randomNumber2){
        document.getElementById("title").innerHTML="Draw";
    }else{
        document.getElementById("title").innerHTML="Player 2 wins"
    }
}
winner()