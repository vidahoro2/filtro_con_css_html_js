const select = document.querySelector('select');
const select2 = document.querySelector('.selectuso');
const select3 = document.querySelector('.selectPlace');
const rangeSizeIn = document.querySelector('#rangeSizeIn');
const rangeYearIn = document.querySelector('#rangeYearIn');
const searchProject = document.querySelector('#search-project');
const projectsContainer = document.querySelector('.projects-container');
const sl1 = document.querySelector('.sl1');
const sl2 = document.querySelector('.sl2');
const fc1 = document.querySelector('.fc1');
const fc2 = document.querySelector('.fc2');


let style = document.createElement('style');



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


const projectList =[];

projectList.push({
  image:'https://bis.brandsholdingcompany.com/wp-content/uploads/2022/12/SG1771_0319-2-scaled.jpg',
  title:'Lycée Français',
  description:'La escuela infantil del Liceo Francés de Barcelona se sitúa en la calle Munner. El proyecto prevé derribar todos los edificios existentes excepto la Villa principal.',
  data_category:'estructuras',
  location:'españa',
  use:'docente',
  size:3400,
  year:2017,
  onclick:"location.href='https://bis.brandsholdingcompany.com/lycee-francais/'",

})

projectList.push({
  image:'https://bis.brandsholdingcompany.com/wp-content/uploads/2022/12/ALC%CC%A7AT-def-scaled.jpg',
  title:'Nueva Clínica Girona',
  description:'La Nueva Clínica Girona tiene forma rectangular y se divide en dos bloques extremos (A y C) y un bloque central (B).',
  data_category:'estructuras',
  location:'españa',
  use:'hospitalario',
  size:39713,
  year:2016,
  onclick:"location.href='https://bis.brandsholdingcompany.com/nueva-clinica-girona/'",

})

projectList.push({
  image:'https://bis.brandsholdingcompany.com/wp-content/uploads/2022/10/Vall-Hebron.jpg',
  title:' Passeig de la Vall d´Hebron ',
  description:' El gimnasio existente se derribó para poder ampliar el anejo, y únicamente se conservó el sótano del mismo, donde se situaban los archivos del Hospital. ',
  data_category:'estructuras',
  location:'españa',
  use:'hospitalario',
  size:2400,
  year:2002,
  onclick:"location.href='https://bis.brandsholdingcompany.com/passeig-de-la-vall-dhebron/'",

})
projectList.push({
  image:'https://bis.brandsholdingcompany.com/wp-content/uploads/2022/12/Perspectiva-05-scaled.jpg',
  title:'Oficinas Campus Administrativo de la Generalitat Barcelona',
  description:'Proyecto de obra nueva situado en la Zona Franca de Barcelona destinado a oficinas.',
  data_category:'sostenibilidad',
  location:'españa',
  use:'oficinas',
  size:58587,
  year:2016,
  onclick:"location.href='https://bis.brandsholdingcompany.com/generalitat-barcelona/'",

})

