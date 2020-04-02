export const allSelection = (allchampionList, typeRol) => {
  const arrayValuesChampions = Object.values(allchampionList);
  return arrayValuesChampions.filter((championsList) => championsList.tags.indexOf(typeRol) >= 0);
  /* Es booleano, entonces es true para arrayValuesChampios y al ser false no devuelve nada */
  /* Filter devuelve valores booleanos */
  /* retorna el array de los values, pero ahora filtremos con el callback */
  /* De este nuevo array de valores queremos encontrar aquellos que coincidan con  */
  /* typeRol que le vamos a pasar, pero este tiene que existir, por tanto índice mayor a 0 */
};
export const sortOrder = (arr, condition) => {
  if (condition === 'a-z') {
    arr.sort((a, b) => ((a.id > b.id) ? -1 : 1));
  } else {
    arr.sort((a, b) => ((a.id < b.id) ? -1 : 1));
  }
  return arr;
};

// export const sortOrderNum = (arr, condition)=>{
//   sort((a, b) => b.info[typeSkill] - a.info[typeSkill]);
// }