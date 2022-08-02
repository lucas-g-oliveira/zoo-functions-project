const data = require('../data/zoo_data');

function setFinal(listSpecie = [], listNames = [], sort) {
  const list = [];
  console.log(listNames);
  for (let index = 0; index < listSpecie.length; index += 1) {
    const obj = {};
    obj[listSpecie[index]] = (sort) ? listNames[index].sort() : listNames[index];
    list.push(obj);
  }
  return list;
}

function getAnimalNamesBySpecie(input) {
  const { sex } = input;
  const sort = input.sorted;
  const specie = input.baseData;
  const objRetorno = {};
  if (sex === undefined) {
    objRetorno[specie] = data.species
      .find((e) => e.name === specie).residents.map((i) => i.name);
  } else {
    objRetorno[specie] = data.species
      .find((e) => e.name === specie).residents
      .filter((i) => i.sex === sex).map((u) => u.name);
  }
  if (sort) {
    return objRetorno[specie].sort();
  }
  return objRetorno[specie];
}

function transform(input) {
  let listconfig = [];
  const list = input.baseData;
  const sort = input.sorted;
  const listAnimals = [];
  const output = { ...input };
  listconfig = list.map((e) => {
    output.baseData = e;
    const temp = getAnimalNamesBySpecie(output);
    listAnimals.push(e);
    return temp;
  });
  return setFinal(listAnimals, listconfig, sort);
}

function returnCase(input) {
  const { NE, NW, SE, SW } = input.baseData;
  const modelOutput = {
    baseData: NE, includeNames: input.includeNames, sex: input.sex, sorted: input.sorted,
  };
  const modelOutputNE = { ...modelOutput };
  const modelOutputNW = { ...modelOutput };
  const modelOutputSE = { ...modelOutput };
  const modelOutputSW = { ...modelOutput };
  modelOutputNE.baseData = NE;
  modelOutputNW.baseData = NW;
  modelOutputSE.baseData = SE;
  modelOutputSW.baseData = SW;
  return {
    NE: transform(modelOutputNE),
    NW: transform(modelOutputNW),
    SE: transform(modelOutputSE),
    SW: transform(modelOutputSW),
  };
}

function inputAnalizer(input, objBase) {
  const check1 = input.includeNames;
  const check2 = (
    (input.sex === 'female' || input.sex === 'male')
    && check1 === true)
    ? input.sex : undefined;
  const check3 = input.sorted;
  return returnCase({ baseData: objBase, includeNames: check1, sex: check2, sorted: check3 });
}

function getAnimalMap(firstInput = {}) {
  const mapFnl = {
    NE: data.species.filter((e) => e.location === 'NE'),
    NW: data.species.filter((e) => e.location === 'NW'),
    SE: data.species.filter((e) => e.location === 'SE'),
    SW: data.species.filter((e) => e.location === 'SW'),
  };
  mapFnl.NE = mapFnl.NE.map((e) => e.name);
  mapFnl.NW = mapFnl.NW.map((e) => e.name);
  mapFnl.SE = mapFnl.SE.map((e) => e.name);
  mapFnl.SW = mapFnl.SW.map((e) => e.name);

  if (firstInput.includeNames === undefined) {
    return mapFnl;
  }
  return inputAnalizer(firstInput, mapFnl);
}

module.exports = getAnimalMap;
