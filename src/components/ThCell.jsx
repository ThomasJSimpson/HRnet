import IconThCell from "./IconThCell";

const ThCell = ({ header, className, ...props }) => {
  console.log("return ThCell");

  return (
    <div className={className}>
      {header.column.columnDef.header}
      {header.column.getCanSort() && <IconThCell header={header} className={"header-table-cell-icon"} />}
    </div>
  );
};

export default ThCell;
