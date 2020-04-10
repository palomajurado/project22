export const allSelection = (allchampionList, typeRol) => {
  const arrayValuesChampions = Object.values(allchampionList);
  return arrayValuesChampions.filter((championsList) => championsList.tags.indexOf(typeRol) >= 0);
  /* Es booleano, entonces es true para arrayValuesChampios y al ser false no devuelve nada */
  /* Filter devuelve valores booleanos */
  /* retorna el array de los values, pero ahora filtremos con el callback */
  /* De este nuevo array de valores queremos encontrar aquellos que coincidan con  */
  /* typeRol que le vamos a pasar, pero este tiene que existir, por tanto índice mayor a 0 */
};

export const searchByName = (data, string) => {
  const stringLower = string.toLowerCase();
  const newArray = [];
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < data.length; i++) {
    if (data[i].name.toLowerCase().startsWith(stringLower)) { /* searchString,position */
      newArray.push(data[i]);
    }
  }
  return newArray;
};
export const sortOrder = (arr, condition) => {
  if (condition === 'a-z') {
    arr.sort((a, b) => ((a.id > b.id) ? -1 : 1));
  } else {
    arr.sort((a, b) => ((a.id < b.id) ? -1 : 1));
  }
  return arr;
};
/* compareFunction-elementos-valor de una de sus propiedades */
/* arr.sort.compareFunction */
export const utility = (data) => {
  const polarAreaData = Object.values(data);
  const sectionAreaPolar = [];
  polarAreaData.stats.forEach((statsLol) => {
    sectionAreaPolar.push(statsLol.armor, statsLol.armorperlevel, statsLol.attackdamage,
      statsLol.attackdamageperlevel, statsLol.attackrange);
  });
  const emptyArrayToNumbers = sectionAreaPolar.map((numUtilidad) => parseFloat(numUtilidad));
  const finalAverage = ((emptyArrayToNumbers.reduce((numUtilidad, numUtilidad2) => numUtilidad
  + numUtilidad2)) / emptyArrayToNumbers.length).toFixed(1);
  return finalAverage;
};

// export const arithmeticAverage = (data, arrTypeData) => {
//   const sectionAreaPolar = [];
//   let emptyArrayToNumbers;
//   let finalAverage;
//   switch (arrTypeData) {
//     case arrTypeData[0]:
//       data.stats.forEach((statsLol) => {
//         sectionAreaPolar.push(statsLol.armor, statsLol.armorperlevel, statsLol.attackdamage,
//           statsLol.attackdamageperlevel, statsLol.attackrange);
//       });
//       emptyArrayToNumbers = sectionAreaPolar.map((numUtilidad) => parseFloat(numUtilidad));
//       finalAverage = ((emptyArrayToNumbers.reduce((numUtilidad, numUtilidad2) => numUtilidad
//       + numUtilidad2)) / emptyArrayToNumbers.length).toFixed(1);
//       // return finalAverage;
//       break;
//     case arrTypeData[1]:
//       data.stats.forEach((statsLol) => {
//         sectionAreaPolar.push(statsLol.crit, statsLol.critperlevel);
//       });
//       emptyArrayToNumbers = sectionAreaPolar.map((numUtilidad) => parseFloat(numUtilidad));
//       finalAverage = ((emptyArrayToNumbers.reduce((numUtilidad, numUtilidad2) => numUtilidad
//       + numUtilidad2)) / emptyArrayToNumbers.length).toFixed(1);
//       // return finalAverage;
//       break;
//     case arrTypeData[2]:
//       data.stats.forEach((statsLol) => {
//         sectionAreaPolar.push(statsLol.hp, statsLol.hpperlevel, statsLol.hpregen,
//           statsLol.hpregenperlevel);
//       });
//       emptyArrayToNumbers = sectionAreaPolar.map((numUtilidad) => parseFloat(numUtilidad));
//       finalAverage = ((emptyArrayToNumbers.reduce((numUtilidad, numUtilidad2) => numUtilidad
//       + numUtilidad2)) / emptyArrayToNumbers.length).toFixed(1);
//       // return finalAverage;
//       break;
//     case arrTypeData[3]:
//       data.stats.forEach((statsLol) => {
//         sectionAreaPolar.push(statsLol.movespeed, statsLol.attackspeedoffset,
//           statsLol.attackdamageperlevel);
//       });
//       emptyArrayToNumbers = sectionAreaPolar.map((numUtilidad) => parseFloat(numUtilidad));
//       finalAverage = ((emptyArrayToNumbers.reduce((numUtilidad, numUtilidad2) => numUtilidad
//       + numUtilidad2)) / emptyArrayToNumbers.length).toFixed(1);
//       // return finalAverage;
//       break;
//     case arrTypeData[4]:
//       data.stats.forEach((statsLol) => {
//         sectionAreaPolar.push(statsLol.mp, statsLol.mpperlevel, statsLol.mpregen,
//           statsLol.mpregenperlevel, statsLol.spellblock, statsLol.spellblockperlevel);
//       });
//       emptyArrayToNumbers = sectionAreaPolar.map((numUtilidad) => parseFloat(numUtilidad));
//       finalAverage = ((emptyArrayToNumbers.reduce((numUtilidad, numUtilidad2) => numUtilidad
//       + numUtilidad2)) / emptyArrayToNumbers.length).toFixed(1);
//       // return finalAverage;
//       break;
//     default:
//       console.log('error');
//   }
//   return finalAverage;
// };
