var body = document.getElementsByTagName("body");

window.addEventListener("click", function(){
   
    console.log("funciona el sonido");
         var sonidito = new Audio("blaster.mp3");
         sonidito.play();
     
 
      
 })


 const cursor= document.querySelector(".cursor");
const disparo= document.querySelector("#tiro");
const audio= document.querySelector(".audio");
audio.volume=0.5;


 document.addEventListener("mousemove", function(e){
     cursor.setAttribute("style", "top: "+(e.pageY-10)+"px; left: "+(e.pageX-40)+"px;");
 })

  document.addEventListener("click", function(){
    
    disparo.classList.add("click");
    setTimeout(function(){
        
        disparo.classList.remove("click");
        audio.play();
       
    }, 500)
     })  