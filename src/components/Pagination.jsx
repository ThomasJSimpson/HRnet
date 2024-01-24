import PaginationCounter from "./common/PaginationCounter";
import ButtonsNavPages from "./ButtonsNavPages";

const Pagination = ({ table }) => {
  return (
    <div className="pagination">
      <ButtonsNavPages table={table} />
    </div>
  );
};
export default Pagination;
