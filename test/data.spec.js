/* eslint-disable import/extensions */
import {
  allSelection,
// eslint-disable-next-line import/no-unresolved
// eslint-disable-next-line import/extensions
} from '../src/data.js';

import lol from '../src/data/lol/lol.js';

const champions = lol.data;

describe('allSelection', () => {
  it('debería ser una función', () => {
    expect(typeof allSelection).toBe('function');
  });

  it('debería retornar rol Mago', () => {
    const filterRol = allSelection(champions, 'Mage');
    expect(filterRol).toHaveLength(52);
  });
});
it('debería retornar rol Tank', () => {
  const filterRol = allSelection(champions, 'Tank');
  expect(filterRol).toHaveLength(40);
});
it('debería retornar rol Fighter', () => {
  const filterRol = allSelection(champions, 'Fighter');
  expect(filterRol).toHaveLength(66);
});
