//-----------------cambia el nombre de la persona segun ancho pantalla--------------------------------------------
if (outerWidth>450){
    document.getElementById("nombreescondido").style.display = 'none';
    document.getElementById("nombreescondido2").style.display = 'block';
};

//-------------------------------botones modo claro y oscuro------------------------------------------------------
function modoscuro(){      
            document.documentElement.setAttribute('data-bs-theme','dark');
            //document.getElementsByClassName("iconitos").style.color = "white";
            document.getElementById("derecha").style.color ="white";
            document.getElementById("derecha1").style.color ="white";
            document.getElementById("derecha3").style.color ="white";

            } 
function modoclaro(){
    document.documentElement.setAttribute('data-bs-theme', 'a');
    document.getElementById("derecha").style.color ="black";
    document.getElementById("derecha1").style.color ="black";
    document.getElementById("derecha3").style.color ="black";
}     
//-----------------------------------pop up mapa mardel----------------------------------------------------------
function myFunction() {
  var popup = document.getElementById("myPopup");
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
  // For iOS
  if(window.navigator.standalone) return true

  // For Android
  if(window.matchMedia('(display-mode: standalone)').matches) return true

  // If neither is true, it's not installed
  return false
}
