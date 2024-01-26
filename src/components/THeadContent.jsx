import ThCell from "./ThCell";

const THeadContent = ({ table, ...props }) => {
  return table.getHeaderGroups().map((headergroup) => {
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
