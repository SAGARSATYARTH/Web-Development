let abcd=document.querySelector("h1");
abcd.textContent="hlo mitr kaisee ho";
let a =document.querySelector("a");
a.setAttribute("href","https://www.google.com");
console.log(a.getAttribute("href"));

a.removeAttribute("href");
console.log(a.getAttribute("href"));

let h5=document.createElement("h5");

h5.textContent="kya haal chaal";
// document.body.prepend(h5);
document.querySelector("body").prepend(h5);

h5.style.color="red";
h5.style.backgroundColor="black";

abcd.classList.add("hey");
abcd.classList.remove("hey");


