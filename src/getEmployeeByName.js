const data = require('../data/zoo_data');

const { employees } = data;

function getEmployeeByName(employeeName) {
  const result = employees.find((e) => (
    e.firstName === employeeName || e.lastName === employeeName));
  return (
    typeof (result) === 'undefined' || typeof (employeeName) === 'undefined') ? {} : result;
}

module.exports = getEmployeeByName;
