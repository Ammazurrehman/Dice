function play(){
    var randomNone = Math.floor(Math.random()*6)+1;
    var randompone = "dice"+randomNone+".png";

    var randomNtwo = Math.floor(Math.random()*6)+1;
    var randomptwo = "dice"+randomNtwo+".png";


    var imag1 = document.getElementsByTagName('img')[0];
    imag1.setAttribute("src",randompone);

    var imag2 =document.getElementsByTagName('img')[1];
    imag2.setAttribute("src",randomptwo);


    if(randomNone > randomNtwo){
       document.querySelector("h1").innerHTML="Player 1 has won";
    }

   else if(randomNtwo > randomNone){
        document.querySelector("h1").innerHTML="Player 2 has won";
     }
     else{
        document.querySelector("h1").innerHTML="Draw";
          
     }
}

document.querySelector("button").addEventListener('click',play);