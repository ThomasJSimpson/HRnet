const iconSorting = (props) => {
  return (
    <div className="header-table-cell-icon" onClick={header.column.getToggleSortingHandler()}>
      {header.column.getIsSorted() ? (
        <span>{header.column.getIsSorted() === "asc" ? <span>&uarr;</span> : <span>&darr;</span>}</span>
      ) : (
        <span>
          &darr; <span>&uarr;</span>
        </span>
      )}
    </div>
  );
};
