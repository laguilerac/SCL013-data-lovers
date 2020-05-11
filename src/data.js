//Trae todos lo registros de la data
export const allPokemon = (dataSet) => {
  const newDataArray = [];
  for (let i = 0; i < dataSet.length; i += 1) {
    newDataArray.push(dataSet[i]);
  }
  return newDataArray;
};
//Ordena Pokemones por nombre de la A a la Z
export const orderPokemonAz = (dataSet)=>{
  const newDataArray = [];
  for (let i = 0; i < dataSet.length; i++) {
    newDataArray.push(dataSet[i]);
  }
  newDataArray.sort((a, b) => {
    if (a.name > b.name) {
      return 1;
    }
    if (a.name < b.name) {
      return -1;
    }
    return 0;
  });
  return newDataArray;
};
//Ordena Pokemones por nombre de la Z a la A
export const orderPokemonZa = (dataSet)=>{
  const newDataArray = [];
  for (let i = 0; i < dataSet.length; i ++) {
    newDataArray.push(dataSet[i]);
  }
  newDataArray.sort((a, b) => {
    if (a.name > b.name) {
      return -1;
    }
    if (a.name < b.name) {
      return 1;
    }
    return 0;
  });
  return newDataArray;
};
//Ordena Pokemones por de manera descendiente 151 al 1
export const orderedDataDescendant = (dataSet)=>{
  const newDataArray = [];
  for (let i = 0; i < dataSet.length; i ++) {
    newDataArray.push(dataSet[i]);
  }
  newDataArray.sort((a, b) => parseInt(b.num -a.num)); return newDataArray;
}; 
//Filtrar Pokemones por Tipo
export const filterType = (dataSet, tipo) => {
  const newDataArray = [];
  for (let i = 0; i < dataSet.length; i += 1) {
    newDataArray.push(dataSet[i]);
  }
  return newDataArray.filter(poke => poke.type.includes(tipo));
};
//Filtrar Pokemones por Debilidad
export const filterWeakness = (dataSet, debilidad) => {
  const newDataArray = [];
  for (let i = 0; i < dataSet.length; i += 1) {
    newDataArray.push(dataSet[i]);
  }
  return newDataArray.filter(pokes => pokes.weaknesses.includes(debilidad));
};
//Busca Pokemon por el nombre en barra de navegación
export const searchPoke = (dataSet, text) =>{
  const search = dataSet.filter((e) => {
    return e.name.includes(text);
  });
  return search;
}