function getRandomDate(start, end) {
  let date = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  return date.toISOString().split("T")[0];
}

function getRandomElement(array) {
  return array[Math.floor(Math.random() * array.length)];
}

const firstNames = ["John", "Jane", "Alice", "Bob", "Carol", "David", "Eve", "Frank", "Grace", "Harry"];
const lastNames = ["Smith", "Johnson", "Williams", "Brown", "Jones", "Miller", "Davis", "Garcia", "Rodriguez", "Wilson"];
const departments = ["HR", "IT", "Finance", "Marketing", "Sales", "Logistics", "R&D", "Customer Service", "Legal", "Operations"];
const states = ["California", "New York", "Texas", "Florida", "Pennsylvania", "Illinois", "Ohio", "Georgia", "North Carolina", "Michigan"];

export default function createRandomEmployee() {
  let firstName = getRandomElement(firstNames);
  let lastName = getRandomElement(lastNames);
  let department = getRandomElement(departments);
  let state = getRandomElement(states);
  let stateAbbrev = state.substring(0, 2).toUpperCase();

  let dateOfBirth = getRandomDate(new Date(1970, 0, 1), new Date(2000, 0, 1));
  let startDate = getRandomDate(new Date(2010, 0, 1), new Date(2022, 0, 1));

  while (new Date(startDate) < new Date(dateOfBirth)) {
    startDate = getRandomDate(new Date(2010, 0, 1), new Date(2022, 0, 1));
  }

  return {
    firstName,
    lastName,
    dateOfBirth: new Date(dateOfBirth).toISOString(),
    startDate: new Date(startDate).toISOString(),
    department,
    street: `Street ${Math.floor(Math.random() * 100)}`,
    city: `City ${Math.floor(Math.random() * 100)}`,
    state,
    stateAbbrev,
    zipCode: `${Math.floor(10000 + Math.random() * 90000)}`,
  };
}
