const Pagination = ({ table }) => {
  return (
    <>
      <div className="pagination">
        <p>
          Page {table.getState().pagination.pageIndex + 1} of {table.getPageCount()}
        </p>
        <button onClick={() => table.previousPage()} disabled={!table.getCanPreviousPage()}>
          {"<"}
        </button>
        {Array.from({ length: table.getPageCount() }, (_, i) => (
          <button key={i} onClick={() => table.setPageIndex(i)} disabled={table.getState().pagination.pageIndex === i}>
            {i + 1}
          </button>
        ))}
        <button onClick={() => table.nextPage()} disabled={!table.getCanNextPage()}>
          {">"}
        </button>
      </div>
    </>
  );
};
export default Pagination;
