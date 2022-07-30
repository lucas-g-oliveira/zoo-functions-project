const data = require('../data/zoo_data');

const { employees } = data;

function getIdAllsManages() {
  const tempList = [];
  employees.map((e) => e.managers).forEach((o) => {
    if (o[0] !== undefined) {
      tempList.push(o[0]);
    }
    if (o[1] !== undefined) {
      tempList.push(o[1]);
    }
  });
  return [...new Set(tempList)];
}

function getAllPeoplesOfMnagers() {
  const data2 = {};
  getIdAllsManages().forEach((e) => { data2[e] = []; });
  employees.map((e) => {
    if (e.managers[0] !== undefined) {
      data2[e.managers[0]].push(`${e.firstName} ${e.lastName}`);
    }
    if (e.managers[1] !== undefined) {
      data2[e.managers[1]].push(`${e.firstName} ${e.lastName}`);
    }
    return true;
  });
  return data2;
}

function isManager(id) {
  return getIdAllsManages().some((e) => e === id);
}

function getRelatedEmployees(managerId) {
  if (getAllPeoplesOfMnagers()[managerId] === undefined) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }

  try {
    return getAllPeoplesOfMnagers()[managerId];
  } catch (e) {
    return e.mesage;
  }
}

module.exports = { isManager, getRelatedEmployees };