projectList.push({
  image:'https://bis.brandsholdingcompany.com/wp-content/uploads/2022/12/PORTADA.jpg',
  title:'Hospital General Mollet Del Vallés',
  description:'La escuela infantil del Liceo Francés de Barcelona se sitúa en la calle MunnerEl proyecto del nuevo Hospital de Mollet se plantea como un volumen horizontal calado por patios de luz, que se adecúa a la topografía. ',
  data_category:'estructuras',
  location:'españa',
  use:'hospitalario',
  size:26650,
  year:2005,
  onclick:"location.href='https://bis.brandsholdingcompany.com/hospital-de-mollet/'",

})
projectList.push({
  image:'https://bis.brandsholdingcompany.com/wp-content/uploads/2022/10/mini-estadi.jpg',
  title:'Estadio Johan Cruyff',
  description:'El proyecto pretende ubicar las nuevas instalaciones del Mini estadio dentro del complejo deportivo Joan Gamper de Sant Joan Despí.',
  data_category:'estructuras',
  location:'españa',
  use:'deportivo',
  size:7245,
  year:2016,
  onclick:"location.href='https://bis.brandsholdingcompany.com/estadio-johan-cruyff/'",

})
projectList.push({
  image:'https://bis.brandsholdingcompany.com/wp-content/uploads/2022/12/N7X0717.jpg',
  title:'Hospital Universitario Sant Joan De Reus',
  description:'El Hospital se plantea como una gran nave horizontal de tres plantas caladas por patios, sobre la cual flotan seis volúmenes de internación de dos plantas. ',
  data_category:'estructuras',
  location:'españa',
  use:'hospitalario',
  size:84000,
  year:2008,
  onclick:"location.href='https://bis.brandsholdingcompany.com/hospital-de-reus/'",

})
projectList.push({
  image:'https://bis.brandsholdingcompany.com/wp-content/uploads/2022/12/Palacio-Pons-y-Pascual_4-scaled.jpg',
  title:'Reforma y Rehabilitación del Palacio Pons y Pascual',
  description:'El edificio está situado a los chaflanes de Paseo de Gracia con la Ronda San Pere y con la calle Casp y actualmente está en uso, aunque haya ciertas dependencias que no están ocupadas.',
  data_category:'estructuras',
  location:'españa',
  use:'oficinas',
  size:17610,
  year:2014,
  onclick:"location.href='https://bis.brandsholdingcompany.com/palacio-pons-y-pascual/'",

})
projectList.push({
  image:'https://bis.brandsholdingcompany.com/wp-content/uploads/2022/12/lavanguardia1.jpeg',
  title:'Cúpula de Sant Andreu del Palomar',
  description:'Proyecto de rehabilitación de la gran cúpula de la parroquia de San Andrés del Palomar, con 15m de diámetro interior y unos 50m de altura total.',
  data_category:'estructuras',
  location:'españa',
  use:'cultural',
  size:7000,
  year:2010,
  onclick:"location.href='https://bis.brandsholdingcompany.com/cupula-sant-andreu/'",

})
projectList.push({
  image:'https://bis.brandsholdingcompany.com/wp-content/uploads/2022/12/Imagen1-1-1.png',
  title:'Complejo Hammam Righa',
  description:'El proyecto contempla la rehabilitación de todo el complejo Zaccar en dos fases. La primera comprende la rehabilitación de la zona de bungalós. ',
  data_category:'estructuras',
  location:'argelia',
  use:'hotelero',
  size:51690,
  year:2013,
  onclick:"location.href='https://bis.brandsholdingcompany.com/complejo-hammam-righa/'",

})
projectList.push({
  image:'https://bis.brandsholdingcompany.com/wp-content/uploads/2022/12/HS_01_BUNGALOWS_P-1-1-scaled.jpg',
  title:'Complejo Hammam Salihine',
  description:'Este proyecto consta de varios edificios, incluyendo hoteles, bungalows, baños tradicionales, un bloque termal, un cine, un parque y un centro comercial.',
  data_category:'estructuras',
  location:'argelia',
  use:'hotelero',
  size:26014,
  year:2014,
  onclick:"location.href='https://bis.brandsholdingcompany.com/hammam-salihine/'",

})
projectList.push({
  image:'	https://bis.brandsholdingcompany.com/wp-content/uploads/2022/12/2-1.jpg',
  title:'Nuevo Hospital General en Manta',
  description:'El nuevo Hospital General del IESS de Manta tiene un área de 3Has (aprox.). Dada la magnitud del conjunto se ha dividido en 10 bloques separados por juntas.',
  data_category:'estructuras',
  location:'ecuador',
  use:'hospitalario',
  size:24100,
  year:2016,
  onclick:"location.href='https://bis.brandsholdingcompany.com/nuevo-hospital-general-en-manta/'",

})
projectList.push({
  image:'https://bis.brandsholdingcompany.com/wp-content/uploads/2022/12/PORTADA-1.jpg',
  title:'Hospital Paramétrico de Puyo',
  description:'Una de las características más importantes del proyecto es que las tres franjas principales se desplazan para generar pabellones solapados.',
  data_category:'estructuras',
  location:'ecuador',
  use:'hospitalario',
  size:15710,
  year:2012,
  onclick:"location.href='https://bis.brandsholdingcompany.com/hospital-puyo/'",

})
projectList.push({
  image:'https://bis.brandsholdingcompany.com/wp-content/uploads/2022/12/RampaNoche01-scaled.jpg',
  title:'Complejo de Oficinas en la Nueva Ciudad Financiera',
  description:'Este conjunto se sitúa en los terrenos del antiguo aeropuerto “Casa-Anfa”. Proyecto realizado con metodología BIM.',
  data_category:'estructuras',
  location:'marruecos',
  use:'oficinas',
  size:168717,
  year:2015,
  onclick:"location.href='https://bis.brandsholdingcompany.com/nueva-ciudad-financiera/'",

})
projectList.push({
  image:'https://bis.brandsholdingcompany.com/wp-content/uploads/2022/12/Exterior-nucli-scaled.jpg',
  title:'Complejo Hammam RighaDepósito de Can Boada',
  description:'Rehabilitación de los antiguos depósitos de agua de la Mina de Terrassa construidos en el año 1950 como reserva de agua para la ciudad.',
  data_category:'estructuras',
  location:'españa',
  use:'civil',
  size:3460,
  year:2007,
  onclick:"location.href='https://bis.brandsholdingcompany.com/deposito-de-can-boada/'",

})
projectList.push({
  image:'https://bis.brandsholdingcompany.com/wp-content/uploads/2022/12/Colegio-Teresianes-44-SG1416_7096-scaled.jpg',
  title:'Escuela Teresianes	',
  description:'Esta obra, construida en el año 1889 e inicialmente concebida por el arquitecto modernista Antoni Gaudí, se amplía con un nuevo edificio de cinco plantas, situado encima de una pista polideportiva abierta, semienterrada y conectada al edificio existente.',
  data_category:'estructuras',
  location:'españa',
  use:'docente',
  size:2764,
  year:2013,
  onclick:"location.href='https://bis.brandsholdingcompany.com/escuela-teresianes/'",

})
projectList.push({
  image:'https://bis.brandsholdingcompany.com/wp-content/uploads/2023/01/01-1-1.png',
  title:'Escuela de los Encants',
  description:'El edificio está organizado en dos bandas, con las aulas a cada lado y un amplio pasillo en el centro donde están previstas las actividades extraescolares.',
  data_category:'estructuras',
  location:'españa',
  use:'docente',
  size:4150,
  year:2013,
  onclick:"location.href='https://bis.brandsholdingcompany.com/encants-school/'",

})
projectList.push({
  image:'https://bis.brandsholdingcompany.com/wp-content/uploads/2023/01/01-12.png',
  title:'Oficinas Calle Badajoz',
  description:'Edificio de oficinas situado en la esquina de las calles Badajoz y Almogàvers del distrito de Poblenou, Barcelona.',
  data_category:'estructuras',
  location:'españa',
  use:'oficinas',
  size:17898,
  year:2020,
  onclick:"location.href='https://bis.brandsholdingcompany.com/oficinas-calle-badajoz/'",

})
projectList.push({
  image:'https://bis.brandsholdingcompany.com/wp-content/uploads/2023/01/02-11.png',
  title:'Hotel Pozo Amargo',
  description:'Agrupación de edificios residenciales abandonados de planta baja y dos plantas piso situados en el casco histórico de Toledo.',
  data_category:'estructuras',
  location:'españa',
  use:'hotelero',
  size:4765,
  year:2017,
  onclick:"location.href='https://bis.brandsholdingcompany.com/hotel-pozo-amargo/'",

})
projectList.push({
  image:'https://bis.brandsholdingcompany.com/wp-content/uploads/2022/10/02.jpg',
  title:'Estadio Cubierto de Atletismo',
  description:'Situada en un complejo deportivo en el barrio de San Oleguer, el estadio, con un aforo para 2.500 espectadores.',
  data_category:'estructuras',
  location:'españa',
  use:'deportivo',
  size:12700,
  year:2006,
  onclick:"location.href='https://bis.brandsholdingcompany.com/estadio-cubierto-de-atletismo/'",

})
projectList.push({
  image:'https://bis.brandsholdingcompany.com/wp-content/uploads/2023/01/04-11.png',
  title:'Biblioteca Pública',
  description:'En la Biblioteca la luz natural es la protagonista. Las fachadas en U-Glas blanco inundan el edificio de una luz suave, grata para la lectura.',
  data_category:'estructuras',
  location:'españa',
  use:'cultural',
  size:8772,
  year:2009,
  onclick:"location.href='https://bis.brandsholdingcompany.com/biblioteca-publica/'",

})
projectList.push({
  image:'https://bis.brandsholdingcompany.com/wp-content/uploads/2023/01/01-16.png',
  title:'Pabellón Ferial y Deportivo',
  description:'El edificio consta de tres volúmenes: el gran contenedor de actividades polivalentes, el escenario de uso interior y exterior,  y  el área de vestidores.',
  data_category:'estructuras',
  location:'españa',
  use:'deportivo',
  size:7800,
  year:2002,
  onclick:"location.href='https://bis.brandsholdingcompany.com/pabellon-ferial-y-deportivo/'",

})
projectList.push({
  image:'https://bis.brandsholdingcompany.com/wp-content/uploads/2023/01/01-17.png',
  title:'Edificio Hospitalario Polivalente del Pspv',
  description:'Este proyecto está basado en el modelo I-COVID PMMT COMPACT HOSPITAL: un proyecto de investigación nacido a raíz de la pandemia mundial.',
  data_category:'estructuras',
  location:'españa',
  use:'hospitalario',
  size:3900,
  year:2020,
  onclick:"location.href='https://bis.brandsholdingcompany.com/edificio-hospitalario-del-pspv/'",

})
projectList.push({
  image:'https://bis.brandsholdingcompany.com/wp-content/uploads/2023/01/01-18.png',
  title:'Edificio Hospitalario Polivalente del Arnau de Vilanova',
  description:'El nuevo edificio está compuesto por un total de 48 módulos industrializados (12 por planta) de 5m x 15m y otros 12 de cubierta.',
  data_category:'estructuras',
  location:'españa',
  use:'hospitalario',
  size:4816,
  year:2020,
  onclick:"location.href='https://bis.brandsholdingcompany.com/edificio-hospitalario-arnau/'",

})
projectList.push({
  image:'https://bis.brandsholdingcompany.com/wp-content/uploads/2023/01/01-19.png',
  title:'Novotel Diagonal 199',
  description:'El hotel formará parte del edificio mixto de 18 plantas, oficinas en las cinco primeras, con un total de 6.200m², y el hotel en las últimas ',
  data_category:'estructuras',
  location:'españa',
  use:'hotelero',
  size:28536,
  year:2005,
  onclick:"location.href='https://bis.brandsholdingcompany.com/novotel-diagonal/'",

})
projectList.push({
  image:'https://bis.brandsholdingcompany.com/wp-content/uploads/2023/01/03-18.png',
  title:'Cubierta Téxtil de Piscinas en Kazan',
  description:'BIS diseño una cubierta textil para cubrir la parte central donde se situarán las piscinas, la cual cubre una luce de 90x90m.',
  data_category:'estructuras',
  location:'rusia',
  use:'deportivo',
  size:14000,
  year:2014,
  onclick:"location.href='https://bis.brandsholdingcompany.com/piscinas-en-kazan/'",

})
projectList.push({
  image:'https://bis.brandsholdingcompany.com/wp-content/uploads/2023/01/01-21.png',
  title:'Cubierta Téxtil Centro Acuático Maria Lenk',
  description:'El proyecto responde a la solicitud por parte de la FINA, para cubrir el centro acuático "Maria Lenk", a la vista de los Juegos Olímpicos de Río 2016.',
  data_category:'estructuras',
  location:'brasil',
  use:'deportivo',
  size:5800,
  year:2014,
  onclick:"location.href='https://bis.brandsholdingcompany.com/centro-acuatico-maria-lenk/'",

})
projectList.push({
  image:'https://bis.brandsholdingcompany.com/wp-content/uploads/2023/01/02-20.png',
  title:'Complejo Deportivo Tunis',
  description:'Gran complejo deportivo situado en la ciudad de Túnez con unos 150.000m² construidos.',
  data_category:'sostenibilidad',
  location:'tunez',
  use:'deportivo',
  size:150000,
  year:2010,
  onclick:"location.href='https://bis.brandsholdingcompany.com/complejo-deportivo-tunis/'",

})
projectList.push({
  image:'https://bis.brandsholdingcompany.com/wp-content/uploads/2023/01/01-24.png',
  title:'Rehabilitación Casa Francesc Burés i borràs',
  description:'Nos encontramos un edificio con influencias neogóticas y germánicas propias de la época del modernismo barcelonés. ',
  data_category:'sostenibilidad',
  location:'españa',
  use:'cultural',
  size:7463,
  year:2015,
  onclick:"location.href='https://bis.brandsholdingcompany.com/rehabilitacion-casa-francesc/'",

})
projectList.push({
  image:'https://bis.brandsholdingcompany.com/wp-content/uploads/2023/01/02-22.png',
  title:'Easy Hotel',
  description:'El proyecto consiste en la construcción de un nuevo edificio para alojar el primer hotel en España de la cadena EASY HOTELS. ',
  data_category:'sostenibilidad',
  location:'españa',
  use:'hospitalario',
  size:7567,
  year:2016,
  onclick:"location.href='https://bis.brandsholdingcompany.com/easy-hotel/'",

})
projectList.push({
  image:'https://bis.brandsholdingcompany.com/wp-content/uploads/2023/01/01-26.png',
  title:'Gare Rabat Agdal',
  description:'Proyecto de modernización y ampliación de la actual estación de tren del barrio de Agdal de Rabat (Marruecos).',
  data_category:'sostenibilidad',
  location:'marruecos',
  use:'cultural',
  size:17071,
  year:2016,
  onclick:"location.href='https://bis.brandsholdingcompany.com/gare-rabat-agdal/'",

})
//Visualizas proyectos en la página
function renderProjects(arr){
  let count = 0;
  //recorrer el array de proyectos
  for(project of arr){
    count++;

    const projectBlock = document.createElement('div');
    projectBlock.classList.add('project');
    projectBlock.classList.add('projectClassGeneral');

    projectBlock.setAttribute('onclick',project.onclick);
    projectBlock.setAttribute('data-category',project.data_category);
    projectBlock.setAttribute('location',project.location);
    projectBlock.setAttribute('use',project.use);
    projectBlock.setAttribute('size',project.size);
    projectBlock.setAttribute('year',project.year);

    const projectImg = document.createElement('img');
    projectImg.setAttribute('src',project.image);
    projectImg.classList.add('image-project');
    
    if (count % 4 === 0) {
      projectBlock.classList.remove('project');
      projectBlock.classList.add('big-project');
      projectImg.classList.remove('image-project');
      projectImg.classList.add('image-big-project');
    }
    
    const projectDescriptionContainer = document.createElement('div');
    projectDescriptionContainer.classList.add('text-project-container');

    
    const projectTitle = document.createElement('h3');
    projectTitle.innerText = project.title;

    const projectDescription = document.createElement('p');
    projectDescription.innerText = project.description;

    projectDescriptionContainer.appendChild(projectTitle);
    projectDescriptionContainer.appendChild(projectDescription);

    projectBlock.append(projectImg,projectDescriptionContainer);

    projectsContainer.appendChild(projectBlock);
  }
}

