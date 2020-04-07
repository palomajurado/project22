/* eslint-disable import/extensions */
import {
  allSelection, sortOrder, searchByName,
  // import/extensions eslint-disable-next-line import/named
// eslint-disable-next-line import/named
} from '../src/data.js';

import lol from '../src/data/lol/lol.js';

const champions = lol.data;
const dataLol = Object.values(champions);

describe('allSelection', () => {
  it('debería ser una función', () => {
    expect(typeof allSelection).toBe('function');
  });

  it('debería retornar rol Mago', () => {
    const filterRol = allSelection(champions, 'Mage');
    expect(filterRol).toHaveLength(52);
  });
  it('debería retornar rol Tank', () => {
    const filterRol = allSelection(champions, 'Tank');
    expect(filterRol).toHaveLength(40);
  });
  it('debería retornar rol Fighter', () => {
    const filterRol = allSelection(champions, 'Fighter');
    expect(filterRol).toHaveLength(66);
  });
  it('debería retornar rol Apoyo', () => {
    const filterRol = allSelection(champions, 'Support');
    expect(filterRol).toHaveLength(27);
  });
  it('debería retornar rol Tirador', () => {
    const filterRol = allSelection(champions, 'Marksman');
    expect(filterRol).toHaveLength(24);
  });
  it('debería retornar habilidad popular', () => {
    const filterRol = allSelection(champions, 'attack');
    expect(filterRol).toHaveLength(33);
  });
});

describe('sortOrder', () => {
  it('is a function', () => {
    expect(typeof sortOrder).toBe('function');
  });

  it('debería retornar un array de objetos ordenados de a-z', () => {
    expect(sortOrder(dataLol, 'a-z')).toEqual(dataLol);
  });

  it('debería retornar un array de objetos ordenados de z-a', () => {
    expect(sortOrder(dataLol, 'z-a').reverse()).toEqual(dataLol.reverse());
  });
});

describe('searchByName', () => {
  it('debería ser una función', () => {
    expect(typeof searchByName).toBe('function');
  });
  it('debería retornar Aatrox para búsqueda : "Aatrox" ', () => {
    const search = searchByName(dataLol, 'aatrox');
    expect(search).toHaveLength(1);
  });
  it('debería retornar varios campeones para búsqueda : "z" ', () => {
    const search = searchByName(dataLol, 'z');
    expect(search).toHaveLength(5);
  });
  it('debería retornar (nada) para " + "(cualquier caracter', () => {
    const search = searchByName(dataLol, '+');
    expect(search).toHaveLength(0);
  });
});
