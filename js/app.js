var scores = [0,0];
var roundScore = 0;
var activePlayer =0;


//document.querySelector("#score-"+activePlayer).textContent = dice;


document.querySelector(".dice").style.display="none";
document.getElementById('score-0').textContent='0';
document.getElementById('score-1').textContent='0';
document.getElementById('current-0').textContent='0';
document.getElementById('current-1').textContent='0';
document.querySelector('.btn-roll').addEventListener('click',function(){
    
    
    var dice = Math.floor(Math.random()*6)+1;
    console.log(dice);
    
    var diceDom = document.querySelector(".dice");
    diceDom.style.display="block";
    diceDom.src='img/dice-'+dice+'.png';
    
    if(dice!==1){
        roundScore += dice;
        document.querySelector("#current-"+activePlayer).innerHTML=
"<em>" + roundScore + "</em>";
        
    } else{
        
        activePlayer === 0 ? activePlayer=1: activePlayer =0;
        roundScore=0;
        
        document.getElementById("current-0").textContent=0;
        document.getElementById("current-1").textContent=0;
        
        document.querySelector('.player-0-panel').classList.toggle('active');
        
               
        document.querySelector('.player-1-panel').classList.toggle('active');
        //document.querySelector('.player-0-panel').classList.remove('active');
        
        //document.querySelector('.player-1-panel').classList.add('active');
        
        document.querySelector('.dice').style.display='none';
        
    };
    
    document.querySelector('.btn-hold').addEventListener('click', function(){
        
       scores[activePlayer] += roundScore; 
       document.querySelector('#score-'+activePlayer).textContent=scores[activePlayer];
    });
    

});

