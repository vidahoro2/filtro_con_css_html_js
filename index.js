let select = document.querySelector('select');
let style = document.createElement('style');


let categoria = select.addEventListener('change',()=>{

    if (select.value == "edificios"){

        style.innerHTML = '[data-category="edificios"]{display:none;}'
        document.head.appendChild(style);
    }
    if(select.value == "estadios"){
        style.innerHTML = '[data-category="estadios"]{display:none;}'
        document.head.appendChild(style);
    }
    if(select.value == "hospitales"){
        style.innerHTML = '[data-category="hospitales"]{display:none;}'
        document.head.appendChild(style);

    }
    
})




// let edificios = document.querySelector('.op1');
// let hospitales = document.querySelector('.op2');
// let estadios = document.querySelector('.op3');

// console.log(edificios.value);
// console.log(hospitales.value);
// console.log(estadios.value);


