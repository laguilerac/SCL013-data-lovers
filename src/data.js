//Trae todos lo registros de la data
export const allPokemon = (dataSet) => {
  const newDataArray = [];
  for (let i = 0; i < dataSet.length; i += 1) {
    newDataArray.push({
      id: dataSet[i].id,
      num: dataSet[i].num,
      name: dataSet[i].name,
      img: dataSet[i].img,
      type: dataSet[i].type, 
      height: dataSet[i].height,
      weight: dataSet[i].weight,
      candy: dataSet[i].candy,
      candy_count: dataSet[i].candy_count,
      egg: dataSet[i].egg,
      spawn_chance: dataSet[i].spawn_chance,
      avg_spawns: dataSet[i].avg_spawns,
      spawn_time: dataSet[i].spawn_time,
      multipliers: dataSet[i].multipliers,
      weaknesses: dataSet[i].weaknesses,
      prev_evolution: dataSet[i].prev_evolution,
      next_evolution: dataSet[i].next_evolution,
    });
  }
  return newDataArray;
};
​
//Ordena Pokemones por nombre de la A a la Z
export const orderPokemonAz = (dataSet)=>{
  const newDataArray = [];
  for (let i = 0; i < dataSet.length; i += 1) {
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
​
//Ordena Pokemones por nombre de la Z a la A
export const orderPokemonZa = (dataSet)=>{
  const newDataArray = [];
  for (let i = 0; i < dataSet.length; i += 1) {
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
​
/*
export const orderPokemonDescendant = (dataSet)=>{
  const newDataArray = [];
  for (let i = 0; i < dataSet.length; i += 1) {
    newDataArray.push(dataSet[i]);
  }
  newDataArray.sort((a, b) => {
    if (a.id > b.id) {
      return dataSet.reverse();
      console.log("1");
    }
    if (a.id < b.id) {
      return dataSet;
      console.log("2");
    }
    return 0;
  });
  return newDataArray;
};
*/
//Busca Pokemon por el nombre en barra de navegación
export const searchPoke = (dataSet, text) =>{
  const search = dataSet.filter((e) => {
    return e.name.includes(text);
  });
  return search;
​
}

