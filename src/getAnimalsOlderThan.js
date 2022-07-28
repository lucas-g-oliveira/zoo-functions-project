const data = require('../data/zoo_data');

const { species } = data;

function getAnimalsOlderThan(animal, age) {
  const result = species.find((element) => element.name === animal && element.residents
    .map((e2) => e2.age).every((agee) => agee >= age));
  console.log(result);
  return typeof (result) !== 'undefined';
}

console.log(getAnimalsOlderThan('bears', 5));
module.exports = getAnimalsOlderThan;
