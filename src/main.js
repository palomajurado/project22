/* interacción con el DOM event listeners o event handlers, se usan las que estàn en data.js */
// eslint-disable-next-line import/extensions
import { allSelection, sortOrder } from './data.js';
// eslint-disable-next-line import/extensions
import lol from './data/lol/lol.js';

const list = document.querySelector('#root');
const generalContainer = document.getElementById('generalContainer');
const buttonWelcome = document.getElementById('button-welcome');
const backgroundWelcomeBlack = document.getElementById('background-welcome-black');
buttonWelcome.addEventListener('click', () => {
  const welcomeGift = document.getElementById('welcomeGift');
  welcomeGift.style.display = 'none';
  backgroundWelcomeBlack.style.display = 'none';
  generalContainer.style.display = 'block';
});


const allChampionList = lol.data;
const arr = Object.values(allChampionList);

const divContador = document.getElementById('contador');


const buttonAllChampions = document.getElementById('button_colection');
const champions = (array) => {
  Object.values(array).forEach((champion) => {
    const div = document.createElement('div');
    const img = document.createElement('img');
    const p = document.createElement('p');
    p.className = 'nameOfChampion';
    img.className = 'imageOfChampion';
    p.innerHTML = `${champion.name}`;
    img.src = `${champion.splash}`;
    div.appendChild(img);
    div.appendChild(p);
    list.appendChild(div);
    divContador.innerHTML = 'Campeones: 122';
  });
};
// champions(arr);
buttonAllChampions.addEventListener('click', (event) => {
  popularHability.style.display = 'none';
  event.preventDefault();
  list.innerHTML = '';
  champions(arr);
  divContador.innerHTML = `All Champions List ${arr.length}`;
});


const championsRol = (array, type) => {
  Object.values(array).forEach((champion) => {
    const div = document.createElement('div');
    const img = document.createElement('img');
    const p = document.createElement('p');
    const p2 = document.createElement('p');
    let p3 = document.createElement('p');
    p.className = 'nameOfChampion';
    img.className = 'imageOfChampion';
    p2.className = 'tagsOfChampion';
    p3.className = 'infoOfChampion';
    img.src = `${champion.splash}`;
    p.innerHTML = `${champion.name}`;
    p2.innerHTML = `${champion.tags}`;
    p3.innerHTML = type ? `${type} ${champion.info[type]}` : '';
    div.appendChild(img);
    div.appendChild(p);
    list.appendChild(div);
    div.appendChild(p2);
    div.appendChild(p3);

    p3 = type ? p3.style.display = 'block' : p3.style.display = 'none';
    p3 = type ? p2.style.marginBottom = '3px' : p.style.marginBottom = '3px';
    p3 = type ? p.style.marginBottom = '3px' : p.style.marginBottom = '3px';
  });
};

const liRoles = document.querySelectorAll('.prueba');
// console.log(liRoles);
let typeRol;/* '' o [] espera ese tipo,pero como está ahora solo recibe sin importar el tipo */
const popularHability = document.getElementById('habilidad_popular');
liRoles.forEach((option) => {
  option.addEventListener('click', () => {
    popularHability.style.display = 'block';
    const attributeLi = option.getAttribute('data-tipo');
    // console.log(attributeLi);
    if (attributeLi === 'roles') {
      typeRol = option.getAttribute('data-value');
      list.innerHTML = '';
      const arrCampeonesPorRol = allSelection(arr, typeRol);
      // console.log(arrCampeonesPorRol);
      championsRol(arrCampeonesPorRol);
      // console.log(championsRol(arrCampeonesPorRol));
      divContador.innerHTML = `${typeRol} ${arrCampeonesPorRol.length}`;
    } else if (attributeLi === 'hp') {
      const typeSkill = option.getAttribute('data-value');
      list.innerHTML = '';
      const arrCampeonesPorRol = allSelection(arr, typeRol).sort((a, b) => b.info[typeSkill] - a.info[typeSkill]);
      // console.log(typeSkill);
      championsRol(arrCampeonesPorRol, typeSkill);
      // console.log(championsRol(arrCampeonesPorRol));
      divContador.innerHTML = `${typeRol} ${arrCampeonesPorRol.length}`;
    }
  });
});

const butonOrder = document.getElementById('alphabeticOrder');

butonOrder.addEventListener('click', (event) => {
  const valueAlphabetic = event.target.value;
  switch (valueAlphabetic) {
    case 'a-z':
      champions(sortOrder(arr, 'a-z'));
      break;
    case 'z-a':
      champions(sortOrder(arr, valueAlphabetic).reverse());
      break;
    default:
  }
});

// const butonOrder = document.getElementById('AtoZ');
// butonOrder.addEventListener('click', (event) => {
//   event.preventDefault();
//   const selectOrder = butonOrder.value;
//   list.innerHTML = '';
//   champions(sortOrder(arr, selectOrder));
// });

// const butonOrder1 = document.getElementById('ZtoA');
// butonOrder1.addEventListener('click', (event) => {
//   event.preventDefault();
//   const selectOrder1 = butonOrder1.value;
//   list.innerHTML = '';
//   champions(sortOrder(arr, selectOrder1).reverse());
// });


const menuResponsive = document.getElementById('menu');
const filtros = document.getElementById('filtros');
let meter = 0;

menuResponsive.addEventListener('click', () => {
  if (meter === 0) {
    filtros.className = ('filtros responsive2');
    meter = 1;
  } else {
    filtros.classList.remove('responsive2');
    filtros.className = ('filtros responsive');
    meter = 0;
  }
});

// window.addEventListener('mouseup', (event) => {
//   if (event.target != filtros) {
//     filtros.style.display = 'block';
//   }
// });
