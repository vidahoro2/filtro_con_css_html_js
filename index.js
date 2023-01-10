const categorias = ['estructuras','instalaciones','sostenibilidad'];
const usos = ['parquing','centroatencionprimaria','civil','comercial','cultural','docente','deportivo','hospitalario','hotelero','industrial','oficinas','recintofiral','residencial','servicios','sociosanitario'];
const ubicaciones =['españa','andorra','ecuador','marruecos','argelia']
const select = document.querySelector('select');
const select2 = document.querySelector('.selectuso');
const select3 = document.querySelector('.selectPlace');
const rangeSize = document.getElementById("rangeSize");
const rangeYearIn = document.querySelector('#rangeYearIn');
// let rangeSizeValues = rangeSize.valueAsNumber;
// let rangeYearValues =  rangeYearIn.valueAsNumber;

const project7 = document.querySelector('.project7');
const project12 = document.querySelector('.project12');
const image7 = document.querySelector('#image7');
const imageBigProject12 = document.querySelector('#image12');

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
        style.innerHTML = '[uso="centroatencionprimaria"],[uso="civil"],[uso="comercial"],[uso="cultural"],[uso="docente"],[uso="deportivo"],[uso="hospitalario"],[uso="hotelero"],[uso="industrial"],[uso="oficinas"],[uso="recintofiral"],[uso="residencial"],[uso="servicios"],[uso="sociosanitario"]{display:none;}'
        document.head.appendChild(style);

    }
    if(select2.value == usos[1]){
        style.innerHTML = '[uso="parquing"],[uso="civil"],[uso="comercial"],[uso="cultural"],[uso="docente"],[uso="deportivo"],[uso="hospitalario"],[uso="hotelero"],[uso="industrial"],[uso="oficinas"],[uso="recintofiral"],[uso="residencial"],[uso="servicios"],[uso="sociosanitario"]{display:none;}'
        document.head.appendChild(style);

    }
    if(select2.value == usos[2]){
        style.innerHTML = '[uso="parquing"],[uso="centroatencionprimaria"],[uso="comercial"],[uso="cultural"],[uso="docente"],[uso="deportivo"],[uso="hospitalario"],[uso="hotelero"],[uso="industrial"],[uso="oficinas"],[uso="recintofiral"],[uso="residencial"],[uso="servicios"],[uso="sociosanitario"]{display:none;}'
        document.head.appendChild(style);

    }
    if(select2.value == usos[3]){
        style.innerHTML = '[uso="parquing"],[uso="centroatencionprimaria"],[uso="civil"],[uso="cultural"],[uso="docente"],[uso="deportivo"],[uso="hospitalario"],[uso="hotelero"],[uso="industrial"],[uso="oficinas"],[uso="recintofiral"],[uso="residencial"],[uso="servicios"],[uso="sociosanitario"]{display:none;}'
        document.head.appendChild(style);

    }
    if(select2.value == usos[4]){
        style.innerHTML = '[uso="parquing"],[uso="centroatencionprimaria"],[uso="civil"],[uso="comercial"],[uso="docente"],[uso="deportivo"],[uso="hospitalario"],[uso="hotelero"],[uso="industrial"],[uso="oficinas"],[uso="recintofiral"],[uso="residencial"],[uso="servicios"],[uso="sociosanitario"]{display:none;}'
        document.head.appendChild(style);

    }
    if(select2.value == usos[5]){
        style.innerHTML = '[uso="parquing"],[uso="centroatencionprimaria"],[uso="civil"],[uso="comercial"],[uso="cultural"],[uso="deportivo"],[uso="hospitalario"],[uso="hotelero"],[uso="industrial"],[uso="oficinas"],[uso="recintofiral"],[uso="residencial"],[uso="servicios"],[uso="sociosanitario"]{display:none;}'
        document.head.appendChild(style);

    }
    if(select2.value == usos[6]){
        style.innerHTML = '[uso="parquing"],[uso="centroatencionprimaria"],[uso="civil"],[uso="comercial"],[uso="cultural"],[uso="docente"],[uso="hospitalario"],[uso="hotelero"],[uso="industrial"],[uso="oficinas"],[uso="recintofiral"],[uso="residencial"],[uso="servicios"],[uso="sociosanitario"]{display:none;}'
        document.head.appendChild(style);

    }//Hospitalario
    if(select2.value == usos[7]){
        project7.classList.remove('project');
        project7.classList.add('big-project,project8');
        image7.classList.remove('image-project');
        image7.classList.add('image-big-project');
        project12.classList.remove('big-project');
        project12.classList.add('project');
        imageBigProject12.classList.remove('image-big-project');
        imageBigProject12.classList.add('image-project');
        style.innerHTML = '[uso="parquing"],[uso="centroatencionprimaria"],[uso="civil"],[uso="comercial"],[uso="cultural"],[uso="docente"],[uso="deportivo"],[uso="hotelero"],[uso="industrial"],[uso="oficinas"],[uso="recintofiral"],[uso="residencial"],[uso="servicios"],[uso="sociosanitario"]{display:none;}'
        document.head.appendChild(style);

    }
    if(select2.value == usos[8]){
        style.innerHTML = '[uso="parquing"],[uso="centroatencionprimaria"],[uso="civil"],[uso="comercial"],[uso="cultural"],[uso="docente"],[uso="deportivo"],[uso="hospitalario"],[uso="industrial"],[uso="oficinas"],[uso="recintofiral"],[uso="residencial"],[uso="servicios"],[uso="sociosanitario"]{display:none;}'
        document.head.appendChild(style);

    }
    if(select2.value == usos[9]){
        style.innerHTML = '[uso="parquing"],[uso="centroatencionprimaria"],[uso="civil"],[uso="comercial"],[uso="cultural"],[uso="docente"],[uso="deportivo"],[uso="hospitalario"],[uso="hotelero"],[uso="oficinas"],[uso="recintofiral"],[uso="residencial"],[uso="servicios"],[uso="sociosanitario"]{display:none;}'
        document.head.appendChild(style);

    }

    //Oficinas
    if(select2.value == usos[10]){
        
        style.innerHTML = '[uso="parquing"],[uso="centroatencionprimaria"],[uso="civil"],[uso="comercial"],[uso="cultural"],[uso="docente"],[uso="deportivo"],[uso="hospitalario"],[uso="hotelero"],[uso="industrial"],[uso="recintofiral"],[uso="residencial"],[uso="servicios"],[uso="sociosanitario"]{display:none;}'
        document.head.appendChild(style);

    }
    //Recintofiral
    if(select2.value == usos[11]){
        style.innerHTML = '[uso="parquing"],[uso="centroatencionprimaria"],[uso="civil"],[uso="comercial"],[uso="cultural"],[uso="docente"],[uso="deportivo"],[uso="hospitalario"],[uso="hotelero"],[uso="industrial"],[uso="oficinas"],[uso="residencial"],[uso="servicios"],[uso="sociosanitario"]{display:none;}'
        document.head.appendChild(style);
        
    }
    //residencial
    if(select2.value == usos[12]){
        style.innerHTML =  '[uso="parquing"],[uso="centroatencionprimaria"],[uso="civil"],[uso="comercial"],[uso="cultural"],[uso="docente"],[uso="deportivo"],[uso="hospitalario"],[uso="hotelero"],[uso="industrial"],[uso="oficinas"],[uso="recintofiral"],[uso="servicios"],[uso="sociosanitario"]{display:none;}'
        document.head.appendChild(style);

    }//servicios
    if(select2.value == usos[13]){
        style.innerHTML =  '[uso="parquing"],[uso="centroatencionprimaria"],[uso="civil"],[uso="comercial"],[uso="cultural"],[uso="docente"],[uso="deportivo"],[uso="hospitalario"],[uso="hotelero"],[uso="industrial"],[uso="oficinas"],[uso="recintofiral"],[uso="residencial"],[uso="sociosanitario"]{display:none;}'
        document.head.appendChild(style);

    }//sociosanitario
    if(select2.value == usos[14]){
        style.innerHTML =  '[uso="parquing"],[uso="centroatencionprimaria"],[uso="civil"],[uso="comercial"],[uso="cultural"],[uso="docente"],[uso="deportivo"],[uso="hospitalario"],[uso="hotelero"],[uso="industrial"],[uso="oficinas"],[uso="recintofiral"],[uso="residencial"],[uso="servicios"]{display:none;}'
        document.head.appendChild(style);

    }


});


