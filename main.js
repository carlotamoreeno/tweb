/********************************************MENU***********************************************/
function enseñar(){/*Quitar o poner menur*/ 
   let cn = document.getElementById('menunav');
   cn.classList.toggle('cnopen');

   let menuopen = document.getElementById('menotoggle');
   menuopen.classList.toggle('cnopen');
}
/********************************************MENU***********************************************/
/*******************************************PRODUCTOS***********************************************/
var inicio = 0;
carrusel();

function carrusel(){
    var i;
    var x = document.getElementsByClassName("mis");
    for (i=0; i<x.length; i++){
        x[i].style.display = "none";
    }
    inicio++;

    if(inicio >x.length){
        inicio = 1;
    }
    x[inicio-1].style  .display= "block";
    setTimeout(carrusel, 2000);
}
/*******************************************PRODUCTOS***********************************************/