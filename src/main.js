
/* eslint-disable import/named */
/* eslint-disable import/extensions */
import {
  allSelection,
  searchByName,
  sortOrder,
} from './data.js';
import lol from './data/lol/lol.js';

const allChampionList = lol.data;
const dataLol = Object.values(allChampionList);
const buttonAllChampions = document.getElementById('button_colection');
const divContador = document.getElementById('contador');
const list = document.querySelector('#root');
const generalContainer = document.getElementById('generalContainer');
const buttonWelcome = document.getElementById('button-welcome');
const popularHability = document.getElementById('habilidad_popular');
const allButtons = document.getElementById('content_buttons');
const gifChampion = document.getElementById('img-list');
const firstPage = document.getElementById('welcomeGift');
const ctx = document.getElementById('calculationGraph').getContext('2d');
const canvasCalculationGraph = document.getElementById('calculationGraph');

const liRoles = document.querySelectorAll('.prueba');

buttonWelcome.addEventListener('click', () => {
  const welcomeGift = document.getElementById('welcomeGift1');
  firstPage.style.display = 'none';
  welcomeGift.style.display = 'none';
  generalContainer.style.display = 'block';
  canvasCalculationGraph.style.display = 'none';
});

popularHability.style.display = 'none';

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
    img.addEventListener('click', () => {
      gifChampion.style.display = 'none';
      allButtons.innerHTML = '';
      buttonAllChampions.style.display = 'block';
      list.innerHTML = '';
      canvasCalculationGraph.style.display = 'block';
      const divForInfoChampion = document.createElement('div');
      const infoChampion = document.createElement('p');
      const imageChampion = document.createElement('img');
      // const chartArea = document.createElement('canvas');
      infoChampion.className = 'infoChampion';
      imageChampion.className = 'imageChampion';
      infoChampion.innerHTML = `${champion.blurb}`;
      imageChampion.src = `${champion.splash}`;
      divForInfoChampion.appendChild(infoChampion);
      divForInfoChampion.appendChild(imageChampion);
      list.appendChild(divForInfoChampion);
      // in this section the constants store numerical data to be used in the statistical graph
      const utilidad = (parseFloat(`${champion.stats.armor}`) + parseFloat(`${champion.stats.armorperlevel}`)
      + parseFloat(`${champion.stats.attackdamage}`) + parseFloat(`${champion.stats.attackdamageperlevel}`)
      + parseFloat(`${champion.stats.attackrange}`)) / 5;
      const daño = (parseFloat(`${champion.stats.crit}`) + parseFloat(`${champion.stats.critperlevel}`)) / 2;
      const dureza = (parseFloat(`${champion.stats.hp}`) + parseFloat(`${champion.stats.hpperlevel}`)
      + parseFloat(`${champion.stats.hpregen}`) + parseFloat(`${champion.stats.hpregenperlevel}`)) / 4;
      const movilidad = (parseFloat(`${champion.stats.movespeed}`) + parseFloat(`${champion.stats.attackspeedoffset}`)
      + parseFloat(`${champion.stats.attackspeedperlevel}`)) / 3;
      const controlDeMasas = (parseFloat(`${champion.stats.mp}`) + parseFloat(`${champion.stats.mpperlevel}`)
      + parseFloat(`${champion.stats.mpregen}`) + parseFloat(`${champion.stats.mpregenperlevel}`)
      + parseFloat(`${champion.stats.spellblock}`) + parseFloat(`${champion.stats.spellblockperlevel}`)) / 6;
      const calculationGraph = new Chart(ctx, {
        type: 'polarArea',
        data: {
          datasets: [{
            data: [
              `${utilidad}`,
              `${daño}`,
              `${dureza}`,
              `${movilidad}`,
              `${controlDeMasas}`,
            ],
            backgroundColor: [
              '#f1c40f',
              '#e67e22',
              '#16a085',
              '#2980b9',
              '#a6d4f2',
            ],
            label: 'DataOfChampions', // for legend
          }],
          labels: [
            'utilidad',
            'daño',
            'dureza',
            'movilidad',
            'control de masas',
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          legend: {
            position: 'right',
          },
          title: {
            display: true,
            text: 'DataOfChampions',
          },
          animation: {
            animateRotate: true,
            animateScale: true,
          },
        },
      });
    });
    divContador.style.backgroundColor = '#316a99';
    divContador.style.boxShadow = '0 0 10px #b3b4ab, 0 0 40px #b3b4ab, 0 0 80px #b3b4ab';
  });
};

