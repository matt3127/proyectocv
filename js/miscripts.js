//-----------------cambia el nombre de la persona segun ancho pantalla--------------------------------------------
if (outerWidth>450){
  document.getElementById("nombreescondido").style.display = 'none';
  document.getElementById("nombreescondido2").style.display = 'block';
};
//-------------------------------botones modo claro y oscuro------------------------------------------------------
{
const b="black", w="white"
function modoscuro(){
  document.documentElement.setAttribute('data-bs-theme','dark');
  document.getElementById("ico1").style.color = w;
  document.getElementById("ico2").style.color = w;
  document.getElementById("ico3").style.color = w;
  document.getElementById("ico4").style.color = w;
  document.getElementById("ico4").style.color = w;
  document.getElementById("derecha").style.color =w;
  document.getElementById("derecha1").style.color =w;
  document.getElementById("derecha3").style.color =w;
} 
function modoclaro(){
  document.documentElement.setAttribute('data-bs-theme', 'a');
  document.getElementById("derecha").style.color = b;
  document.getElementById("derecha1").style.color = b;
  document.getElementById("derecha3").style.color = b;
  document.getElementById("ico1").style.color = b;
  document.getElementById("ico2").style.color = b;
  document.getElementById("ico3").style.color = b;
  document.getElementById("ico4").style.color = b;
}     
}
//-----------------------------------pop up mapa mardel----------------------------------------------------------
function mapa() {
  var popup = document.getElementById("popmapa");
  popup.classList.toggle("show");
}
//-------------------------------------------boton hover volver arriba------------------------------------------
let arriba = document.getElementById("arriba");
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    arriba.style.display = "block";
  } else {
    arriba.style.display = "none";
  }
}
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

//-------------------------check pwa service activo o no--------------------------------------------------------
function isInstalled() {
  if(window.navigator.standalone) return true
  if(window.matchMedia('(display-mode: standalone)').matches) return true
  return false
}
