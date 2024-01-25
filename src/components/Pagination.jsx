import ButtonsNavPages from "./ButtonsNavPages";

const Pagination = ({ table, ...props }) => {
  const rowsNb = table.getRowModel().rows.length;
  console.log("return rowsNb calculated");

  if (rowsNb === 0) {
    return null;
  }
  console.log("return Pagination");

  return (
    <div className="pagination">
      <ButtonsNavPages table={table} />
    </div>
  );
};
export default Pagination;
