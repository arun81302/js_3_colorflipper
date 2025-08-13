let body= document.querySelector(".container").style;
let button=document.querySelector("button");
let colors=document.querySelector("span");
let color=[1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];

function generate(){
      return Math.floor(Math.random()*color.length);
}

button.addEventListener("click",function(){
let hex="#"
for(let i=0;i<6;i++){
      hex += color[generate()];
      
}
console.log(hex);
body.backgroundColor=hex;
colors.innerText=hex
})