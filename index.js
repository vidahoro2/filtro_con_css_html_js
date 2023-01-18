// const categorias = ['estructuras','instalaciones','sostenibilidad'];
// const usos = ['parquing','centroatencionprimaria','civil','comercial','cultural','docente','deportivo','hospitalario','hotelero','industrial','oficinas','recintofiral','residencial','servicios','sociosanitario'];
// const ubicaciones =['españa','andorra','ecuador','marruecos','argelia']
// const select = document.querySelector('select');
// const select2 = document.querySelector('.selectuso');
// const select3 = document.querySelector('.selectPlace');
// const rangeSizeIn = document.querySelector('#rangeSizeIn');
// const rangeYearIn = document.querySelector('#rangeYearIn');


// const project4 = document.querySelector('.project4');
// const project6 = document.querySelector('.project6');
// const project7 = document.querySelector('.project7');
// const project8 = document.querySelector('.project8');
// const project10 = document.querySelector('.project10')
// const project12 = document.querySelector('.project12');
// const project15 = document.querySelector('.project15');
// const project16 = document.querySelector('.project16');
// const project17 = document.querySelector('.project17');
// const project18 = document.querySelector('.project18');
// const project20 = document.querySelector('.project20');
// const project21 = document.querySelector('.project21');
// const project24= document.querySelector('.project24');
// const image4 = document.querySelector('#image4');
// const image6 = document.querySelector('#image6');
// const image7 = document.querySelector('#image7');
// const image8 = document.querySelector('#image8');
// const image10 = document.querySelector('#image10');
// const image15 = document.querySelector('#image15');
// const image16 = document.querySelector('#image16');
// const image17 = document.querySelector('#image17');
// const image18 = document.querySelector('#image18');
// const image20 = document.querySelector('#image20');
// const image21 = document.querySelector('#image21');
// const image24 = document.querySelector('#image24');
// const imageBigProject12 = document.querySelector('#image12');

// let style = document.createElement('style');

// const categoria = select.addEventListener('change',()=>{

//     if(select.value == categorias[0]){
//         style.innerHTML = '[data-category="instalaciones"],[data-category="sostenibilidad"]{display:none;} '
//         document.head.appendChild(style);        
        
//     }
//     if(select.value == categorias[1]){
//         style.innerHTML = '[data-category="estructuras"],[data-category="sostenibilidad"]{display:none;}'
//         document.head.appendChild(style);
//     }
//     if(select.value == categorias[2]){
//         style.innerHTML = '[data-category="instalaciones"],[data-category="estructuras"]{display:none;}'
//         document.head.appendChild(style);
//     }


// });

// const uso =select2.addEventListener('change',()=>{
//     if(select2.value == usos[0]){
//         style.innerHTML = '[uso="centroatencionprimaria"],[uso="civil"],[uso="comercial"],[uso="cultural"],[uso="docente"],[uso="deportivo"],[uso="hospitalario"],[uso="hotelero"],[uso="industrial"],[uso="oficinas"],[uso="recintofiral"],[uso="residencial"],[uso="servicios"],[uso="sociosanitario"]{display:none;}'
//         document.head.appendChild(style);

//     }
//     if(select2.value == usos[1]){
//         style.innerHTML = '[uso="parquing"],[uso="civil"],[uso="comercial"],[uso="cultural"],[uso="docente"],[uso="deportivo"],[uso="hospitalario"],[uso="hotelero"],[uso="industrial"],[uso="oficinas"],[uso="recintofiral"],[uso="residencial"],[uso="servicios"],[uso="sociosanitario"]{display:none;}'
//         document.head.appendChild(style);

//     }
//     if(select2.value == usos[2]){
//         style.innerHTML = '[uso="parquing"],[uso="centroatencionprimaria"],[uso="comercial"],[uso="cultural"],[uso="docente"],[uso="deportivo"],[uso="hospitalario"],[uso="hotelero"],[uso="industrial"],[uso="oficinas"],[uso="recintofiral"],[uso="residencial"],[uso="servicios"],[uso="sociosanitario"]{display:none;}'
//         document.head.appendChild(style);

