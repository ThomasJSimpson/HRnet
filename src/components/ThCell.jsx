import IconThCell from "./IconThCell";

const ThCell = ({ header, className }) => {
  return (
    <div className={className}>
      {header.column.columnDef.header}
      {header.column.getCanSort() && <IconThCell header={header} className={"header-table-cell-icon"} />}
    </div>
  );
};

export default ThCell;
