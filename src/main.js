
import {
  allSelection, filterBySkill
} from './data.js';
import lol from './data/lol/lol.js';

const allChampionList = lol.data;

const divContador = document.getElementById('contador');
const buttonAllChampions = document.getElementById('button_colection');

export const generalData=(data) =>{  
  let muestra = ''
  data.forEach((champion) => {
    const elements=()=>{
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
  }
  muestra += elements;
});
return muestra;
}

const list = document.querySelector('#root');
  list.innerHTML = ''; 
  
  buttonAllChampions.addEventListener('click', () => {
  habilidad_popular.style.display="none";
  const list = document.querySelector('#root');
  list.innerHTML = ''; 
  generalData(allChampionList);  
   
});


const liRoles = document.querySelectorAll('.Roles');
const habilidad_popular = document.getElementById('habilidad_popular');
liRoles.forEach((option) => {
  
  option.addEventListener('click', () => {
   habilidad_popular.style.display="block";
    const typeRol = option.getAttribute('data-value');
    const functionFilterRol = allSelection(allChampionList, typeRol);
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