//     }
//     if(select2.value == usos[3]){
//         style.innerHTML = '[uso="parquing"],[uso="centroatencionprimaria"],[uso="civil"],[uso="cultural"],[uso="docente"],[uso="deportivo"],[uso="hospitalario"],[uso="hotelero"],[uso="industrial"],[uso="oficinas"],[uso="recintofiral"],[uso="residencial"],[uso="servicios"],[uso="sociosanitario"]{display:none;}'
//         document.head.appendChild(style);

//     }
//     if(select2.value == usos[4]){
//         style.innerHTML = '[uso="parquing"],[uso="centroatencionprimaria"],[uso="civil"],[uso="comercial"],[uso="docente"],[uso="deportivo"],[uso="hospitalario"],[uso="hotelero"],[uso="industrial"],[uso="oficinas"],[uso="recintofiral"],[uso="residencial"],[uso="servicios"],[uso="sociosanitario"]{display:none;}'
//         document.head.appendChild(style);

//     }//Docente
//     if(select2.value == usos[5]){
//         project16.classList.remove('big-project');
//         project16.classList.add('project');
//         image16.classList.remove('image-big-project');
//         image16.classList.add('image-project');
//         style.innerHTML = '[uso="parquing"],[uso="centroatencionprimaria"],[uso="civil"],[uso="comercial"],[uso="cultural"],[uso="deportivo"],[uso="hospitalario"],[uso="hotelero"],[uso="industrial"],[uso="oficinas"],[uso="recintofiral"],[uso="residencial"],[uso="servicios"],[uso="sociosanitario"]{display:none;}'
//         document.head.appendChild(style);

//     }//Deportivo
//     if(select2.value == usos[6]){
//         project20.classList.remove('big-project');
//         project20.classList.add('project');
//         image20.classList.remove('image-big-project');
//         image20.classList.add('image-project');
//         style.innerHTML = '[uso="parquing"],[uso="centroatencionprimaria"],[uso="civil"],[uso="comercial"],[uso="cultural"],[uso="docente"],[uso="hospitalario"],[uso="hotelero"],[uso="industrial"],[uso="oficinas"],[uso="recintofiral"],[uso="residencial"],[uso="servicios"],[uso="sociosanitario"]{display:none;}'
//         document.head.appendChild(style);

//     }//Hospitalario
//     if(select2.value == usos[7]){
//         project7.classList.remove('project');
//         project7.classList.add('big-project,project8');
//         image7.classList.remove('image-project');
//         image7.classList.add('image-big-project' );
//         project12.classList.remove('big-project');
//         project12.classList.add('project');
//         imageBigProject12.classList.remove('image-big-project');
//         imageBigProject12.classList.add('image-project');
//         style.innerHTML = '[uso="parquing"],[uso="centroatencionprimaria"],[uso="civil"],[uso="comercial"],[uso="cultural"],[uso="docente"],[uso="deportivo"],[uso="hotelero"],[uso="industrial"],[uso="oficinas"],[uso="recintofiral"],[uso="residencial"],[uso="servicios"],[uso="sociosanitario"]{display:none;}'
//         document.head.appendChild(style);

//     }
//     if(select2.value == usos[8]){
//         style.innerHTML = '[uso="parquing"],[uso="centroatencionprimaria"],[uso="civil"],[uso="comercial"],[uso="cultural"],[uso="docente"],[uso="deportivo"],[uso="hospitalario"],[uso="industrial"],[uso="oficinas"],[uso="recintofiral"],[uso="residencial"],[uso="servicios"],[uso="sociosanitario"]{display:none;}'
//         document.head.appendChild(style);

//     }
//     if(select2.value == usos[9]){
//         style.innerHTML = '[uso="parquing"],[uso="centroatencionprimaria"],[uso="civil"],[uso="comercial"],[uso="cultural"],[uso="docente"],[uso="deportivo"],[uso="hospitalario"],[uso="hotelero"],[uso="oficinas"],[uso="recintofiral"],[uso="residencial"],[uso="servicios"],[uso="sociosanitario"]{display:none;}'
//         document.head.appendChild(style);

//     }

