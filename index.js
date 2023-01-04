const categorias = ['estructuras','instalaciones','sostenibilidad'];
const usos = ['parquing','centroatencionprimaria','civil','comercial','cultural','docente','deportivo','hospitalario','hotelero','industrial','oficinas','recintofiral','residencial','servicios','sociosanitario'];
const ubicaciones =['españa','andorra','ecuador','marruecos','tunez']
const select = document.querySelector('select');
const select2 = document.querySelector('.selectuso');
const select3 = document.querySelector('.selectPlace');
let style = document.createElement('style');

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

const uso =select2.addEventListener('change',()=>{
    if(select2.value == usos[0]){
        style.innerHTML = '[uso="centroatencionprimaria"],[uso="civil"],[uso="comercial"],[uso="cultural"],[uso="docente"],[uso="deportivo"],[uso="hospitalario"],[uso="hotelero"],[uso="industrial"],[uso="oficinas"],[uso="recintofiral"],[uso="residencial"],[uso="servicios"],[uso="sociosanitario"]{display:none}'
        document.head.appendChild(style);

    }
    if(select2.value == usos[1]){
        style.innerHTML = '[uso="parquing"],[uso="civil"],[uso="comercial"],[uso="cultural"],[uso="docente"],[uso="deportivo"],[uso="hospitalario"],[uso="hotelero"],[uso="industrial"],[uso="oficinas"],[uso="recintofiral"],[uso="residencial"],[uso="servicios"],[uso="sociosanitario"]{display:none}'
        document.head.appendChild(style);

    }
    if(select2.value == usos[2]){
        style.innerHTML = '[uso="parquing"],[uso="centroatencionprimaria"],[uso="comercial"],[uso="cultural"],[uso="docente"],[uso="deportivo"],[uso="hospitalario"],[uso="hotelero"],[uso="industrial"],[uso="oficinas"],[uso="recintofiral"],[uso="residencial"],[uso="servicios"],[uso="sociosanitario"]{display:none}'
        document.head.appendChild(style);

    }
    if(select2.value == usos[3]){
        style.innerHTML = '[uso="parquing"],[uso="centroatencionprimaria"],[uso="civil"],[uso="cultural"],[uso="docente"],[uso="deportivo"],[uso="hospitalario"],[uso="hotelero"],[uso="industrial"],[uso="oficinas"],[uso="recintofiral"],[uso="residencial"],[uso="servicios"],[uso="sociosanitario"]{display:none}'
        document.head.appendChild(style);

    }
    if(select2.value == usos[4]){
        style.innerHTML = '[uso="parquing"],[uso="centroatencionprimaria"],[uso="civil"],[uso="comercial"],[uso="docente"],[uso="deportivo"],[uso="hospitalario"],[uso="hotelero"],[uso="industrial"],[uso="oficinas"],[uso="recintofiral"],[uso="residencial"],[uso="servicios"],[uso="sociosanitario"]{display:none}'
        document.head.appendChild(style);

    }
    if(select2.value == usos[5]){
        style.innerHTML = '[uso="parquing"],[uso="centroatencionprimaria"],[uso="civil"],[uso="comercial"],[uso="cultural"],[uso="deportivo"],[uso="hospitalario"],[uso="hotelero"],[uso="industrial"],[uso="oficinas"],[uso="recintofiral"],[uso="residencial"],[uso="servicios"],[uso="sociosanitario"]{display:none}'
        document.head.appendChild(style);

    }
    if(select2.value == usos[6]){
        style.innerHTML = '[uso="parquing"],[uso="centroatencionprimaria"],[uso="civil"],[uso="comercial"],[uso="cultural"],[uso="docente"],[uso="hospitalario"],[uso="hotelero"],[uso="industrial"],[uso="oficinas"],[uso="recintofiral"],[uso="residencial"],[uso="servicios"],[uso="sociosanitario"]{display:none}'
        document.head.appendChild(style);

    }
    if(select2.value == usos[7]){
        style.innerHTML = '[uso="parquing"],[uso="centroatencionprimaria"],[uso="civil"],[uso="comercial"],[uso="cultural"],[uso="docente"],[uso="deportivo"],[uso="hotelero"],[uso="industrial"],[uso="oficinas"],[uso="recintofiral"],[uso="residencial"],[uso="servicios"],[uso="sociosanitario"]{display:none}'
        document.head.appendChild(style);

    }
    if(select2.value == usos[8]){
        style.innerHTML = '[uso="parquing"],[uso="centroatencionprimaria"],[uso="civil"],[uso="comercial"],[uso="cultural"],[uso="docente"],[uso="deportivo"],[uso="hospitalario"],[uso="industrial"],[uso="oficinas"],[uso="recintofiral"],[uso="residencial"],[uso="servicios"],[uso="sociosanitario"]{display:none}'
        document.head.appendChild(style);

    }
    if(select2.value == usos[9]){
        style.innerHTML = '[uso="parquing"],[uso="centroatencionprimaria"],[uso="civil"],[uso="comercial"],[uso="cultural"],[uso="docente"],[uso="deportivo"],[uso="hospitalario"],[uso="hotelero"],[uso="oficinas"],[uso="recintofiral"],[uso="residencial"],[uso="servicios"],[uso="sociosanitario"]{display:none}'
        document.head.appendChild(style);

    }
    if(select2.value == usos[10]){
        style.innerHTML = '[uso="parquing"],[uso="centroatencionprimaria"],[uso="civil"],[uso="comercial"],[uso="cultural"],[uso="docente"],[uso="deportivo"],[uso="hospitalario"],[uso="hotelero"],[uso="oficinas"],[uso="industrial"],[uso="recintofiral"],[uso="residencial"],[uso="servicios"],[uso="sociosanitario"]{display:none}'
        document.head.appendChild(style);

    }//-----as-s-s-as--s-sa
    if(select2.value == usos[11]){
        style.innerHTML = '[uso="parquing"],[uso="centroatencionprimaria"],[uso="civil"],[uso="comercial"],[uso="cultural"],[uso="docente"],[uso="deportivo"],[uso="hospitalario"],[uso="hotelero"],[uso="industrial"],[uso="recintofiral"],[uso="residencial"],[uso="servicios"],[uso="sociosanitario"]{display:none}'
        document.head.appendChild(style);

    }
    if(select2.value == usos[12]){
        style.innerHTML =  '[uso="parquing"],[uso="centroatencionprimaria"],[uso="civil"],[uso="comercial"],[uso="cultural"],[uso="docente"],[uso="deportivo"],[uso="hospitalario"],[uso="hotelero"],[uso="industrial"],[uso="oficinas"],[uso="residencial"],[uso="servicios"],[uso="sociosanitario"]{display:none}'
        document.head.appendChild(style);

    }
    if(select2.value == usos[13]){
        style.innerHTML =  '[uso="parquing"],[uso="centroatencionprimaria"],[uso="civil"],[uso="comercial"],[uso="cultural"],[uso="docente"],[uso="deportivo"],[uso="hospitalario"],[uso="hotelero"],[uso="industrial"],[uso="oficinas"],[uso="recintofiral"],[uso="servicios"],[uso="sociosanitario"]{display:none}'
        document.head.appendChild(style);

    }
    if(select2.value == usos[14]){
        style.innerHTML =  '[uso="parquing"],[uso="centroatencionprimaria"],[uso="civil"],[uso="comercial"],[uso="cultural"],[uso="docente"],[uso="deportivo"],[uso="hospitalario"],[uso="hotelero"],[uso="industrial"],[uso="oficinas"],[uso="recintofiral"],[uso="residencial"],[uso="sociosanitario"]{display:none}'
        document.head.appendChild(style);

    }
    if(select2.value == usos[15]){
        style.innerHTML =  '[uso="parquing"],[uso="centroatencionprimaria"],[uso="civil"],[uso="comercial"],[uso="cultural"],[uso="docente"],[uso="deportivo"],[uso="hospitalario"],[uso="hotelero"],[uso="industrial"],[uso="oficinas"],[uso="recintofiral"],[uso="residencial"],[uso="servicios"]{display:none}'
        document.head.appendChild(style);

    }

});



