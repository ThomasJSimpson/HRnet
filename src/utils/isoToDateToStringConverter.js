const isoToDateToStringConverter = (date) => {
  return new Date(date).toLocaleDateString("en-US", {
    month: "2-digit",
    day: "2-digit",
    year: "numeric",
  });
};

export default isoToDateToStringConverter;
