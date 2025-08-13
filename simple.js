 // number generate function store in nmb
let body=document.querySelector(".container").style
let button=document.querySelector(".btn");
let color=document.querySelector(".color");
let colors=["yellow","green","blue","grey","black"];

button.addEventListener("click",function(){
      const numberGenerate=()=>{
            return Math.floor(Math.random()*colors.length);
      }
      let nmb=numberGenerate();
      body.backgroundColor=colors[nmb]
      color.textContent=colors[nmb]
})



