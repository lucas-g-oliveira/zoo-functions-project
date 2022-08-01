const data = require('../data/zoo_data');

const { employees, species } = data;

function cureInput(obj = {}) {
  if (obj.name !== undefined) {
    return obj.name;
  }
  if (obj.id !== undefined) {
    return obj.id;
  }
}

function normalizeInputType(input = {}) {
  const idOrName = cureInput(input);
  const listID = employees.map((e) => e.id);
  const listFistName = employees.map((e) => e.firstName);
  const listLastName = employees.map((e) => e.lastName);
  if (listID.some((e) => e === idOrName)) {
    return employees.filter(((a) => a.id === idOrName));
  }
  if (listFistName.some((e) => e === idOrName)) {
    return employees.filter(((a) => a.firstName === idOrName));
  }
  if (listLastName.some((e) => e === idOrName)) {
    return employees.filter(((a) => a.lastName === idOrName));
  }
  if (idOrName !== undefined) {
    throw new Error('Informações inválidas');
  }
  return employees;
}

function getFullNameById(idMananger) {
  if (idMananger === undefined) {
    return undefined;
  }
  const firstName = employees.find((e) => e.id === idMananger);
  const lastName = employees.find((e) => e.id === idMananger);
  return `${firstName.firstName} ${lastName.lastName}`;
}

function getSpecieById(idSpecieList = []) {
  const listReturnAnimal = [];
  idSpecieList
    .forEach((i) => {
      listReturnAnimal
        .push(species.find((e) => e.id === i).name);
    });
  return listReturnAnimal;
}

function getLocationsSpecieById(idSpecie) {
  const listReturnlocale = [];
  idSpecie
    .forEach((i) => {
      listReturnlocale
        .push(species.find((e) => e.id === i).location);
    });
  return listReturnlocale;
}

function getEmployeesCoverage(idOrNameSearch) {
  const pessoa = normalizeInputType(idOrNameSearch);
  const listOutPut = [];

  pessoa.forEach((e) => {
    const outputModel = {
      id: e.id,
      fullName: getFullNameById(e.id),
      species: getSpecieById(e.responsibleFor),
      locations: getLocationsSpecieById(e.responsibleFor),
    };
    listOutPut.push(outputModel);
  });

  if (listOutPut.length === 1) {
    return listOutPut[0];
  }
  return listOutPut;
}

module.exports = getEmployeesCoverage;
