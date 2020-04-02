/* eslint-disable import/named */
/* eslint-disable array-callback-return */
import {
  // eslint-disable-next-line import/named
  allSelection, searchByName, sortOrder,
// eslint-disable-next-line import/named
// eslint-disable-next-line import/extensions
} from './data.js';

// eslint-disable-next-line import/extensions
} from './data.js';
import lol from './data/lol/lol.js';

const allChampionList = lol.data;
const dataLol = Object.values(allChampionList);
const buttonAllChampions = document.getElementById('button_colection');
const divContador = document.getElementById('contador');
const list = document.querySelector('#root');
// eslint-disable-next-line no-alert
// alert(Array.isArray(arr));

const generalContainer = document.getElementById('generalContainer');
const buttonWelcome = document.getElementById('button-welcome');
const backgroundWelcomeBlack = document.getElementById('background-welcome-black');
const popularHability = document.getElementById('habilidad_popular');

buttonWelcome.addEventListener('click', () => {
  const welcomeGift = document.getElementById('welcomeGift');
  welcomeGift.style.display = 'none';
  backgroundWelcomeBlack.style.display = 'none';
  generalContainer.style.display = 'block';
});

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
    divContador.innerHTML = 'Campeones : 122';
  });
};

buttonAllChampions.addEventListener('click', (event) => {
  event.preventDefault();
  popularHability.style.display = 'none';
  list.innerHTML = '';
  champions(dataLol);
  divContador.innerHTML = `All Champions List ${dataLol.length}`;
});
const inputSearch = document.getElementById('searchTexto');
inputSearch.addEventListener('keyup', (event) => {
  list.innerHTML = '';
  const valueToSearch = event.target.value;
  const contador = searchByName(dataLol, valueToSearch);
  champions(searchByName(dataLol, valueToSearch));
  divContador.innerHTML = (`Encontrados: ${contador.length}`);
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

liRoles.forEach((option) => {
  option.addEventListener('click', () => {
    popularHability.style.display = 'block';
    const attributeLi = option.getAttribute('data-tipo');
    // console.log(attributeLi);
    if (attributeLi === 'roles') {
      typeRol = option.getAttribute('data-value');
      list.innerHTML = '';

      const arrCampeonesPorRol = allSelection(dataLol, typeRol);
      // console.log(arrCampeonesPorRol);
      championsRol(arrCampeonesPorRol);
      // console.log(championsRol(arrCampeonesPorRol));
      divContador.innerHTML = `${typeRol} ${arrCampeonesPorRol.length}`;
    } else if (attributeLi === 'hp') {
      const typeSkill = option.getAttribute('data-value');
      list.innerHTML = '';
      const arrCampeonesPorRol = allSelection(dataLol, typeRol).sort((a, b) => b.info[typeSkill] - a.info[typeSkill]);
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
      champions(sortOrder(dataLol, 'a-z'));
      break;
    case 'z-a':
      champions(sortOrder(dataLol, valueAlphabetic).reverse());
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

