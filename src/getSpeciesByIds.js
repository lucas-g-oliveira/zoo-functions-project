const data = require('../data/zoo_data');

const { species } = data;

function getSpeciesByIds(ids, ...others) {
  if (ids === undefined) return [];
  const listReturn = [];
  const inputs = [ids, ...others];
  inputs.forEach((e) => {
    const myCalback = (acc, curr) => {
      if (curr.id === e) {
        return curr;
      }
      return acc;
    };
    listReturn.push(species.reduce(myCalback, {}));
  });
  return listReturn;
}

module.exports = getSpeciesByIds;
