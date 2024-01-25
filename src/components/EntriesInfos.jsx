const EntriesInfos = ({ table, ...props }) => {
  console.log("return EntriesInfos calculated");
  return (
    <div className="entries-info">
      <p>
        Showing {table.getRowModel().rows.length} of {table.getFilteredRowModel().rows.length} entries
      </p>
    </div>
  );
};
export default EntriesInfos;
