// import React from "react";

// import Button from "./common/Button";

// const ButtonsNavPages = ({ table }) => {
//   return (
//     <div className="buttons-nav">
//       <p onClick={() => table.previousPage()} disabled={!table.getCanPreviousPage()} style={{ cursor: table.getCanPreviousPage() ? "pointer" : "default" }}>
//         Previous
//       </p>
//       <div className="button-container">
//         {Array.from({ length: table.getPageCount() }, (_, i) => (
//           <Button key={i} onClick={() => table.setPageIndex(i)} isDisabled={table.getState().pagination.pageIndex === i}>
//             {i + 1}
//           </Button>
//         ))}
//       </div>

//       <p onClick={() => table.nextPage()} disabled={!table.getCanNextPage()} style={{ cursor: table.getCanNextPage() ? "pointer" : "default" }}>
//         Next
//       </p>
//     </div>
//   );
// };
// export default ButtonsNavPages;
import React from "react";
import Button from "./common/Button";

const ButtonsNavPages = ({ table, ...props }) => {
  const pageIndex = table.getState().pagination.pageIndex;
  const pageCount = table.getPageCount();
  const buttonCount = 5;
  let start = Math.max(pageIndex - Math.floor(buttonCount / 2), 0);
  let end = start + buttonCount;
  if (end > pageCount) {
    end = pageCount;
    start = Math.max(end - buttonCount, 0);
  }
  console.log("return ButtonsNavPages calculated - A lOT");

  return (
    <div className="buttons-nav">
      <p onClick={() => table.getCanPreviousPage() && table.previousPage()} disabled={!table.getCanPreviousPage()} style={{ fontSize: "16px", cursor: table.getCanPreviousPage() ? "pointer" : "default" }}>
        Prev
      </p>

      <div className="button-container">
        {Array.from({ length: end - start }, (_, i) => (
          <Button key={i + start} onClick={() => table.setPageIndex(i + start)} isDisabled={pageIndex === i + start}>
            {i + start + 1}
          </Button>
        ))}
      </div>

      <p onClick={() => table.getCanNextPage() && table.nextPage()} disabled={!table.getCanNextPage()} style={{ fontSize: "16px", cursor: table.getCanNextPage() ? "pointer" : "default" }}>
        Next
      </p>
    </div>
  );
};

export default ButtonsNavPages;
