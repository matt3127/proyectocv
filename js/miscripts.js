if (outerWidth>450){
    document.getElementById("nombreescondido").style.display = 'none';
    document.getElementById("nombreescondido2").style.display = 'block';
};

//---------------------------------------------------------------------------------------------
function modoscuro(){      
            document.documentElement.setAttribute('data-bs-theme','dark');
            //document.getElementsByClassName("iconitos").style.color = "white";
            document.getElementById("derecha").style.color ="white";
            document.getElementById("derecha1").style.color ="white";
            } 
function modoclaro(){
    document.documentElement.setAttribute('data-bs-theme', 'a');
    document.getElementById("derecha").style.color ="black";
    document.getElementById("derecha1").style.color ="black";
}     
//---------------------------------------------------------------------------------------------