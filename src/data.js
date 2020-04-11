/* eslint-disable max-len */
export const getArray = championList => (Array.isArray(championList) ? championList : Object.values(championList)); // coverti array el objeto data

export const allSelection = (championList, role) => getArray(championList).filter(({ tags }) => tags.indexOf(role) >= 0); // destructurando arreglos

export const sortOrder = (allchampionList, condition) => getArray(allchampionList).sort(() => (condition === 'az' ? 1 : -1)); // operador ternario

export const searchByName = (data, query) => data.filter(({ name }) => name.toLowerCase().startsWith(query.toLowerCase()));

export const arithmeticAverage = (data, arrTypeData) => {
    const sectionAreaPolar = [];
    let emptyArrayToNumbers;
    let finalAverage;
    const getStats = arr => arr.forEach(stat => sectionAreaPolar.push(data.stats[stat]));

    switch (arrTypeData) {
        case 'utilidad':
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