//     //Oficinas
//     if(select2.value == usos[10]){
//         project4.classList.remove('big-project');
//         project4.classList.add('project');
//         image4.classList.remove('image-big-project');
//         image4.classList.add('image-project');
//         project8.classList.remove('big-project');
//         project8.classList.add('project');
//         image8.classList.remove('image-big-project');
//         image8.classList.add('image-project');
//         project18.classList.remove('project');
//         project18.classList.add('big-project');
//         image18.classList.remove('image-project');
//         image18.classList.add('image-big-project');
//         style.innerHTML = '[uso="parquing"],[uso="centroatencionprimaria"],[uso="civil"],[uso="comercial"],[uso="cultural"],[uso="docente"],[uso="deportivo"],[uso="hospitalario"],[uso="hotelero"],[uso="industrial"],[uso="recintofiral"],[uso="residencial"],[uso="servicios"],[uso="sociosanitario"]{display:none;}'
//         document.head.appendChild(style);

//     }
//     //Recintofiral
//     if(select2.value == usos[11]){
//         style.innerHTML = '[uso="parquing"],[uso="centroatencionprimaria"],[uso="civil"],[uso="comercial"],[uso="cultural"],[uso="docente"],[uso="deportivo"],[uso="hospitalario"],[uso="hotelero"],[uso="industrial"],[uso="oficinas"],[uso="residencial"],[uso="servicios"],[uso="sociosanitario"]{display:none;}'
//         document.head.appendChild(style);
        
//     }
//     //residencial
//     if(select2.value == usos[12]){
//         style.innerHTML =  '[uso="parquing"],[uso="centroatencionprimaria"],[uso="civil"],[uso="comercial"],[uso="cultural"],[uso="docente"],[uso="deportivo"],[uso="hospitalario"],[uso="hotelero"],[uso="industrial"],[uso="oficinas"],[uso="recintofiral"],[uso="servicios"],[uso="sociosanitario"]{display:none;}'
//         document.head.appendChild(style);

//     }//servicios
//     if(select2.value == usos[13]){
//         style.innerHTML =  '[uso="parquing"],[uso="centroatencionprimaria"],[uso="civil"],[uso="comercial"],[uso="cultural"],[uso="docente"],[uso="deportivo"],[uso="hospitalario"],[uso="hotelero"],[uso="industrial"],[uso="oficinas"],[uso="recintofiral"],[uso="residencial"],[uso="sociosanitario"]{display:none;}'
//         document.head.appendChild(style);

//     }//sociosanitario
//     if(select2.value == usos[14]){
//         style.innerHTML =  '[uso="parquing"],[uso="centroatencionprimaria"],[uso="civil"],[uso="comercial"],[uso="cultural"],[uso="docente"],[uso="deportivo"],[uso="hospitalario"],[uso="hotelero"],[uso="industrial"],[uso="oficinas"],[uso="recintofiral"],[uso="residencial"],[uso="servicios"]{display:none;}'
//         document.head.appendChild(style);

//     }


// });


// const ubicacion = select3.addEventListener('change',()=>{
//     //España
//     if (select3.value == ubicaciones[0]){
//         project16.classList.remove('big-project');
//         project16.classList.add('project');
//         image16.classList.remove('image-big-project');
//         image16.classList.add('image-project');
//         project17.classList.remove('project');
//         project17.classList.add('big-project,project8');
//         image17.classList.remove('image-project');
//         image17.classList.add('image-big-project','espacioabajo' );
//         project20.classList.remove('big-project');
//         project20.classList.add('project');
//         image20.classList.remove('image-big-project');
//         image20.classList.add('image-project');
//         project21.classList.remove('project');
//         project21.classList.add('big-project','setupdown');
//         image21.classList.remove('image-project');
//         image21.classList.add('image-big-project' );
//         project24.classList.remove('big-project');
//         project24.classList.add('project');
//         image24.classList.remove('image-big-project');
//         image24.classList.add('image-project');
//         style.innerHTML = '[ubicacion="andorra"],[ubicacion="ecuador"],[ubicacion="marruecos"],[ubicacion="argelia"]{display:none;}'
//         document.head.appendChild(style);
//     }//Andorra
//     if (select3.value == ubicaciones[1]){
//         style.innerHTML = '[ubicacion="españa"],[ubicacion="ecuador"],[ubicacion="marruecos"],[ubicacion="argelia"]{display:none;}'
//         document.head.appendChild(style);
//     }  //Ecuador
//     if (select3.value == ubicaciones[2]){
//         project12.classList.remove('big-project');
//         project12.classList.add('project');
//         imageBigProject12.classList.remove('image-big-project');
//         imageBigProject12.classList.add('image-project');
//         style.innerHTML = '[ubicacion="españa"],[ubicacion="andorra"],[ubicacion="marruecos"],[ubicacion="argelia"]{display:none;}'
//         document.head.appendChild(style);

