// import createRandomEmployee from "../../utils/createRandomEmployee";

// let employees = [];
// for (let i = 0; i < 50; i++) {
//   employees.push(createRandomEmployee());
// }

const mockedData = [
  {
    firstName: "Frank",
    lastName: "Smith",
    dateOfBirth: "1995-10-29T00:00:00.000Z",
    startDate: "2011-10-25T00:00:00.000Z",
    department: "Customer Service",
    street: "Street 97",
    city: "City 63",
    state: "Ohio",
    stateAbbrev: "OH",
    zipCode: "77948",
  },
  {
    firstName: "Grace",
    lastName: "Rodriguez",
    dateOfBirth: "1989-08-03T00:00:00.000Z",
    startDate: "2015-06-04T00:00:00.000Z",
    department: "Logistics",
    street: "Street 48",
    city: "City 82",
    state: "Illinois",
    stateAbbrev: "IL",
    zipCode: "72994",
  },
  {
    firstName: "Eve",
    lastName: "Garcia",
    dateOfBirth: "1986-02-17T00:00:00.000Z",
    startDate: "2021-02-15T00:00:00.000Z",
    department: "R&D",
    street: "Street 34",
    city: "City 92",
    state: "Georgia",
    stateAbbrev: "GE",
    zipCode: "30077",
  },
  {
    firstName: "Harry",
    lastName: "Miller",
    dateOfBirth: "1992-10-13T00:00:00.000Z",
    startDate: "2020-08-04T00:00:00.000Z",
    department: "IT",
    street: "Street 7",
    city: "City 93",
    state: "Michigan",
    stateAbbrev: "MI",
    zipCode: "87242",
  },
  {
    firstName: "Eve",
    lastName: "Jones",
    dateOfBirth: "1989-02-13T00:00:00.000Z",
    startDate: "2021-10-26T00:00:00.000Z",
    department: "Customer Service",
    street: "Street 37",
    city: "City 28",
    state: "North Carolina",
    stateAbbrev: "NO",
    zipCode: "82873",
  },
  {
    firstName: "Grace",
    lastName: "Wilson",
    dateOfBirth: "1979-12-19T00:00:00.000Z",
    startDate: "2012-09-04T00:00:00.000Z",
    department: "HR",
    street: "Street 4",
    city: "City 78",
    state: "Texas",
    stateAbbrev: "TE",
    zipCode: "46363",
  },
  {
    firstName: "Carol",
    lastName: "Williams",
    dateOfBirth: "1974-09-18T00:00:00.000Z",
    startDate: "2013-01-09T00:00:00.000Z",
    department: "Sales",
    street: "Street 90",
    city: "City 8",
    state: "Texas",
    stateAbbrev: "TE",
    zipCode: "97057",
  },
  {
    firstName: "Frank",
    lastName: "Johnson",
    dateOfBirth: "1995-08-23T00:00:00.000Z",
    startDate: "2017-11-01T00:00:00.000Z",
    department: "Sales",
    street: "Street 36",
    city: "City 88",
    state: "Illinois",
    stateAbbrev: "IL",
    zipCode: "18204",
  },
  {
    firstName: "Alice",
    lastName: "Garcia",
    dateOfBirth: "1976-07-30T00:00:00.000Z",
    startDate: "2013-02-16T00:00:00.000Z",
    department: "Legal",
    street: "Street 32",
    city: "City 72",
    state: "California",
    stateAbbrev: "CA",
    zipCode: "89800",
  },
  {
    firstName: "Carol",
    lastName: "Brown",
    dateOfBirth: "1986-01-15T00:00:00.000Z",
    startDate: "2016-02-16T00:00:00.000Z",
    department: "Legal",
    street: "Street 89",
    city: "City 45",
    state: "New York",
    stateAbbrev: "NE",
    zipCode: "67104",
  },
  {
    firstName: "Eve",
    lastName: "Garcia",
    dateOfBirth: "1998-02-08T00:00:00.000Z",
    startDate: "2019-06-28T00:00:00.000Z",
    department: "Sales",
    street: "Street 76",
    city: "City 13",
    state: "California",
    stateAbbrev: "CA",
    zipCode: "39892",
  },
  {
    firstName: "Grace",
    lastName: "Wilson",
    dateOfBirth: "1997-09-10T00:00:00.000Z",
    startDate: "2010-03-28T00:00:00.000Z",
    department: "R&D",
    street: "Street 14",
    city: "City 92",
    state: "Ohio",
    stateAbbrev: "OH",
    zipCode: "27155",
  },
  {
    firstName: "John",
    lastName: "Davis",
    dateOfBirth: "1991-06-29T00:00:00.000Z",
    startDate: "2014-11-18T00:00:00.000Z",
    department: "Customer Service",
    street: "Street 39",
    city: "City 32",
    state: "Michigan",
    stateAbbrev: "MI",
    zipCode: "82175",
  },
  {
    firstName: "Eve",
    lastName: "Jones",
    dateOfBirth: "1977-01-01T00:00:00.000Z",
    startDate: "2017-04-24T00:00:00.000Z",
    department: "HR",
    street: "Street 87",
    city: "City 19",
    state: "Pennsylvania",
    stateAbbrev: "PE",
    zipCode: "91225",
  },
  {
    firstName: "David",
    lastName: "Miller",
    dateOfBirth: "1985-11-10T00:00:00.000Z",
    startDate: "2016-09-08T00:00:00.000Z",
    department: "IT",
    street: "Street 99",
    city: "City 64",
    state: "New York",
    stateAbbrev: "NE",
    zipCode: "55112",
  },
  {
    firstName: "Bob",
    lastName: "Davis",
    dateOfBirth: "1979-08-29T00:00:00.000Z",
    startDate: "2012-02-14T00:00:00.000Z",
    department: "R&D",
    street: "Street 34",
    city: "City 81",
    state: "Ohio",
    stateAbbrev: "OH",
    zipCode: "17278",
  },
  {
    firstName: "Frank",
    lastName: "Johnson",
    dateOfBirth: "1984-12-06T00:00:00.000Z",
    startDate: "2017-12-23T00:00:00.000Z",
    department: "R&D",
    street: "Street 2",
    city: "City 51",
    state: "Michigan",
    stateAbbrev: "MI",
    zipCode: "87462",
  },
  {
    firstName: "Carol",
    lastName: "Garcia",
    dateOfBirth: "1973-11-27T00:00:00.000Z",
    startDate: "2011-06-29T00:00:00.000Z",
    department: "IT",
    street: "Street 96",
    city: "City 46",
    state: "Michigan",
    stateAbbrev: "MI",
    zipCode: "42026",
  },
  {
    firstName: "Carol",
    lastName: "Johnson",
    dateOfBirth: "1996-05-06T00:00:00.000Z",
    startDate: "2018-06-11T00:00:00.000Z",
    department: "Logistics",
    street: "Street 48",
    city: "City 69",
    state: "Texas",
    stateAbbrev: "TE",
    zipCode: "64316",
  },
  {
    firstName: "Eve",
    lastName: "Wilson",
    dateOfBirth: "1973-09-29T00:00:00.000Z",
    startDate: "2017-02-21T00:00:00.000Z",
    department: "HR",
    street: "Street 43",
    city: "City 26",
    state: "California",
    stateAbbrev: "CA",
    zipCode: "22955",
  },
  {
    firstName: "Alice",
    lastName: "Rodriguez",
    dateOfBirth: "1999-03-13T00:00:00.000Z",
    startDate: "2011-04-27T00:00:00.000Z",
    department: "Operations",
    street: "Street 9",
    city: "City 67",
    state: "Georgia",
    stateAbbrev: "GE",
    zipCode: "28021",
  },
  {
    firstName: "Carol",
    lastName: "Wilson",
    dateOfBirth: "1971-10-25T00:00:00.000Z",
    startDate: "2021-08-26T00:00:00.000Z",
    department: "Marketing",
    street: "Street 36",
    city: "City 93",
    state: "Georgia",
    stateAbbrev: "GE",
    zipCode: "55520",
  },
  {
    firstName: "Carol",
    lastName: "Williams",
    dateOfBirth: "1974-09-13T00:00:00.000Z",
    startDate: "2017-09-17T00:00:00.000Z",
    department: "Marketing",
    street: "Street 26",
    city: "City 58",
    state: "Ohio",
    stateAbbrev: "OH",
    zipCode: "79154",
  },
  {
    firstName: "Carol",
    lastName: "Williams",
    dateOfBirth: "1980-05-19T00:00:00.000Z",
    startDate: "2015-01-11T00:00:00.000Z",
    department: "Legal",
    street: "Street 95",
    city: "City 23",
    state: "Texas",
    stateAbbrev: "TE",
    zipCode: "82340",
  },
  {
    firstName: "Eve",
    lastName: "Rodriguez",
    dateOfBirth: "1987-04-04T00:00:00.000Z",
    startDate: "2018-07-31T00:00:00.000Z",
    department: "R&D",
    street: "Street 79",
    city: "City 63",
    state: "Pennsylvania",
    stateAbbrev: "PE",
    zipCode: "86219",
  },
  {
    firstName: "Harry",
    lastName: "Rodriguez",
    dateOfBirth: "1998-12-20T00:00:00.000Z",
    startDate: "2015-07-16T00:00:00.000Z",
    department: "IT",
    street: "Street 50",
    city: "City 80",
    state: "Michigan",
    stateAbbrev: "MI",
    zipCode: "73826",
  },
  {
    firstName: "Bob",
    lastName: "Williams",
    dateOfBirth: "1995-04-18T00:00:00.000Z",
    startDate: "2010-01-15T00:00:00.000Z",
    department: "Customer Service",
    street: "Street 5",
    city: "City 44",
    state: "Pennsylvania",
    stateAbbrev: "PE",
    zipCode: "99093",
  },
  {
    firstName: "Eve",
    lastName: "Miller",
    dateOfBirth: "1989-10-02T00:00:00.000Z",
    startDate: "2016-07-26T00:00:00.000Z",
    department: "R&D",
    street: "Street 50",
    city: "City 4",
    state: "California",
    stateAbbrev: "CA",
    zipCode: "15856",
  },
  {
    firstName: "David",
    lastName: "Wilson",
    dateOfBirth: "1989-12-23T00:00:00.000Z",
    startDate: "2020-10-27T00:00:00.000Z",
    department: "IT",
    street: "Street 88",
    city: "City 7",
    state: "Michigan",
    stateAbbrev: "MI",
    zipCode: "56092",
  },
  {
    firstName: "Bob",
    lastName: "Brown",
    dateOfBirth: "1980-07-25T00:00:00.000Z",
    startDate: "2013-09-16T00:00:00.000Z",
    department: "R&D",
    street: "Street 90",
    city: "City 90",
    state: "North Carolina",
    stateAbbrev: "NO",
    zipCode: "75972",
  },
  {
    firstName: "Carol",
    lastName: "Rodriguez",
    dateOfBirth: "1983-08-03T00:00:00.000Z",
    startDate: "2014-07-25T00:00:00.000Z",
    department: "Logistics",
    street: "Street 70",
    city: "City 81",
    state: "Texas",
    stateAbbrev: "TE",
    zipCode: "56777",
  },
  {
    firstName: "Grace",
    lastName: "Jones",
    dateOfBirth: "1981-06-10T00:00:00.000Z",
    startDate: "2020-08-15T00:00:00.000Z",
    department: "Marketing",
    street: "Street 76",
    city: "City 58",
    state: "Georgia",
    stateAbbrev: "GE",
    zipCode: "66954",
  },
  {
    firstName: "Grace",
    lastName: "Garcia",
    dateOfBirth: "1991-01-10T00:00:00.000Z",
    startDate: "2011-01-31T00:00:00.000Z",
    department: "Finance",
    street: "Street 48",
    city: "City 12",
    state: "New York",
    stateAbbrev: "NE",
    zipCode: "55702",
  },
  {
    firstName: "Carol",
    lastName: "Smith",
    dateOfBirth: "1988-06-23T00:00:00.000Z",
    startDate: "2018-07-03T00:00:00.000Z",
    department: "HR",
    street: "Street 69",
    city: "City 90",
    state: "Georgia",
    stateAbbrev: "GE",
    zipCode: "45066",
  },
  {
    firstName: "Bob",
    lastName: "Wilson",
    dateOfBirth: "1998-07-29T00:00:00.000Z",
    startDate: "2019-09-03T00:00:00.000Z",
    department: "Legal",
    street: "Street 73",
    city: "City 71",
    state: "Florida",
    stateAbbrev: "FL",
    zipCode: "88222",
  },
  {
    firstName: "Grace",
    lastName: "Jones",
    dateOfBirth: "1993-09-16T00:00:00.000Z",
    startDate: "2012-10-04T00:00:00.000Z",
    department: "Customer Service",
    street: "Street 3",
    city: "City 59",
    state: "Ohio",
    stateAbbrev: "OH",
    zipCode: "60658",
  },
  {
    firstName: "Grace",
    lastName: "Wilson",
    dateOfBirth: "1980-11-13T00:00:00.000Z",
    startDate: "2017-04-14T00:00:00.000Z",
    department: "IT",
    street: "Street 48",
    city: "City 40",
    state: "Ohio",
    stateAbbrev: "OH",
    zipCode: "27537",
  },
  {
    firstName: "Bob",
    lastName: "Smith",
    dateOfBirth: "1983-03-22T00:00:00.000Z",
    startDate: "2012-10-02T00:00:00.000Z",
    department: "HR",
    street: "Street 66",
    city: "City 24",
    state: "New York",
    stateAbbrev: "NE",
    zipCode: "18488",
  },
  {
    firstName: "Alice",
    lastName: "Smith",
    dateOfBirth: "1996-04-02T00:00:00.000Z",
    startDate: "2019-03-09T00:00:00.000Z",
    department: "Finance",
    street: "Street 45",
    city: "City 86",
    state: "Ohio",
    stateAbbrev: "OH",
    zipCode: "90998",
  },
  {
    firstName: "Eve",
    lastName: "Smith",
    dateOfBirth: "1990-12-02T00:00:00.000Z",
    startDate: "2018-10-22T00:00:00.000Z",
    department: "Marketing",
    street: "Street 44",
    city: "City 85",
    state: "Michigan",
    stateAbbrev: "MI",
    zipCode: "21965",
  },
  {
    firstName: "Harry",
    lastName: "Garcia",
    dateOfBirth: "1975-02-24T00:00:00.000Z",
    startDate: "2011-04-19T00:00:00.000Z",
    department: "Finance",
    street: "Street 80",
    city: "City 53",
    state: "California",
    stateAbbrev: "CA",
    zipCode: "70964",
  },
  {
    firstName: "Alice",
    lastName: "Smith",
    dateOfBirth: "1984-11-04T00:00:00.000Z",
    startDate: "2012-02-20T00:00:00.000Z",
    department: "Logistics",
    street: "Street 46",
    city: "City 66",
    state: "Georgia",
    stateAbbrev: "GE",
    zipCode: "35444",
  },
  {
    firstName: "Eve",
    lastName: "Miller",
    dateOfBirth: "1981-12-30T00:00:00.000Z",
    startDate: "2010-08-01T00:00:00.000Z",
    department: "Customer Service",
    street: "Street 8",
    city: "City 85",
    state: "Michigan",
    stateAbbrev: "MI",
    zipCode: "46118",
  },
  {
    firstName: "Frank",
    lastName: "Jones",
    dateOfBirth: "1984-06-04T00:00:00.000Z",
    startDate: "2017-03-20T00:00:00.000Z",
    department: "R&D",
    street: "Street 75",
    city: "City 4",
    state: "New York",
    stateAbbrev: "NE",
    zipCode: "29428",
  },
  {
    firstName: "David",
    lastName: "Miller",
    dateOfBirth: "1996-03-07T00:00:00.000Z",
    startDate: "2020-03-20T00:00:00.000Z",
    department: "IT",
    street: "Street 41",
    city: "City 52",
    state: "Illinois",
    stateAbbrev: "IL",
    zipCode: "91706",
  },
  {
    firstName: "John",
    lastName: "Williams",
    dateOfBirth: "1986-12-03T00:00:00.000Z",
    startDate: "2012-02-27T00:00:00.000Z",
    department: "IT",
    street: "Street 52",
    city: "City 12",
    state: "Michigan",
    stateAbbrev: "MI",
    zipCode: "78509",
  },
  {
    firstName: "Harry",
    lastName: "Wilson",
    dateOfBirth: "1986-10-11T00:00:00.000Z",
    startDate: "2010-08-30T00:00:00.000Z",
    department: "Sales",
    street: "Street 52",
    city: "City 70",
    state: "Illinois",
    stateAbbrev: "IL",
    zipCode: "37555",
  },
  {
    firstName: "Harry",
    lastName: "Wilson",
    dateOfBirth: "1985-03-01T00:00:00.000Z",
    startDate: "2018-06-11T00:00:00.000Z",
    department: "Legal",
    street: "Street 59",
    city: "City 10",
    state: "Illinois",
    stateAbbrev: "IL",
    zipCode: "14068",
  },
  {
    firstName: "Jane",
    lastName: "Rodriguez",
    dateOfBirth: "1986-06-28T00:00:00.000Z",
    startDate: "2019-01-10T00:00:00.000Z",
    department: "Customer Service",
    street: "Street 10",
    city: "City 52",
    state: "Michigan",
    stateAbbrev: "MI",
    zipCode: "19949",
  },
  {
    firstName: "Frank",
    lastName: "Smith",
    dateOfBirth: "1981-03-22T00:00:00.000Z",
    startDate: "2011-02-05T00:00:00.000Z",
    department: "Logistics",
    street: "Street 85",
    city: "City 93",
    state: "Georgia",
    stateAbbrev: "GE",
    zipCode: "88269",
  },
  {
    firstName: "Thomas",
    lastName: "Berenger",
    dateOfBirth: "1988-07-17T22:00:00.000Z",
    startDate: "2024-01-31T23:00:00.000Z",
    department: "Sales",
    street: "97 rue de la ville",
    city: "Montpellier",
    state: "Connecticut",
    stateAbbrev: "CT",
    zipCode: "34000",
  },
];
export default mockedData;
// export default employees;