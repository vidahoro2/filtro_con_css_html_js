const categorias = ['estructuras','instalaciones','sostenibilidad'];
const usos = ['parquing','centroatencionprimaria','civil','comercial','cultural','docente','deportivo','hospitalario','hotelero','industrial','oficinas','recintofiral','residencial','servicios','sociosanitario'];
const select = document.querySelector('select');
const style = document.createElement('style');
const categoria = select.addEventListener('change',()=>{

    if(select.value == categorias[0]){
        style.innerHTML = '[data-category="instalaciones"],[data-category="sostenibilidad"]{display:none;} '
        document.head.appendChild(style);
    }
    if(select.value == categorias[1]){
        style.innerHTML = '[data-category="estructuras"],[data-category="sostenibilidad"]{display:none;}'
        document.head.appendChild(style);
    }
    if(select.value == categorias[2]){
        style.innerHTML = '[data-category="instalaciones"],[data-category="estructuras"]{display:none;}'
        document.head.appendChild(style);
    }


});



// let select = document.querySelector('select');
// let style = document.createElement('style');

// let categoria = select.addEventListener('change',()=>{

//     if (select.value == "estructuras"){

//         style.innerHTML = '[data-category="instalaciones"],[data-category="sostenibilidad"]{display:none;} '
//         document.head.appendChild(style);
//         // Añadir un if anidado
//     }
//     if(select.value == "instalaciones"){
//         style.innerHTML = '[data-category="estructuras"],[data-category="sostenibilidad"]{display:none;}'
//         document.head.appendChild(style);
//     }
//     if(select.value == "sostenibilidad"){
//         style.innerHTML = '[data-category="instalaciones"],[data-category="estructuras"]{display:none;}'
//         document.head.appendChild(style);

//     }
    
// })




// // let edificios = document.querySelector('.op1');
// // let hospitales = document.querySelector('.op2');
// // let estadios = document.querySelector('.op3');

// // console.log(edificios.value);
// // console.log(hospitales.value);
// // console.log(estadios.value);

