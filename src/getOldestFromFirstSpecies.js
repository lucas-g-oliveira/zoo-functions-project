const data = require('../data/zoo_data');

function getAnyById(id) {
  const idAnimals = data.species.map((e) => e.id);
  const idEmpoyes = data.employees.map((e) => e.id);
  if (id === undefined) {
    return undefined;
  }
  if (idAnimals.some((e) => e === id)) {
    return data.species.find((e) => e.id === id);
  }
  if (idEmpoyes.some((e) => e === id)) {
    return data.employees.find((e) => e.id === id);
  }
}

function getMoreOldOfSpecie(id) {
  const animals = getAnyById(id);
  const listResid = animals.residents.sort((a, b) => b.age - a.age);
  return listResid[0];
}

function getOldestFromFirstSpecies(id) {
  const returnFX = [];
  const people = getAnyById(id);
  const firstSpecie = getAnyById(people.responsibleFor[0]);
  returnFX.push(getMoreOldOfSpecie(firstSpecie.id).name);
  returnFX.push(getMoreOldOfSpecie(firstSpecie.id).sex);
  returnFX.push(getMoreOldOfSpecie(firstSpecie.id).age);

  return returnFX;
}

module.exports = getOldestFromFirstSpecies;
