const categorias = ['estructuras','instalaciones','sostenibilidad'];
const usos = ['parquing','centroatencionprimaria','civil','comercial','cultural','docente','deportivo','hospitalario','hotelero','industrial','oficinas','recintofiral','residencial','servicios','sociosanitario'];
const ubicaciones =['españa','andorra','ecuador','marruecos','argelia']
const select = document.querySelector('select');
const select2 = document.querySelector('.selectuso');
const select3 = document.querySelector('.selectPlace');
const rangeSize = document.getElementById("rangeSize");
const rangeYearIn = document.querySelector('#rangeYearIn');


const project4 = document.querySelector('.project4');
const project6 = document.querySelector('.project6');
const project7 = document.querySelector('.project7');
const project8 = document.querySelector('.project8');
const project10 = document.querySelector('.project10')
const project12 = document.querySelector('.project12');
const project15 = document.querySelector('.project15');
const project16 = document.querySelector('.project16');
const image4 = document.querySelector('#image4');
const image6 = document.querySelector('#image6');
const image7 = document.querySelector('#image7');
const image8 = document.querySelector('#image8');
const image10 = document.querySelector('#image10');
const image15 = document.querySelector('#image15');
const image16 = document.querySelector('#image16');
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

    if(rangeYearIn.valueAsNumber >= 2002 && rangeYearIn.valueAsNumber <= 2006 ){
        style.innerHTML = '.project1,.project2,.project4,.project5,.project6,.project7,.project8,.project9,.project10,.project11,.project12,.project13,.project14,.project15,.project16,.project17{display:none;}'
        document.head.appendChild(style);
    }

    if(rangeYearIn.valueAsNumber >= 2007 && rangeYearIn.valueAsNumber <= 2011 ){
        style.innerHTML = '.project1,.project2,.project3,.project4,.project6,.project8,.project10,.project11,.project12,.project13,.project14,.project15,.project16,.project17{display:none;}'
        document.head.appendChild(style);
    }

    if(rangeYearIn.valueAsNumber >= 2012 && rangeYearIn.valueAsNumber <= 2016 ){
        project4.classList.remove('big-project');
        project4.classList.add('project');
        image4.classList.remove('image-big-project');
        image4.classList.add('image-project');
        project10.classList.remove('project');
        project10.classList.add('big-project');
        project12.classList.remove('big-project');
        project12.classList.add('project');
        imageBigProject12.classList.remove('image-big-project');
        imageBigProject12.classList.add('image-project');
        project15.classList.remove('project');
        project15.classList.add("big-project","espacioabajo");
        image10.classList.remove('image-project');
        image10.classList.add('image-big-project');
        image15.classList.remove('image-project');
        image15.classList.add('image-big-project');
        project16.classList.remove('big-project');
        project16.classList.add('project');
        image16.classList.remove('image-big-project');
        image16.classList.add('image-project');
        style.innerHTML = '.project3,.project5,.project6,.project7,.project8,.project9,.project11{display:none;}'
        document.head.appendChild(style);
    }
    if(rangeYearIn.valueAsNumber >= 2017 && rangeYearIn.valueAsNumber <= 2022  ){
        project4.classList.remove('big-project');
        project4.classList.add('project');
        image4.classList.remove('image-big-project');
        image4.classList.add('image-project');
        project6.classList.remove('project');
        project6.classList.add('big-project','espacioabajo');
        image6.classList.remove('image-project');
        image6.classList.add('image-big-project');
        project8.classList.remove('big-project');
        project8.classList.add('project');
        image8.classList.remove('image-big-project');
        image8.classList.add('image-project');
        project12.classList.remove('big-project');
        project12.classList.add('project');
        imageBigProject12.classList.remove('image-big-project');
        imageBigProject12.classList.add('image-project');
        style.innerHTML = '.project3,.project5,.project7,.project9,.project10,.project13,.project14,.project15,.project16,.project17{display:none;}'
        document.head.appendChild(style);
    }


});

