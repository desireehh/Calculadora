const pantalla= document.getElementById ("pantalla");
const teclaNum= document.querySelectorAll(".numero");
const teclaOp= document.querySelectorAll(".operadores");
const valorActual= document.getElementById("valorActual");
const valorAnterior= document.getElementById("valorAnterior");
const calculadora=document.getElementById("calculadora");
const rtrc= document.getElementById("rtrc");


teclaNum.forEach((tecla)=>{
 
 tecla.addEventListener("click", (e)=>{

if(valorActual.innerText==="0"){
valorActual.innerText=tecla.value;
} else{
  valorActual.innerText+=tecla.value;
}
 })

})

teclaOp.forEach((tecla)=>{
 
  tecla.addEventListener("click", (e)=>{
   
   valorActual.innerText+=tecla.value;
 
 
 
 }
  
   
 
  


  

     
      


      
      
     
)
} )


