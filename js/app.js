const pantalla= document.getElementById ("pantalla");
const valorActual= document.getElementById("valorActual");
const valorAnterior= document.getElementById("valorAnterior");
const teclas= document.querySelectorAll("#tecla");



teclas.forEach(tecla => {
 
  tecla.addEventListener("click", (e)=>{
      
    if(tecla.value==="Retr" ){
        if (valorActual.innerText.length===1) {
          valorActual.innerText="0";
      
        } else {
                  valorActual.innerText=valorActual.innerText.slice(0, -1);
               }
    return;
  }
   

    if(tecla.value==="C"){
       valorActual.innerText="0"
       return;
    }
  

    if(tecla.value==="="){
      valorActual.innerText= eval(valorActual.innerText)
      valorAnterior.innerText=valorActual.innerText;
      
      return;

      }

      

    if (valorActual.innerText==="0" )
     {
      valorActual.innerText=tecla.value;
     
    }

    else {
      valorActual.innerText+=tecla.value;
     
    }
    
  }
    
  )
  
});


 
  


  

     
      
