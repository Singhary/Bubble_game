var timer = 5 ;
var score = 0 ;
var hitrn = 0 ; 

function increasescores(){
    score=score+10 ;
    document.querySelector(`#score`).textContent = score ;
}

function generatehit(){
     hitrn  = Math.floor(Math.random()*10) ;
    document.querySelector("#hit").textContent = hitrn ;
}


function makebubble(){
    var clutter = "" ;

for(var i = 0 ; i<102 ;i++){
    var random = Math.floor(Math.random()*10) ;
    clutter+=`<div class="bubble"> ${random} </div>`
    
}

document.querySelector(`#panelbottom`).innerHTML=clutter ;
}

function runtimer(){
    var timerinterval= setInterval(function(){
        timer-- ;
        if(timer>=0){
        document.querySelector("#timervalue").textContent= timer ;
        }
        else{
            clearInterval(timerinterval) ;
            document.querySelector(`#panelbottom`).innerHTML = `<h1>Game Over</h1>`
        }
     } , 1000)
}

//EVENT BUBBLING
document.querySelector("#panelbottom").addEventListener("click" , function(details){
    var clicked=Number(details.target.textContent) ; //details.target sa div aaya jispa event huya hai , details.target.textcontent sa hume text mila us div ka andar ka
                                             //jo string hai usko number karna ka liya Number() 
    
    if(clicked == hitrn){
        increasescores() ;
        generatehit() ;
        makebubble() ;

    }
}) ;

makebubble() ;
runtimer() ;
generatehit() ;