const ubicacion = select3.addEventListener('change',()=>{

    if (select3.value == ubicaciones[0]){
        style.innerHTML = '[ubicacion="andorra"],[ubicacion="ecuador"],[ubicacion="marruecos"],[ubicacion="tunez"]{display:none;}'
        document.head.appendChild(style);
    }
    if (select3.value == ubicaciones[1]){
        style.innerHTML = '[ubicacion="españa"],[ubicacion="ecuador"],[ubicacion="marruecos"],[ubicacion="tunez"]{display:none;}'
        document.head.appendChild(style);
    }
    if (select3.value == ubicaciones[2]){
        style.innerHTML = '[ubicacion="españa"],[ubicacion="andorra"],[ubicacion="marruecos"],[ubicacion="tunez"]{display:none;}'
        document.head.appendChild(style);
    }
    if (select3.value == ubicaciones[3]){
        style.innerHTML = '[ubicacion="españa"],[ubicacion="andorra"],[ubicacion="ecuador"],[ubicacion="tunez"]{display:none;}'
        document.head.appendChild(style);
    }
    if (select3.value == ubicaciones[3]){
        style.innerHTML = '[ubicacion="españa"],[ubicacion="andorra"],[ubicacion="ecuador"],[ubicacion="marruecos"]{display:none;}'
        document.head.appendChild(style);
    }


    

});