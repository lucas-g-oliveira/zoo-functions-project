const data = require('../data/zoo_data');

const { prices } = data;

console.log(prices);

function countEntrants(entrants) {
  const obj = { child: 0, adult: 0, senior: 0 };
  obj.child = entrants.filter((e) => e.age < 18).length;
  obj.adult = entrants.filter((e) => e.age >= 18 && e.age < 50).length;
  obj.senior = entrants.filter((e) => e.age >= 50).length;
  console.log(obj);
  return obj;
}

function calculateEntry(entrants) {
  if (entrants === undefined) {
    return 0;
  }
  if (JSON.stringify(entrants) === '{}') {
    return 0;
  }
  const obj = countEntrants(entrants);
  obj.child *= data.prices.child;
  obj.senior *= data.prices.senior;
  obj.adult *= data.prices.adult;
  return obj.child + obj.adult + obj.senior;
}

module.exports = { calculateEntry, countEntrants };
