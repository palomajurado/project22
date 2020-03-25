
/* interacción con el DOM event listeners o event handlers, se usan las que estàn en data.js */
import {
  allSelection, sortOrder,
} from './data.js';
import lol from './data/lol/lol.js';

const allChampionList = lol.data;
const arr = Object.values(allChampionList);
// eslint-disable-next-line no-alert
// alert(Array.isArray(arr));

const divContador = document.getElementById('contador');
const list = document.querySelector('#root');
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
    divContador.innerHTML = 'Campeones : 122';
  });
};
// champions(arr);
buttonAllChampions.addEventListener('click', (event) => {
  event.preventDefault();
  list.innerHTML = '';
  champions(arr);
});



const liRoles = document.querySelectorAll('.Roles');
const habilidad_popular = document.getElementById('habilidad_popular');
liRoles.forEach((option) => {
  
  option.addEventListener('click', () => {
   habilidad_popular.style.display="block";
    const typeRol = option.getAttribute('data-value');
    const functionFilterRol = allSelection(allChampionList, typeRol);
    // console.log(functionFilterRol);
    // eslint-disable-next-line no-shadow
    const list = document.querySelector('#root');
    list.innerHTML = '';
    Object.values(functionFilterRol).forEach((champion) => {
      const div = document.createElement('div');
      const img = document.createElement('img');
      const p = document.createElement('p');
      const p2 = document.createElement('p');
      p.className = 'nameOfChampion';
      p2.className = 'tagsOfChampion';
      img.className = 'imageOfChampion';
      p.innerHTML = `${champion.name}`;
      p2.innerHTML = `${champion.tags}`;
      img.src = `${champion.splash}`;
      div.appendChild(img);
      div.appendChild(p);
      div.appendChild(p2);
      list.appendChild(div);
    });
    divContador.innerHTML = (`${typeRol} ${functionFilterRol.length}`);
  });
});

// eslint-disable-next-line no-shadow
const butonOrder = document.getElementById('AtoZ');
butonOrder.addEventListener('click', (event) => {
  event.preventDefault();
  // return seeAllChampion.innerHTML.sort().reverse();
  const selectOrder = butonOrder.value;
  list.innerHTML = '';
  champions(sortOrder(arr, selectOrder));
});

const butonOrder1 = document.getElementById('ZtoA');
butonOrder1.addEventListener('click', (event) => {
  event.preventDefault();
  // return seeAllChampion.innerHTML.sort().reverse();
  const selectOrder1 = butonOrder1.value;
  list.innerHTML = '';
  champions(sortOrder(arr, selectOrder1).reverse());
});


// if(divContador.innerHTML = (`${typeRol} ${functionFilterRol.length}`)){
//   const liSkills = document.querySelectorAll('.HP');
//     // console.log(typeof liRoles); /*is an object*/
//     liSkills.forEach((option) => {
//     option.addEventListener('click', () => {
//       // const functionRoles = () => {
//       const typeSkill = option.getAttribute('data-value');
//       // console.log(typeRol);
//       const functionFilterSkill = filterBySkill(allChampionList, typeSkill);
//       // console.log(functionFilterRol);
//       const list = document.querySelector('#root');
//       list.innerHTML = '';
//       /* Llamamos otra vez al div que contiene list,la limpiamos=> pinta lo nuevo que vamos a darle */
//       // console.log(root);
//       return Object.values(functionFilterSkill).forEach((champion) => {