renderProjects(projectList);


//Filtrar por  Categoria

const selectC = document.getElementById('category-select');
selectC.addEventListener('change', filterProjects);


function filterProjects() {

  const selectedCategory = selectC.value;
  const projectBlocks = document.querySelectorAll('.projectClassGeneral');
  let count = 0;
  projectBlocks.forEach(block => {
    if (block.getAttribute('data-category') === selectedCategory) {
      block.style.display = 'block';
      count++;
      if (count <= 3) {
        block.classList.remove('big-project');
        block.classList.add('project');
        block.querySelector('img').classList.remove('image-big-project');
        block.querySelector('img').classList.add('image-project');

      } else if (count % 4 === 0) {
        block.classList.remove('project');
        block.classList.add('big-project');
        block.querySelector('img').classList.remove('image-project');
        block.querySelector('img').classList.add('image-big-project');

      } else {
        block.classList.remove('big-project');
        block.classList.add('project');
        block.querySelector('img').classList.remove('image-big-project');
        block.querySelector('img').classList.add('image-project');
      }
    } else {
      block.style.display = 'none';
    }
  });
}

//Filtrar por Uso
const selectUse = document.getElementById('uso-select');
selectUse.addEventListener('change', filterProjectsByUse);


function filterProjectsByUse(){

  const selectedCategory = selectUse.value;
  console.log(selectedCategory);
  const projectBlocks = document.querySelectorAll('.projectClassGeneral');
  let count = 0;
  projectBlocks.forEach(block => {
    if (block.getAttribute('use') === selectedCategory) {
      block.style.display = 'block';
      count++;
      if (count <= 3) {
        block.classList.remove('big-project');
        block.classList.add('project');
        block.querySelector('img').classList.remove('image-big-project');
        block.querySelector('img').classList.add('image-project');

      } else if (count % 4 === 0) {
        block.classList.remove('project');
        block.classList.add('big-project');
        block.querySelector('img').classList.remove('image-project');
        block.querySelector('img').classList.add('image-big-project');

      } else {
        block.classList.remove('big-project');
        block.classList.add('project');
        block.querySelector('img').classList.remove('image-big-project');
        block.querySelector('img').classList.add('image-project');
      }
    } else {
      block.style.display = 'none';
    }
  });

}


