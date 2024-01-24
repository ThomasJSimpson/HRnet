const getMaxOptionsChoices = (table) => {
  const maxRowsFilteredDecimal = table.getFilteredRowModel().rows.length === 0 ? 1 : table.getFilteredRowModel().rows.length / 10;
  const optionsChoicesNumber = Math.ceil(maxRowsFilteredDecimal);
  return optionsChoicesNumber;
};

export default getMaxOptionsChoices;
