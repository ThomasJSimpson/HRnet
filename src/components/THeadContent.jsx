import ThCell from "./ThCell";

const THeadContent = ({ table, ...props }) => {
  console.log("return THeadContent");
  console.log(table.getHeaderGroups());

  return table.getHeaderGroups().map((headergroup) => {
    console.log("return THeadContent");
    console.log(headergroup);

    return (
      <tr key={headergroup.id}>
        {headergroup.headers.map((header) => (
          <th w={header.getSize()} key={header.id}>
            <ThCell className={"header-table-cell"} header={header} />
          </th>
        ))}
      </tr>
    );
  });
};

export default THeadContent;
