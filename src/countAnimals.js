const data = require('../data/zoo_data');

const { species } = data;

function return2(objInput, bFX, cFX) {
  if (objInput.specie !== undefined && objInput.sex !== undefined) {
    return bFX(objInput.specie, objInput.sex);
  }
  if (objInput.sex === undefined && objInput.specie !== undefined) { return cFX(objInput.specie); }
}

function returnX(input = {}, base = {}) {
  const v1Keys = Object.keys(base);
  const fX1 = () => {
    const retorno = {};
    v1Keys.forEach((e) => { retorno[e] = base[e].female + base[e].male; });
    return retorno;
  };
  const fX2 = (name, sex) => base[name][sex];
  const fX3 = (name) => (base[name].female + base[name].male);

  if (input.specie === undefined && input.sex === undefined) {
    return fX1();
  }
  return return2(input, fX2, fX3);
}

function countAnimals(obj = {}) {
  const tempObj = {};
  const especie = (animalX) => {
    const sexFM = { female: undefined, male: undefined };
    const specie = species.find((e) => e.name === animalX).name;
    sexFM.female = species.find((e) => e.name === animalX).residents
      .filter((f) => f.sex === 'female').length;
    sexFM.male = species.find((e) => e.name === animalX).residents
      .filter((f) => f.sex === 'male').length;
    tempObj[specie] = sexFM;
  };
  species.forEach((element) => especie(element.name));

  return returnX(obj, tempObj);
}

module.exports = countAnimals;
