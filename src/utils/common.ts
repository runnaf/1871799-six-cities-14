function capitalize(str: string) {
  return str[0].toUpperCase() + str.slice(1);
}

function addPluralEnging(count: number) {
  return count !== 1 ? 's' : '';
}

export { capitalize, addPluralEnging };
