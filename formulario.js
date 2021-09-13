
 document.getElementById("contacto").style.display="none";



function enviar(){

    document.getElementById("formulario").style.display="none";
    
    var nombre=document.getElementById("nombre").value;
    var apellido=document.getElementById("apellido").value;
    var mail=document.getElementById("mail").value;
    
    
    document.getElementById("llama").style.display="none";
    document.getElementById("contacto").style.display="block";
    
    document.getElementById("contacto").innerHTML= nombre+" "+apellido+" muchas gracias por contactarte con nosotros, pronto te contactaremos a tu mail: "+mail ;
}

