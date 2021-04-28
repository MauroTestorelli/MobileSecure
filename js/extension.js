// PAGINA NUEVA //

const confirmaMarca=()=> {
  let marca=document.querySelector("#marca").value;
  if(marca=="samsung"){
    modelo=document.querySelector("#modelo");
    modelo.innerHTML='<option value="s20">S20</option> <option value="s21">S21</option> <option value="A72">A72</option>';
  }
  else if(marca=="xiaomi"){
    modelo=document.querySelector("#modelo");
    modelo.innerHTML='<option value="mi10t">Mi 10T</option> <option value="mi11">Mi 11</option> <option value="note9">Mi Note 9</option>';
  }
  else if(marca=="motorola"){
    modelo=document.querySelector("#modelo");
    modelo.innerHTML='<option value="g7">Moto G7</option> <option value="g8">Moto G8</option> <option value="g9">Moto G9</option>';
  }
  else if(marca=="apple"){
    modelo=document.querySelector("#modelo");
    modelo.innerHTML='<option value="plus8">8 Plus</option> <option value="xr">XR</option> <option value="se">SE 2020</option>';
  }
}

const cotizar=()=>{
  let marca=document.querySelector("#marca").value;
  let modelo=document.querySelector("#modelo").value;
  let blanco=document.querySelector("#blanco");
  let plata=document.querySelector("#plata");
  let oro=document.querySelector("#oro");
  let pago=document.querySelector("#formaPago").value;
  let nombre=document.querySelector("#nombre").value;
  let falloPantalla=document.querySelector("#pantalla");
  let falloPrendido=document.querySelector("#prendido");
  let falloBotones=document.querySelector("#botones");
  let falloCarga=document.querySelector("#carga");

  let total=document.querySelector("#cotizacion");

  let plan="";
  if(blanco.checked) {
    plan="verde"
  }else if(plata.checked){
    plan="plata"
  }else if(oro.checked){
    plan="oro"
  }

  let valorPlan="";

  if (pago=="mensual"){
    if (plan=="blanco"){
      valorPlan=600;
    }
    else if (plan=="plata"){
      valorPlan=850;
    }
    else if (plan=="oro"){
      valorPlan=1000;
    }
  }
  if (pago=="anual"){
    if (plan=="blanco"){
      valorPlan=6000;
    }
    else if (plan=="plata"){
      valorPlan=8500;
    }
    else if (plan=="oro"){
      valorPlan=10000;
    }
  }

  if(marca ===""||modelo ===""||plan ===""||nombre ===""||pago===""){
    mostrarError();
    return;
  }

  if (falloPantalla.checked){
    fallo1=0.10;
  }
  else if (falloPantalla){
    fallo1=0;
  }
  if (falloBotones.checked){
    fallo2=0.05;
  }
  else if (falloBotones){
    fallo2=0;
  }
  if (falloPrendido.checked){
    fallo3=0.05;
  }
  else if (falloPrendido){
    fallo3=0;
  }
  if (falloCarga.checked){
    fallo4=0.08;
  }
  else if (falloCarga){
    fallo4=0;
  }

  let tipoEstado=1-(fallo1+fallo2+fallo3+fallo4);


  var s20=50000;
  var s21=75000;
  var a72=30000;
  var mi10t=50000;
  var mi11=75000;
  var note9=40000;
  var plus8=50000;
  var xr=60000;
  var se=70000;
  var g7=30000;
  var g8=50000;
  var g9=70000;

  let valorAsegurado="";

  if (modelo =="s20") {
      valorAsegurado=s20;
  }
  if (modelo =="s21") {
      valorAsegurado=s21;
  }
  if (modelo =="a72") {
      valorAsegurado=a72;
  }
  if (modelo =="mi10t") {
      valorAsegurado=mi10t;
  }
  if (modelo =="mi11") {
      valorAsegurado=mi11;
  }
  if (modelo =="note9") {
      valorAsegurado=note9;
  }
  if (modelo =="plus8") {
      valorAsegurado=plus8;
  }
  if (modelo =="xr") {
      valorAsegurado=xr;
  }
  if (modelo =="se") {
      valorAsegurado=se;
  }
  if (modelo =="g7") {
      valorAsegurado=g7;
  }
  if (modelo =="g8") {
      valorAsegurado=g8;
  }
  if (modelo =="g9") {
      valorAsegurado=g9;
  }
  let aseguradoFinal=realizaDescuento(valorAsegurado,tipoEstado);

  let cotizacion={marca,modelo,plan};

  total.innerHTML='<img src="images/tenor.gif" class="img-carga" width=50 height=50>'
  setTimeout(()=>{
    total.innerHTML='<div class="cotizacion-total"><h3> '+mayuscula(nombre)+', esta es su cotizacion:</h3><br> <ul> <li>Marca: '+mayuscula(marca)+'</li><li>Modelo: '+mayuscula(modelo)+'</li><li>Tipo de plan: '+mayuscula(plan)+'</li><li>Forma de Pago: '+mayuscula(pago)+'</li><li>Valor del plan: $'+valorPlan+'.-</li><li>Valor asegurado: $'+aseguradoFinal+'.-</li></ul></div>';
  },2000)
}

function mostrarError(){
  error=document.querySelector("#errores");
  error.innerHTML='<p class="error">Complete todos los datos para poder cotizarle</p>';
  setTimeout(()=>{error.innerHTML='';}, 3000);
}

function realizaDescuento(aseg,desc){
  return aseg*desc
}

function mayuscula(palabra){
  return palabra.charAt(0).toUpperCase()+palabra.slice(1);
}