//     }
//     if (select3.value == ubicaciones[3]){
//         style.innerHTML = '[ubicacion="españa"],[ubicacion="andorra"],[ubicacion="ecuador"],[ubicacion="argelia"]{display:none;}'
//         document.head.appendChild(style);
//     }
//     if (select3.value == ubicaciones[4]){
//         style.innerHTML = '[ubicacion="españa"],[ubicacion="andorra"],[ubicacion="ecuador"],[ubicacion="marruecos"]{display:none;}'
//         document.head.appendChild(style);
//     }


// });


// rangeYearIn.addEventListener('change',()=>{

//     if(rangeYearIn.valueAsNumber >= 2002 && rangeYearIn.valueAsNumber <= 2006 ){
//         style.innerHTML = '.project1,.project2,.project4,.project5,.project6,.project7,.project8,.project9,.project10,.project11,.project12,.project13,.project14,.project15,.project16,.project17,.project18,.project19,.project20,.project21,.project23,.project24{display:none;}'
//         document.head.appendChild(style);
//     }

//     if(rangeYearIn.valueAsNumber >= 2007 && rangeYearIn.valueAsNumber <= 2011 ){
//         style.innerHTML = '.project1,.project2,.project3,.project4,.project6,.project8,.project10,.project11,.project12,.project13,.project14,.project15,.project16,.project17,.project18,.project19,.project23,.project24{display:none;}'
//         document.head.appendChild(style);
//     }

//     if(rangeYearIn.valueAsNumber >= 2012 && rangeYearIn.valueAsNumber <= 2016 ){
//         project4.classList.remove('big-project');
//         project4.classList.add('project');
//         image4.classList.remove('image-big-project');
//         image4.classList.add('image-project');
//         project10.classList.remove('project');
//         project10.classList.add('big-project');
//         image10.classList.remove('image-project');
//         image10.classList.add('image-big-project');
//         project12.classList.remove('big-project');
//         project12.classList.add('project');
//         imageBigProject12.classList.remove('image-big-project');
//         imageBigProject12.classList.add('image-project');
//         project15.classList.remove('project');
//         project15.classList.add("big-project","espacioabajo");
//         image15.classList.remove('image-project');
//         image15.classList.add('image-big-project');
//         project16.classList.remove('big-project');
//         project16.classList.add('project');
//         image16.classList.remove('image-big-project');
//         image16.classList.add('image-project');
//         style.innerHTML = '.project3,.project5,.project6,.project7,.project8,.project9,.project11,.project18,.project19,.project20,.project22,.project23,.project24{display:none;}'
//         document.head.appendChild(style);
//     }
//     if(rangeYearIn.valueAsNumber >= 2017 && rangeYearIn.valueAsNumber <= 2022  ){
//         project4.classList.remove('big-project');
//         project4.classList.add('project');
//         image4.classList.remove('image-big-project');
//         image4.classList.add('image-project');
//         project6.classList.remove('project');
//         project6.classList.add('big-project','espacioabajo');
//         image6.classList.remove('image-project');
//         image6.classList.add('image-big-project');
//         project8.classList.remove('big-project');
//         project8.classList.add('project');
//         image8.classList.remove('image-big-project');
//         image8.classList.add('image-project');
//         project12.classList.remove('big-project');
//         project12.classList.add('project');
//         imageBigProject12.classList.remove('image-big-project');
//         imageBigProject12.classList.add('image-project');
//         project18.classList.remove('project');
//         project18.classList.add('big-project');
//         image18.classList.remove('image-project');
//         image18.classList.add('image-big-project');
//         project24.classList.remove('big-project');
//         project24.classList.add('project');
//         image24.classList.remove('image-big-project');
//         image24.classList.add('image-project');
//         style.innerHTML = '.project3,.project5,.project7,.project9,.project10,.project13,.project14,.project15,.project16,.project17,.project20,.project21,.project22{display:none;}'
//         document.head.appendChild(style);
//     }


// });

// rangeSizeIn.addEventListener('change',()=>{

