import ThCell from "./ThCell";

const THeadContent = ({ table }) => {
  return table.getHeaderGroups().map((headergroup) => (
    <tr key={headergroup.id}>
      {headergroup.headers.map((header) => (
        <th w={header.getSize()} key={header.id}>
          <ThCell className={"header-table-cell"} header={header} />
        </th>
      ))}
    </tr>
  ));
};

export default THeadContent;