//Filtrar por  Ubicación
const selectPlace = document.getElementById('selectPlace');
selectPlace.addEventListener('change', filterProjectsByPlace);


function filterProjectsByPlace(){

  const selectedCategory = selectPlace.value;
  const projectBlocks = document.querySelectorAll('.projectClassGeneral');
  let count = 0;
  projectBlocks.forEach(block => {
    if (block.getAttribute('location') === selectedCategory) {
      block.style.display = 'block';
      count++;
      if (count <= 3) {
        block.classList.remove('big-project');
        block.classList.add('project');
        block.querySelector('img').classList.remove('image-big-project');
        block.querySelector('img').classList.add('image-project');

      } else if (count % 4 === 0) {
        block.classList.remove('project');
        block.classList.add('big-project');
        block.querySelector('img').classList.remove('image-project');
        block.querySelector('img').classList.add('image-big-project');

      } else {
        block.classList.remove('big-project');
        block.classList.add('project');
        block.querySelector('img').classList.remove('image-big-project');
        block.querySelector('img').classList.add('image-project');
      }
    } else {
      block.style.display = 'none';
    }
  });

}


// Buscador


searchProject.addEventListener("keyup", (event) => {
  const searchTerm = searchProject.value;
  let results = "";

  if (!searchTerm) {
    results = projectList.map((project) => {
      return `<div class="project projectClassGeneral" data-category="${project.data_category}" location="${project.location}" use="${project.use}" size="${project.size}" year="${project.year}" onclick="${project.onclick}">
      <img src="${project.image}" class="image-project">
      <div class="text-project-container">
        <h3>${project.title}</h3>
        <p>${project.description}</p>
      </div>
    </div>`;
    }).join("");
  } else {
    projectList.forEach((project) => {
      if (project.title.includes(searchTerm)) {
        results += `<div class="project projectClassGeneral" data-category="${project.data_category}" location="${project.location}" use="${project.use}" size="${project.size}" year="${project.year}" onclick="${project.onclick}">
        <img src="${project.image}" class="image-project">
        <div class="text-project-container">
          <h3>${project.title}</h3>
          <p>${project.description}</p>
        </div>
      </div>`;
      }
    });

    if (!results) {
      results = "No se encontraron resultados para su búsqueda.";
    }
  }

  projectsContainer.innerHTML = results;
});


//Ocultar form-control

sl1.addEventListener('click',()=>{

  fc1.classList.remove('inactive');
  

});

sl2.addEventListener('click',()=>{

  fc2.classList.remove('inactive');

})

//Filtrar por tamaño
const fromInputSize = document.getElementById("fromInput");
fromSlider.addEventListener("input", updateRange);
toSlider.addEventListener("input", updateRange);

function updateRange() {
  fromInputSize.value = fromSlider.value;
  toInput.value = toSlider.value;
  

 
  console.log(fromInputSize);
}