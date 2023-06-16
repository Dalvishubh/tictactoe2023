
var yes=true
var player1;
var player2; 
player1count=player2count=0
var value=[1,0,1,0,1,0,0,1,0]

document.querySelector('#table').addEventListener('click',function(e){
    var index=e.target.id;


if(value[index]==0 || value[index]==1)
{
   e.target.innerHTML=getVal()
   value[index]=getVal()
   yes=!yes
}

else
{
    alert("NA");
}


console.log(value);

getWinner();

value[index]='';


})

function getVal()
{
    return (yes)? "X":"O";
}


function getWinner()
{
    if((value[0]==value[1] && value[1]==value[2]) || (value[3]==value[4] && value[4]==value[5]) || (value[6]==value[7] && value[7]==value[8]))
    {
    
        getanswer()
    
    }
    

    if((value[0]==value[3] && value[3]==value[6]) || (value[1]==value[4] && value[4]==value[7]) || (value[2]==value[5] && value[5]==value[8]))
    {
    
        getanswer()
    
    }


    if((value[0]==value[4] && value[4]==value[8]) || (value[2]==value[4] && value[4]==value[6]))
    {
    
        getanswer()
    
    }

}

player1=document.querySelector('#user1').value;
player2=document.querySelector('#user2').value;


document.querySelector('#sub').addEventListener('click',function(){

    player1=document.querySelector('#user1').value;
    player2=document.querySelector('#user2').value;
    
    if(player1==''|| player2=='')
{
    alert("invalid")
}
else 
{
    document.querySelector('#input').style.visibility="hidden"
    document.querySelector('#table').style.visibility="visible"
    document.querySelector('#reset').style.visibility="visible"
    document.querySelector('#pntable').style.visibility="visible"
    document.querySelector('#imp').style.visibility="hidden"
    document.querySelector('.reset1').style.visibility="visible"
}

document.querySelectorAll('#td1')[0].innerHTML=player1
document.querySelectorAll('#td1')[1].innerHTML=player2

})

document.querySelector('#reset').addEventListener('click',function(){

   document.querySelector('#table').style.visibility="hidden"
   document.querySelector('#input').style.visibility="visible"
   document.querySelector('#reset').style.visibility="hidden"
   document.querySelector('#pntable').style.visibility="hidden"

})


function getanswer()
{

     if(yes){
     document.querySelector('.play2').innerHTML=player2count;
     player2count++;
     alert("player2count") 
    }
     else{
       document.querySelector('.play1').innerHTML= player1count;
      player1count++; 
     alert("player1count")
    }
    
}

document.querySelector('.reset1').addEventListener('click',function(){
   var data=document.querySelectorAll('.td')
   for(let i=0; i<data.length; i++)
   {
            data[i].innerHTML="";
   }
   value=[1,0,1,0,1,0,0,1,0]
   console.log(value);
   value=true;
})


