buttonAllChampions.addEventListener('click', (event) => {
  event.preventDefault();
  list.innerHTML = '';
  champions(dataLol);
  divContador.innerHTML = `Champions List ${dataLol.length}`;
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
    p3.innerHTML = type
      ? `${type} ${champion.info[type]}`
      : '';
    div.appendChild(img);
    div.appendChild(p);
    list.appendChild(div);
    div.appendChild(p2);
    div.appendChild(p3);

    p3 = type ? p3.style.display = 'block' : p3.style.display = 'none';
    p3 = type ? p2.style.marginBottom = '3px' : p.style.marginBottom = '3px';
    p3 = type ? p.style.marginBottom = '3px' : p.style.marginBottom = '3px';

    divContador.style.backgroundColor = '#316a99';
    divContador.style.boxShadow = '0 0 10px #b3b4ab, 0 0 40px #b3b4ab, 0 0 80px #b3b4ab';
  });
};


/* LLAMANDO A LOS CAMPEONES SEGÚN ROL */

// console.log(liRoles);
let typeRol;/* '' o [] espera ese tipo,pero como está ahora solo recibe sin importar el tipo */

liRoles.forEach((option) => {
  option.addEventListener('click', () => {
    popularHability.style.display = 'block';
    const attributeLi = option.getAttribute('data-tipo');
    if (attributeLi === 'roles') {
      typeRol = option.getAttribute('data-value');
      list.innerHTML = '';
      const arrCampeonesPorRol = allSelection(dataLol, typeRol);
      championsRol(arrCampeonesPorRol);
      divContador.innerHTML = `${typeRol} ${arrCampeonesPorRol.length}`;
    } else if (attributeLi === 'hp') {
      popularHability.style.animation = 'none';
      const typeSkill = option.getAttribute('data-value');
      list.innerHTML = '';
      const arrCampeonesPorRol = allSelection(dataLol, typeRol);
      arrCampeonesPorRol.sort((a, b) => b.info[typeSkill] - a.info[typeSkill]);
      // console.log(typeSkill);
      championsRol(arrCampeonesPorRol, typeSkill);
      divContador.innerHTML = `${typeRol} ${arrCampeonesPorRol.length}`;
    }
  });
});


const butonOrder = document.getElementById('AtoZ');
butonOrder.addEventListener('click', (event) => {
  event.preventDefault();
  // return seeAllChampion.innerHTML.sort().reverse();
  const selectOrder = butonOrder.value;
  list.innerHTML = '';
  champions(sortOrder(dataLol, selectOrder));
});
const butonOrder1 = document.getElementById('ZtoA');
butonOrder1.addEventListener('click', (event) => {
  event.preventDefault();
  // return seeAllChampion.innerHTML.sort().reverse();
  const selectOrder1 = butonOrder1.value;
  list.innerHTML = '';
  champions(sortOrder(dataLol, selectOrder1).reverse());
});

// const butonOrder = document.getElementById('alphabeticOrder');
// butonOrder.addEventListener('click', (event) => {
//   const valueAlphabetic = event.target.value;
//   switch (valueAlphabetic) {
//     case 'a-z':
//       champions(sortOrder(dataLol, 'a-z'));
//       break;
//     case 'z-a':
//       champions(sortOrder(dataLol, valueAlphabetic).reverse());
//       break;
//     default:
//   }
// });

