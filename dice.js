const dice=document.getElementById("dice");
const lab=document.getElementById("mylabel");
let rn;
dice.onclick=function(){
    rn=Math.ceil(Math.random()*6);
    lab.textContent=rn;

}