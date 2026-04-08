// ex -1
// let p1=document.querySelector("p");
// p1.addEventListener("click",function (){
//     p1.style.color="red";
// })

// p1.removeEventListener("click",function(){
//     p1.style=null;
// });

let h1=document.querySelector("h1");

window.addEventListener("keydown",function (dets){
    if(dets.key===" "){
        h1.textContent="SPC";
    }
    else{
        h1.textContent=dets.key;
    }
})