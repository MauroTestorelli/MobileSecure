$("#myForm").submit(function (e) {
    e.preventDefault();
    let hijos = $(e.target).children();
    console.log(hijos[3].value);
    console.log(hijos[5].value);
    console.log(hijos[11].value);
    console.log(hijos[23].value);
    console.log(hijos[26].value);
});

document.getElementById("inputEmail3");
$ ("#inputEmail3").on("change", mostrarAlert);

function mostrarAlert(){
	alert('Pronto nos comunicaremos con ud via mail');
}

var tipo_plan = $ ("#tipo_plan").value;
var marca = $ ("#marca").value;

$('#boton').on('click', function () {

  $("body").prepend('<h3>Formulario enviado!</h3>');  
  $("h3").fadeOut("slow", function(){
  $("h3").fadeIn(1000);
});
});


const URLGET   = "ejemplocotizador.com"

const infoPost =  { marca, tipo_plan }

$("#boton").click(() => { 
  $.post(URLGET, infoPost ,(respuesta, estado) => {
      if(estado === "success"){
          $("body").prepend(`<div>
Guardado:${respuesta.nombre}
</div>`);
      }  
  });
});
