const data = require('../data/zoo_data');

const { hours, species } = data;

function daysOfTeAnimal(animal) {
  return species.find((e) => e.name === animal).availability;
}

function animalsOfTheDay(day) {
  const finaly = {};
  const animalsOfDay = [];
  const hoursDay = `Open from ${hours[day].open}am until ${hours[day].close}pm`;
  species.forEach((e) => {
    if (e.availability.find((i) => i === day)) {
      animalsOfDay.push(e.name);
    }
  });
  if (day !== 'Monday') {
    finaly[day] = { officeHour: hoursDay, exhibition: animalsOfDay };
  } else {
    finaly[day] = { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' };
  }
  return finaly;
}

function getAllDaysHrs() {
  const returnObject = {};
  Object.keys(hours).forEach((e) => {
    returnObject[e] = animalsOfTheDay(e)[e];
  });
  return returnObject;
}

function getSchedule(scheduleTarget) {
  const daysOfTheWeek = Object.keys(hours);
  const allAnimals = species.map((e) => e.name);

  if (allAnimals.some((e) => e === scheduleTarget)) {
    console.log('Passou');
    return daysOfTeAnimal(scheduleTarget);
  }
  if (daysOfTheWeek.some((e) => e === scheduleTarget)) {
    return animalsOfTheDay(scheduleTarget);
  }
  return getAllDaysHrs();
}

module.exports = getSchedule;
