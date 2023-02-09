const categorias = ['estructuras','instalaciones','sostenibilidad'];
const usos = ['parquing','centroatencionprimaria','civil','comercial','cultural','docente','deportivo','hospitalario','hotelero','industrial','oficinas','recintofiral','residencial','servicios','sociosanitario'];
const ubicaciones =['españa','andorra','ecuador','marruecos','argelia']
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
const formControl2 = document.querySelector('.form_control');



const project4 = document.querySelector('.project4');
const project6 = document.querySelector('.project6');
const project7 = document.querySelector('.project7');
const project8 = document.querySelector('.project8');
const project10 = document.querySelector('.project10')
const project12 = document.querySelector('.project12');
const project15 = document.querySelector('.project15');
const project16 = document.querySelector('.project16');
const project17 = document.querySelector('.project17');
const project18 = document.querySelector('.project18');
const project20 = document.querySelector('.project20');
const project21 = document.querySelector('.project21');
const project24= document.querySelector('.project24');
const image4 = document.querySelector('#image4');
const image6 = document.querySelector('#image6');
const image7 = document.querySelector('#image7');
const image8 = document.querySelector('#image8');
const image10 = document.querySelector('#image10');
const image15 = document.querySelector('#image15');
const image16 = document.querySelector('#image16');
const image17 = document.querySelector('#image17');
const image18 = document.querySelector('#image18');
const image20 = document.querySelector('#image20');
const image21 = document.querySelector('#image21');
const image24 = document.querySelector('#image24');
const imageBigProject12 = document.querySelector('#image12');

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




searchProject.addEventListener("keyup", (event) => {
  const searchProjectTerm = searchProject.value;
  let results = "";

  const projects = document.querySelectorAll(".project");

  if (!searchProjectTerm) {
    results = "Hola"
    
    // results = Array.from(projects).map((project) => project.outerHTML).join("");
  } else {
    projects.forEach((project) => {
      const title = project.querySelector("h3").textContent;

      if (title.includes(searchProjectTerm)) {
        results += project.outerHTML;
      }
    });

    if (!results) {
      results = "No se encontraron resultados para su búsqueda.";
    }
  }

  projectsContainer.innerHTML = results;
});

















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
  image:"https://bis.brandsholdingcompany.com/wp-content/uploads/2022/12/SG1771_0319-2-scaled.jpg",
  title:"Lycée Français",
  description:"La escuela infantil del Liceo Francés de Barcelona se sitúa en la calle Munner",
  data_category:"estructuras",
  location:"españa",
  use:"docente",
  size:3400,
  year:2017,
  onclick:"location.href='https://bis.brandsholdingcompany.com/lycee-francais/'"

})



function renderProjects(projectList){

  //recorrer el array de proyectos

  for(project of projectList){

    const projectBlock = document.createElement('div');
    projectBlock.classList.add('project');
    projectBlock.setAttribute('onclick',projectList.onclick);
    projectBlock.setAttribute('data-category',projectList.data_category);
    projectBlock.setAttribute('location',projectList.location);
    projectBlock.setAttribute('use',projectList.use);
    projectBlock.setAttribute('size',projectList.size);
    projectBlock.setAttribute('year',projectList.year);

    
    const projectImg = document.createElement('img');
    projectImg.setAttribute('src',projectList.image);
    
    const projectDescriptionContainer = document.createElement('div');
    projectDescriptionContainer.classList.add('text-project-container');

    
    const projectTitle = document.createElement('h3');
    projectTitle.innerText = projectList.title;

    const projectDescription = document.createElement('p');
    projectDescription.innerText = projectList.description;



  }
}



//Ocultar form-control

sl1.addEventListener('click',()=>{

  fc1.classList.remove('inactive');

});

sl2.addEventListener('click',()=>{

  fc2.classList.remove('inactive');

})