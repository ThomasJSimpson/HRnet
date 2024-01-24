const PaginationCounter = ({ table }) => {
  return (
    <p>
      Page {table.getState().pagination.pageIndex + 1} of {table.getPageCount() === 0 ? table.getPageCount() + 1 : table.getPageCount()}
    </p>
  );
};

export default PaginationCounter;
/* <p className={className} table={table}>
      {children}
    </p> */
