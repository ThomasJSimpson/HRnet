const TBodyContent = ({ table, flexRender }) => {
  console.log(table.getRowModel().rows.length);
  const nbRowsDisplayed = table.getRowModel().rows.length;
  if (nbRowsDisplayed === 0) {
    return (
      <tr>
        <td colSpan="100%" style={{ textDecoration: "none", color: "inherit", fontSize: "18px", cursor: "pointer", fontWeight: "bold", textAlign: "center" }}>
          Pas de données
        </td>
      </tr>
    );
  }
  return table.getRowModel().rows.map((row) => {
    return (
      <tr key={row.id}>
        {row.getVisibleCells().map((cell) => {
          const isSorted = cell.column.getIsSorted() ? "sorted" : "";
          return (
            <td className={`${isSorted}`} w={cell.column.getSize()} key={cell.id}>
              {flexRender(cell.column.columnDef.cell, cell.getContext())}
            </td>
          );
        })}
      </tr>
    );
  });
};

export default TBodyContent;
