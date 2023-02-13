if (outerWidth>450){
    document.getElementById("nombreescondido").style.display = 'none';
    document.getElementById("nombreescondido2").style.display = 'block';
};
function modoscuro(){      
            var result = document.documentElement.hasAttribute('dark');
            if (result){
                document.documentElement.setAttribute('data-bs-theme','a');
            }
            else{document.documentElement.setAttribute('data-bs-theme','dark');
            }
            console.log(result);
}
function modoclaro(){
    document.documentElement.setAttribute('data-bs-theme', 'a');
}            
            
            
            /*var result = document.documentElement.hasAttribute('data-bs-theme','dark');
            if (result){
                document.documentElement.setAttribute('data-bs-theme','a');
            }
            console.log(result);*/

   

    
//este funciona perfecto
/*
if (outerWidth<451){
document.getElementById("nombreescondido").style.display = 'block';
}
else {
    document.getElementById("nombreescondido2").style.display = 'block';
}*/

/*window.onresize = function(){ location.reload(); }
if (outerWidth<451){
    document.getElementById("nombreescondido").style.display = 'block';
    }
    else {
        document.getElementById("nombreescondido2").style.display = 'block';
    }

*/