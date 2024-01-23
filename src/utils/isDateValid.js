const isDateValid = (date, minYear, maxYear) => {
  const year = date.getFullYear();
  return year >= minYear && year <= maxYear;
};

export default isDateValid;
