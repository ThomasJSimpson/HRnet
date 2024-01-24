import { FaSortUp, FaSortDown } from "react-icons/fa";

const IconThCell = ({ header, className }) => {
  const isSorted = header.column.getIsSorted();
  let colorUp, colorDown;

  switch (isSorted) {
    case "asc":
      colorUp = "#008000";
      colorDown = "#90ee90";
      break;
    case "desc":
      colorUp = "#90ee90";
      colorDown = "#008000";
      break;
    default:
      colorUp = "#90ee90";
      colorDown = "#90ee90";
  }

  return (
    <div className={className} onClick={header.column.getToggleSortingHandler()}>
      <FaSortUp color={colorUp} />
      <FaSortDown color={colorDown} />
    </div>
  );
};

export default IconThCell;