//     if(rangeSizeIn.valueAsNumber >= 2000 && rangeSizeIn.valueAsNumber <= 20000 ){
//         style.innerHTML = '.project2,.project4,.project5,.project7,.project10,.project11,.project12,.project14{display:none;}'
//         document.head.appendChild(style);
//     }
//     if(rangeSizeIn.valueAsNumber >= 20000 && rangeSizeIn.valueAsNumber <= 50000 ){
//         style.innerHTML = '.project1,.project3,.project4,.project6,.project7,.project8,.project9,.project10,.project13,.project14,.project15,.project16,.project17,.project18,.project19,.project20,.project21,.project22,.project23,.project24{display:none;}'
//         document.head.appendChild(style);
//     }
//     if(rangeSizeIn.valueAsNumber >= 50000 && rangeSizeIn.valueAsNumber <= 80000 ){
//         project4.classList.remove('big-project');
//         project4.classList.add('project');
//         image4.classList.remove('image-big-project');
//         image4.classList.add('image-project');
//         style.innerHTML = '.project1,.project2,.project3,.project5,.project6,.project7,.project8,.project9,.project11,.project12,.project13,.project14,.project15,.project16,.project17,.project18,.project19,.project20,.project21,.project22,.project23,.project24{display:none;}'
//         document.head.appendChild(style);
//     }
//     if(rangeSizeIn.valueAsNumber >= 140000 && rangeSizeIn.valueAsNumber <= 180000 ){
//         style.innerHTML = '.project1,.project2,.project3,.project4,.project5,.project6,.project7,.project8,.project9,.project10,.project11,.project12,.project13,.project15,.project16,.project17,.project18,.project19,.project20,.project21,.project22,.project23,.project24{display:none;}'
//         document.head.appendChild(style);
//     }

// });



//codigo para  la funcionalidad en apariencia del filtro Tamaño
function controlFromInput(fromSlider, fromInput, toInput, controlSlider) {
    const [from, to] = getParsed(fromInput, toInput);
    fillSlider(fromInput, toInput, '#C6C6C6', '#515151', controlSlider);
    if (from > to) {
        fromSlider.value = to;
        fromInput.value = to;
    } else {
        fromSlider.value = from;
    }
}
    
function controlToInput(toSlider, fromInput, toInput, controlSlider) {
    const [from, to] = getParsed(fromInput, toInput);
    fillSlider(fromInput, toInput, '#C6C6C6', '#515151', controlSlider);
    setToggleAccessible(toInput);
    if (from <= to) {
        toSlider.value = to;
        toInput.value = to;
    } else {
        toInput.value = from;
    }
}

function controlFromSlider(fromSlider, toSlider, fromInput) {
  const [from, to] = getParsed(fromSlider, toSlider);
  fillSlider(fromSlider, toSlider, '#C6C6C6', '#515151', toSlider);
  if (from > to) {
    fromSlider.value = to;
    fromInput.value = to;
  } else {
    fromInput.value = from;
  }
}

function controlToSlider(fromSlider, toSlider, toInput) {
  const [from, to] = getParsed(fromSlider, toSlider);
  fillSlider(fromSlider, toSlider, '#C6C6C6', '#515151', toSlider);
  setToggleAccessible(toSlider);
  if (from <= to) {
    toSlider.value = to;
    toInput.value = to;
  } else {
    toInput.value = from;
    toSlider.value = from;
  }
}

function getParsed(currentFrom, currentTo) {
  const from = parseInt(currentFrom.value, 10);
  const to = parseInt(currentTo.value, 10);
  return [from, to];
}

function fillSlider(from, to, sliderColor, rangeColor, controlSlider) {
    const rangeDistance = to.max-to.min;
    const fromPosition = from.value - to.min;
    const toPosition = to.value - to.min;
    controlSlider.style.background = `linear-gradient(
      to right,
      ${sliderColor} 0%,
      ${sliderColor} ${(fromPosition)/(rangeDistance)*100}%,
      ${rangeColor} ${((fromPosition)/(rangeDistance))*100}%,
      ${rangeColor} ${(toPosition)/(rangeDistance)*100}%, 
      ${sliderColor} ${(toPosition)/(rangeDistance)*100}%, 
      ${sliderColor} 100%)`;
}

function setToggleAccessible(currentTarget) {
  const toSlider = document.querySelector('#toSlider');
  if (Number(currentTarget.value) <= 0 ) {
    toSlider.style.zIndex = 2;
  } else {
    toSlider.style.zIndex = 0;
  }
}

