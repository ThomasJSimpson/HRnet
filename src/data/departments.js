const departmentsData = [{ name: "Sales" }, { name: "Marketing" }, { name: "Engineering" }, { name: "Human Resources" }, { name: "Legal" }];

const departments = departmentsData.map((department) => {
  return {
    value: department.name.toLowerCase(),
    label: department.name,
  };
});
export default departments;
