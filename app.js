
  //Selectors
var first=document.querySelector('.first');
var second=document.querySelector('.second');
var third=document.querySelector('.third');
var fourth=document.querySelector('.fourth');
var fifth=document.querySelector('.fifth');
var sixth=document.querySelector('.sixth');
var seventh=document.querySelector('.seventh');
var eighth=document.querySelector('.eighth');
var ninth=document.querySelector('.ninth');
var firstname=document.querySelector('.enterfirst');
var secondname=document.querySelector('.entersecond');
var player1=document.querySelector('.player-1');
var player2=document.querySelector('.player-2');
var block=document.querySelector('.block');
var count=0,flg=0;
var secondplayer=document.querySelector('.secondplayer');
var firstplayer=document.querySelector('.firstplayer');
var c,canplay=true;
var gamearea=document.querySelector('.game-area');
startGame();

if(firstname.value>0)
{
   firstplayer.innerHTML=firstname.value;
}
if(secondname.value>0)
{
   secondplayer.innerHTML=secondname.value;
}
function startGame()
{
   c=true;
   if(canplay)
   {
      first.addEventListener('click',handleclick,{once:true});
      second.addEventListener('click',handleclick,{once:true});
      third.addEventListener('click',handleclick,{once:true});
      fourth.addEventListener('click',handleclick,{once:true});
      fifth.addEventListener('click',handleclick,{once:true});
      sixth.addEventListener('click',handleclick,{once:true});
      seventh.addEventListener('click',handleclick,{once:true});
      eighth.addEventListener('click',handleclick,{once:true});
      ninth.addEventListener('click',handleclick,{once:true});
   }

}
function handleclick(e)
{
    var curr_cell=e.target;
    var current_class;
    if(c)
    { 
      current_class='circle'; 
    }
    else
    {
     current_class='cross';
    }
    checkandrevert(curr_cell,current_class);
    if(checkwin())
    {
      console.log('someone won')
    }
    else if(checkdraw())
    {
       console.log('draw')
    }
    else
    {
       c=!c;
       count=count+1;
    }
  
}
function checkandrevert(curr_cell,current_class)
{
    curr_cell.classList.add(current_class)
}
function checkdraw()
{
   if(count===9 && flg===0)
   {
       console.log('Its a draw')
   }
}

function checkwin()
{
     //check if someone won
     if(first.classList.contains('cross') &&  second.classList.contains('cross') && third.classList.contains('cross'))
     {
        flg=1;
        secondplayer.innerText+=' WINNER!!';
        gamearea.style.display='none';
        canplay=false;
        
     }
     if(fourth.classList.contains('cross') &&  fifth.classList.contains('cross') && sixth.classList.contains('cross'))
     {
        flg=1;
        secondplayer.innerText+=' WINNER!!';
        gamearea.style.display='none';
        canplay=false;
     }


     if(seventh.classList.contains('cross') &&  eighth.classList.contains('cross') && ninth.classList.contains('cross'))
     {
        flg=1;
        secondplayer.innerText+=' WINNER!!';
        gamearea.style.display='none';
         canplay=false;
     }

     if(first.classList.contains('cross') &&  fifth.classList.contains('cross') && ninth.classList.contains('cross'))
     {
        flg=1;
        secondplayer.innerText+=' WINNER!!';
        gamearea.style.display='none';
        canplay=false;
     }

     if(third.classList.contains('cross') &&  fifth.classList.contains('cross') && seventh.classList.contains('cross'))
     {
        flg=1;
        secondplayer.innerText+=' WINNER!!';
        gamearea.style.display='none';
        canplay=false;
     }
     if(first.classList.contains('cross') &&  fourth.classList.contains('cross') && seventh.classList.contains('cross'))
     {
        flg=1;
        secondplayer.innerText+=' WINNER!!';
        gamearea.style.display='none';
        canplay=false;
     }
     if(second.classList.contains('cross') &&  fifth.classList.contains('cross') && eighth.classList.contains('cross'))
     {
        flg=1;
        secondplayer.innerText+=' WINNER!!';
        gamearea.style.display='none';
        canplay=false;
     }
     if(third.classList.contains('cross') &&  sixth.classList.contains('cross') && ninth.classList.contains('cross'))
     {
        flg=1;
        secondplayer.innerText+=' WINNER!!';
        gamearea.style.display='none';
        canplay=false;
     }
     if(first.classList.contains('circle') &&  second.classList.contains('circle') && third.classList.contains('circle'))
     {
        flg=1;
        firstplayer.innerText+=' WINNER!!';
        gamearea.style.display='none';
        canplay=false;
         
     }


     if(fourth.classList.contains('circle') &&  fifth.classList.contains('circle') && sixth.classList.contains('circle'))
     {
        flg=1;
        firstplayer.innerText+=' WINNER!!';
        gamearea.style.display='none';
        canplay=false;
        
     }


     if(seventh.classList.contains('circle') &&  eighth.classList.contains('circle') && ninth.classList.contains('circle'))
     {
        flg=1;
        firstplayer.innerText+=' WINNER!!';
        gamearea.style.display='none';
        canplay=false;
         
     }

     if(first.classList.contains('circle') &&  fifth.classList.contains('circle') && ninth.classList.contains('circle'))
     {
        flg=1;
        firstplayer.innerText+=' WINNER!!';
        gamearea.style.display='none';
        canplay=false;
        
     }

     if(third.classList.contains('circle') &&  fifth.classList.contains('circle') && seventh.classList.contains('circle'))
     {
        flg=1;
        firstplayer.innerText+=' WINNER!!';
        gamearea.style.display='none';
        canplay=false;
        
     }
     if(first.classList.contains('circle') &&  fourth.classList.contains('circle') && seventh.classList.contains('circle'))
     {
        flg=1;
        firstplayer.innerText+=' WINNER!!';
        gamearea.style.display='none';
        canplay=false;
     }
     if(second.classList.contains('circle') &&  fifth.classList.contains('circle') && eighth.classList.contains('circle'))
     {
        flg=1;
        firstplayer.innerText+=' WINNER!!';
        gamearea.style.display='none';
        canplay=false;
     }
     if(third.classList.contains('circle') &&  sixth.classList.contains('circle') && ninth.classList.contains('circle'))
     {
         flg=1;
         firstplayer.innerText+=' WINNER!!';
         gamearea.style.display='none';
        canplay=false;
     }
     
}









