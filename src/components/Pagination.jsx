import ButtonsNavPages from "./ButtonsNavPages";

const Pagination = ({ table, ...props }) => {
  const rowsNb = table.getRowModel().rows.length;

  if (rowsNb === 0) {
    return null;
  }

  return (
    <div className="pagination">
      <ButtonsNavPages table={table} />
    </div>
  );
};
export default Pagination;
