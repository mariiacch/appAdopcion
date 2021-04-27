// 'use strict';

// setInterval(function(){
//     cargaPagina();
// }, 2000);

// function cargaPagina(){
//     document.getElementById('loader').classList.add('hide');
// }

// Funcion para quitar secciones A-B 
function quitarSeccion(){
    const section_uno = document.querySelector('.container_section_uno');
    section_uno.classList.add('hide');
    const section_dos = document.querySelector('.container_section_dos');
    section_dos.classList.remove('hide');
}


// Evento de boton siguiente
const activarSeccionB = document.getElementById('siguiente_uno');
activarSeccionB.addEventListener("click", quitarSeccion);

