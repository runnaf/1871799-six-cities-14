import { NUMBER_OF_STARS, TOTAL_PERCENTEGE } from '../const';

function capitalize(str: string) {
  return str[0].toUpperCase() + str.slice(1);
}

function addPluralEnging(count: number) {
  return count !== 1 ? 's' : '';
}

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

export { capitalize, addPluralEnging, getDate, getDateTime, conversionToPercentage };
