import { TCard } from '../components/blocks/card';
import { TCardProps } from '../components/blocks/data/data-favirites-cityes';
import { NUMBER_OF_STARS, TOTAL_PERCENTEGE } from '../const';

function capitalize(str: string) {
  return str[0].toUpperCase() + str.slice(1);
}

function addPluralEnging(count: number) {
  return count !== 1 ? 's' : '';
}

// export function getCities (array:TCardProps) {
//   array.reduce((acc, city) => {
//     if (acc.map[city.city.name]) // если данный город уже был
//       return acc; // ничего не делаем, возвращаем уже собранное

//     acc.map[city.city.name] = true; // помечаем город, как обработанный
//     acc.cities.push(city.city); // добавляем объект в массив городов
//     return acc; // возвращаем собранное
//   }, {
//     map: {}, // здесь будут отмечаться обработанные города
//     cities: [] // здесь конечный массив уникальных городов
//   })
//   .cities; // получаем конечный массив
// }

function getDate(data:string) {
  const date = new Date(data);
  const mounth = date.toLocaleString('default', { month: 'long' });
  const year = date.getFullYear();

  const newMounth = capitalize(mounth);

  return (`${newMounth} ${year}`);
}

function addZero(num: number) {
  if (num >= 0 && num <= 9) {
    return `${0}num`;
  } else {
    return num;
  }
}

function getDateTime(data: string) {
  const date = new Date(data);
  return (`${addZero(date.getFullYear())}-${addZero(date.getMonth() + 1)}-${addZero(date.getDate())}`);
}

function conversionToPercentage(rating: number) {
  const ratingRound = Math.round(rating);
  return (`${ratingRound * TOTAL_PERCENTEGE / NUMBER_OF_STARS}%`);
}

type TAcc = {
  [key: string]: TCard[];
}

function transformArray(data: TCardProps) {
  const objectData = data.reduce(
    (acc:TAcc, object) => {
      const city: string = object.city.name;

      acc[city] ??= [];
      acc[city].push(object);
      return acc;
    },
    {},
  );

  return objectData;
}

export { capitalize, addPluralEnging, getDate, getDateTime, conversionToPercentage, transformArray};