const fromSlider = document.querySelector('#fromSlider');
const toSlider = document.querySelector('#toSlider');
const fromInput = document.querySelector('#fromInput');
const toInput = document.querySelector('#toInput');
fillSlider(fromSlider, toSlider, '#C6C6C6', '#515151', toSlider);
setToggleAccessible(toSlider);

fromSlider.oninput = () => controlFromSlider(fromSlider, toSlider, fromInput);
toSlider.oninput = () => controlToSlider(fromSlider, toSlider, toInput);
fromInput.oninput = () => controlFromInput(fromSlider, fromInput, toInput, toSlider);
toInput.oninput = () => controlToInput(toSlider, fromInput, toInput, toSlider);


//codigo para  la funcionalidad en apariencia del filtro Año
function controlfromInput2(fromSlider2, fromInput2, toInput2, controlSlider) {
  const [from, to] = getParsed(fromInput2, toInput2);
  fillSlider(fromInput2, toInput2, '#C6C6C6', '#515151', controlSlider);
  if (from > to) {
      fromSlider2.value = to;
      fromInput2.value = to;
  } else {
      fromSlider2.value = from;
  }
}
  
function controltoInput22(toSlider2, fromInput2, toInput2, controlSlider) {
  const [from, to] = getParsed(fromInput2, toInput2);
  fillSlider(fromInput2, toInput2, '#C6C6C6', '#515151', controlSlider);
  setToggleAccessible(toInput2);
  if (from <= to) {
      toSlider2.value = to;
      toInput2.value = to;
  } else {
      toInput2.value = from;
  }
}

function controlfromSlider2(fromSlider2, toSlider2, fromInput2) {
const [from, to] = getParsed(fromSlider2, toSlider2);
fillSlider(fromSlider2, toSlider2, '#C6C6C6', '#515151', toSlider2);
if (from > to) {
  fromSlider2.value = to;
  fromInput2.value = to;
} else {
  fromInput2.value = from;
}
}

function controltoSlider2(fromSlider2, toSlider2, toInput2) {
const [from, to] = getParsed(fromSlider2, toSlider2);
fillSlider(fromSlider2, toSlider2, '#C6C6C6', '#515151', toSlider2);
setToggleAccessible(toSlider2);
if (from <= to) {
  toSlider2.value = to;
  toInput2.value = to;
} else {
  toInput2.value = from;
  toSlider2.value = from;
}
}

function getParsed(currentFrom, currentTo) {
const from = parseInt(currentFrom.value, 10);
const to = parseInt(currentTo.value, 10);
return [from, to];
}

function fillSlider(from, to, sliderColor, rangeColor, controlSlider) {
  const rangeDistance = to.max-to.min;
  const fromPosition = from.value - to.min;
  const toPosition = to.value - to.min;
  controlSlider.style.background = `linear-gradient(
    to right,
    ${sliderColor} 0%,
    ${sliderColor} ${(fromPosition)/(rangeDistance)*100}%,
    ${rangeColor} ${((fromPosition)/(rangeDistance))*100}%,
    ${rangeColor} ${(toPosition)/(rangeDistance)*100}%, 
    ${sliderColor} ${(toPosition)/(rangeDistance)*100}%, 
    ${sliderColor} 100%)`;
}

function setToggleAccessible(currentTarget) {
const toSlider2 = document.querySelector('#toSlider2');
if (Number(currentTarget.value) <= 0 ) {
  toSlider2.style.zIndex = 2;
} else {
  toSlider2.style.zIndex = 0;
}
}

const fromSlider2 = document.querySelector('#fromSlider2');
const toSlider2 = document.querySelector('#toSlider2');
const fromInput2 = document.querySelector('#fromInput2');
const toInput2 = document.querySelector('#toInput2');
fillSlider(fromSlider2, toSlider2, '#C6C6C6', '#515151', toSlider2);
setToggleAccessible(toSlider2);

fromSlider2.oninput = () => controlfromSlider2(fromSlider2, toSlider2, fromInput2);
toSlider2.oninput = () => controltoSlider2(fromSlider2, toSlider2, toInput2);
fromInput2.oninput = () => controlfromInput2(fromSlider2, fromInput2, toInput2, toSlider2);
toInput2.oninput = () => controltoInput2(toSlider2, fromInput2, toInput2, toSlider2);