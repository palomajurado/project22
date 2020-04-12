/* eslint-disable max-len */

/**
	* 
	* @param {Object or Array} championList 
    
    Usamos el metodo isArray de array para comprobar que el parametro championList sea un array
    si es un array (?) devolvemos su valor,
		si no es un array (:) lo convertimos en array usando object.values();
    y con esta constante ya tenemos el array del objeto de la data para trabajar los metodos SORT MAP FILTER REDUCE.
    
	*/
export const getArray = championList => (Array.isArray(championList) ? championList : Object.values(championList));

/**
 * 
 * @param {Object or Array} championList 
 * @param {String} role 
   
   Filtramos el array retornado por getArray comparando si existe el rol recibido por parametro ROLE (mag8e assasin marksman ,etc) 
   si el indice es mayor igual a 0, filtra el valor tags de cada campeon tags: [0,1]; 
   
   Que es destructurar un array: Es asignarle un nombre a cada indice de un array para poder usarlo, por ejm:
     - Creamos un array de strings con 3 values
     const arr = ['marksman', 'assasin', 'fighter']; 
     - Destructuramos los dos primeros values y le asignamos un name
     const [gentleman, murderer] = arr;
     - Al imprimir en consola los valores destructurados imprimen el VALUE de la posicion del array del que fueron destructurados
     - gentleman se referencia a la posicion [0] del array y murderer hace referencia a la posicion [1] del array
     console.log(gentleman);  // => marksman
     console.log(murderer);  // => assasin
   
   Ques es destructurar un objeto: Es TOMAR uno o varios keyS de un OBJETO, para usarlos posteriormente, por ejm:
    - Creamos un objeto con 3 keys
    const obj = { 
      id: 1,
      name: 'Rosmery', 
      hobbies:['sing','ride','travels','paint'],
      favoriteBooks :{
        book1: 'Juanito el huerfanito',
        book2: 'La casa de Bernarda Alba',
      }
    }
    - Procedemos a la destructuracion tomamos los nombres de los keys que nos interesen
    const {
      name,
      favoriteBooks: {
        book2
      }
    } = obj;
    - Al imprimir en consola los valores destructurados imprimen el value del KEY especificado 
    - Obtenemos el key que hace rferencia a name y al imprimirlo devuelve su valor que seria 'Rosmery'
    - Obtenemos el key q hace ref a favoriteBooks como es un obj podemos destructurarlo para obtener el key book2
      al imprimir devuelve su valor que seria 'La casa de Bernarda Alba'.
    console.log(name);  // => 'Rosmery'
    console.log(book2);  // => 'La casa de Bernarda Alba'

 */
export const allSelection = (championList, role) => getArray(championList).filter(({ tags }) => tags.indexOf(role) >= 0); // 

export const sortOrder = (allchampionList, condition) => getArray(allchampionList).sort(() => (condition === 'az' ? 1 : -1)); // operador ternario 


/**
 * 
 * @param {Array} data
 * @param {String} query

	Filtramos la data de campeones, tomando el valor name de cada campeon, 
	le convertimos en minuscula y buscamos que el name empiece con el valor del parametro query 
	(lo que se va escribiendo en el INPUT)

 */
export const searchByName = (data, query) => data.filter(({ name }) => name.toLowerCase().startsWith(query.toLowerCase()));

/**
 * 
 * @param {Array} data 
 * @param {String} arrTypeData Este parametro la usaremos en el switch para cada caso 
 */
export const arithmeticAverage = (data, arrTypeData) => {
    const sectionAreaPolar = [];
    let emptyArrayToNumbers;
    let finalAverage;
    // Esta funcion recibe un arr de string con los stats equeridos para cada case y los alamacena en la variable sectionAreaPolar[]
    const getStats = arr => arr.forEach(stat => sectionAreaPolar.push(data.stats[stat]));

    switch (arrTypeData) {
        case 'utilidad':
            // Usamos la funcion() getStats y como parametro definimos el array con los stats que se requiera
            getStats([
                'armor',
                'armorperlevel',
                'attackdamage',
                'attackdamageperlevel',
                'attackrange',
            ]);

            emptyArrayToNumbers = sectionAreaPolar.map(numUtilidad => parseFloat(numUtilidad));
            finalAverage = ((emptyArrayToNumbers.reduce((numUtilidad, numUtilidad2) => numUtilidad +
                numUtilidad2)) / emptyArrayToNumbers.length).toFixed(1);
            break;
        case 'dureza':
            getStats([
                'hp',
                'hpperlevel',
                'hpregen',
                'hpregenperlevel',
            ]);

            emptyArrayToNumbers = sectionAreaPolar.map(numUtilidad => parseFloat(numUtilidad));
            finalAverage = ((emptyArrayToNumbers.reduce((numUtilidad, numUtilidad2) => numUtilidad +
                numUtilidad2)) / emptyArrayToNumbers.length).toFixed(1);
            break;
        case 'movilidad':
            getStats([
                'movespeed',
                'attackspeedoffset',
                'attackdamageperlevel',
            ]);
            emptyArrayToNumbers = sectionAreaPolar.map(numUtilidad => parseFloat(numUtilidad));
            finalAverage = ((emptyArrayToNumbers.reduce((numUtilidad, numUtilidad2) => numUtilidad +
                numUtilidad2)) / emptyArrayToNumbers.length).toFixed(1);
            break;
        case 'mp':
            getStats([
                'mp',
                'mpperlevel',
                'mpregen',
                'mpregenperlevel',
                'spellblock',
                'spellblockperlevel',
            ]);
            emptyArrayToNumbers = sectionAreaPolar.map(numUtilidad => parseFloat(numUtilidad));
            finalAverage = ((emptyArrayToNumbers.reduce((numUtilidad, numUtilidad2) => numUtilidad +
                numUtilidad2)) / emptyArrayToNumbers.length).toFixed(1);
            break;
        default:
            return false;
    }
    return finalAverage;
};