const ubicacion = select3.addEventListener('change',()=>{
    //España
    if (select3.value == ubicaciones[0]){
        style.innerHTML = '[ubicacion="andorra"],[ubicacion="ecuador"],[ubicacion="marruecos"],[ubicacion="argelia"]{display:none;}'
        document.head.appendChild(style);
    }//Andorra
    if (select3.value == ubicaciones[1]){
        style.innerHTML = '[ubicacion="españa"],[ubicacion="ecuador"],[ubicacion="marruecos"],[ubicacion="argelia"]{display:none;}'
        document.head.appendChild(style);
    }  //Ecuador
    if (select3.value == ubicaciones[2]){
        project12.classList.remove('big-project');
        project12.classList.add('project');
        imageBigProject12.classList.remove('image-big-project');
        imageBigProject12.classList.add('image-project');
        style.innerHTML = '[ubicacion="españa"],[ubicacion="andorra"],[ubicacion="marruecos"],[ubicacion="argelia"]{display:none;}'
        document.head.appendChild(style);

    }
    if (select3.value == ubicaciones[3]){
        style.innerHTML = '[ubicacion="españa"],[ubicacion="andorra"],[ubicacion="ecuador"],[ubicacion="argelia"]{display:none;}'
        document.head.appendChild(style);
    }
    if (select3.value == ubicaciones[4]){
        style.innerHTML = '[ubicacion="españa"],[ubicacion="andorra"],[ubicacion="ecuador"],[ubicacion="marruecos"]{display:none;}'
        document.head.appendChild(style);
    }


});


rangeYearIn.addEventListener('change',()=>{

    console.log("el valor se ha cambiado a: ", rangeYearIn.valueAsNumber);

});

