/* eslint-disable import/named */
/* eslint-disable import/extensions */
/* eslint-disable no-undef */
import {
    allSelection,
    searchByName,
    sortOrder,
    arithmeticAverage,
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
const externalLinks = document.getElementById('external-links');

const inputSearch = document.getElementById('searchTexto');
const liRoles = document.querySelectorAll('.prueba');
const graphicChart = document.getElementById('graphicChart');

const createChart = (champion) => {
    const utilidad = arithmeticAverage(champion, 'utilidad');
    const dureza = arithmeticAverage(champion, 'dureza');
    const movilidad = arithmeticAverage(champion, 'movilidad');
    const controlDeMasas = arithmeticAverage(champion, 'mp');

    const calculationGraph = new Chart(ctx, {
        type: 'polarArea',
        data: {
            datasets: [{
                data: [
                    `${utilidad}`,
                    `${dureza}`,
                    `${movilidad}`,
                    `${controlDeMasas}`,
                ],
                backgroundColor: [
                    '#f1c40f',
                    '#16a085',
                    '#2980b9',
                    '#a6d4f2',
                ],
                label: 'DataOfChampions',
            }],
            labels: [
                'utilidad',
                'dureza',
                'movilidad',
                'control de masas',
            ],
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            title: {
                display: true,
                text: 'ChampionsStats',
            },
            animation: {
                animateRotate: true,
                animateScale: true,
            },
        },
    });

    return calculationGraph;
};
Chart.defaults.scale.ticks.display = false;
Chart.defaults.scale.gridLines.color = '#fff';
Chart.defaults.global.defaultFontColor = '#fff';
Chart.defaults.global.elements.rectangle.borderWidth = 0;

/* Boton de primera interfaz */
buttonWelcome.addEventListener('click', () => {
    firstPage.style.display = 'none';
    generalContainer.style.display = 'block';
    canvasCalculationGraph.style.display = 'none';
});

popularHability.style.display = 'none';

const champions = (array, type) => {
    array.forEach((champion) => {
        const div = document.createElement('div');
        const img = document.createElement('img');
        const p = document.createElement('p');
        const p2 = document.createElement('p');
        let p3 = document.createElement('p');
        p.className = 'nameOfChampion';
        img.className = 'imageOfChampion';
        p2.className = 'tagsOfChampion';
        p3.className = 'infoOfChampion';
        p.innerHTML = `${champion.name}`;
        img.src = `${champion.splash}`;
        p2.innerHTML = type ? `${champion.tags}` : '';
        p3.innerHTML = type ? `${type} ${champion.info[type]}` : '';
        div.appendChild(img);
        div.appendChild(p);
        div.appendChild(p2);
        div.appendChild(p3);
        list.appendChild(div);

        p3 = type ? p3.style.display = 'block' : p3.style.display = 'none';
        p3 = type ? p2.style.marginBottom = '3px' : p.style.marginBottom = '3px';
        p3 = type ? p.style.marginBottom = '3px' : p.style.marginBottom = '3px';
        divContador.style.backgroundColor = '#316a99';
        divContador.style.boxShadow = '0 0 10px #b3b4ab, 0 0 40px #b3b4ab, 0 0 80px #b3b4ab';

        img.addEventListener('click', () => {
            graphicChart.style.display = 'block';
            externalLinks.style.display = 'none';
            gifChampion.style.display = 'none';
            buttonAllChampions.style.display = 'block';
            canvasCalculationGraph.style.display = 'block';
            list.innerHTML = '';
            allButtons.innerHTML = '';
            const divForInfoChampion = document.createElement('div');
            const infoChampion = document.createElement('p');
            const imageChampion = document.createElement('img');

            infoChampion.className = 'infoChampion';
            imageChampion.className = 'imageChampion';
            infoChampion.innerHTML = `${champion.blurb}`;
            imageChampion.src = `${champion.splash}`;
            divForInfoChampion.appendChild(infoChampion);
            divForInfoChampion.appendChild(imageChampion);
            list.appendChild(divForInfoChampion);

            createChart(champion);
        });
    });
};

/* Campeones ENCONTRADOS */
buttonAllChampions.addEventListener('click', (event) => {
    event.preventDefault();
    list.innerHTML = '';
    champions(dataLol);
    divContador.innerHTML = `Champions List ${dataLol.length}`;
});


inputSearch.addEventListener('keyup', (event) => {
    list.innerHTML = '';
    const valueToSearch = event.target.value;
    const contador = searchByName(dataLol, valueToSearch);
    champions(searchByName(dataLol, valueToSearch));
    divContador.innerHTML = (`Encontrados: ${contador.length}`);
});


/* POR ROL */
let typeRol;

liRoles.forEach((option) => {
    option.addEventListener('click', () => {
        popularHability.style.display = 'block';
        const attributeLi = option.getAttribute('data-tipo');
        if (attributeLi === 'roles') {
            typeRol = option.getAttribute('data-value');
            list.innerHTML = '';
            const arrCampeonesPorRol = allSelection(dataLol, typeRol);
            champions(arrCampeonesPorRol);
            divContador.innerHTML = `${typeRol} ${arrCampeonesPorRol.length}`;
        } else if (attributeLi === 'hp') {
            popularHability.style.animation = 'none';
            const typeSkill = option.getAttribute('data-value');
            list.innerHTML = '';
            const arrCampeonesPorRol = allSelection(dataLol, typeRol);
            arrCampeonesPorRol.sort((a, b) => b.info[typeSkill] - a.info[typeSkill]);
            champions(arrCampeonesPorRol, typeSkill);
            divContador.innerHTML = `${typeRol} ${arrCampeonesPorRol.length}`;
        }
    });
});

/* SORT */
document.querySelectorAll('.ordering').forEach((element) => {
    element.addEventListener('click', () => {
        const value = element.getAttribute('data-value');
        list.innerHTML = '';
        const order = sortOrder(allChampionList, value);
        champions(order);
    });
});