
document.getElementById("contacto").style.display="none";



function enviar(){

    
    
    var nombre=document.getElementById("nombre").value;
    var apellido=document.getElementById("apellido").value;
    var mail=document.getElementById("mail").value;

    if(nombre < 3 || apellido < 3 || mail.length < 3){
        document.getElementById("cambiarTitulo").innerHTML="Error al enviar el mensaje"
        document.getElementById("cambiandoParrafo").innerHTML="Por favor completa el formulario de nuevo"
    }


    
    else{
            
        document.getElementById("cambiarTitulo").innerHTML="Mensaje enviado"
        document.getElementById("cambiandoParrafo").innerHTML=nombre+" "+apellido+" muchas gracias por contactarte con nosotros "
        document.getElementById("cambiandoANombre").innerHTML="Pronto nos comunicaremos al mail ingresado: "+mail;

        document.getElementById("bloqueoFormulario").style.display="none";
        document.getElementById("ocultar").style.display="none";
        }

}

$(document).ready(function(){
    $("#boton").click(function(){
        $(".mostrarMain").show(3000)
    })
})

$(document).ready(function(){
    $(".ancla").click(function(evento){
      evento.preventDefault();
      var codigo = "#" + $(this).data("ancla");
      $("html,body").animate({scrollTop: $(codigo).offset().top}, 3000);
    });
  });