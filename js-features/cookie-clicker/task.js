const element = document.getElementById("cookie");
const cliker = document.getElementById("clicker__counter");
counter = 0;
element.addEventListener('click', function(){
  counter ++;
  cliker.textContent = + counter; 
})

window.onload = function(){
let i = 0;
 let element = document.getElementById("cookie");
  element.onclick = function(){
   if (i==0){
   this.style.width= '300px';
   i = 1;
   }else if(i==1){
    this.style.width= '200px';
    i = 0;
    }
  }
};