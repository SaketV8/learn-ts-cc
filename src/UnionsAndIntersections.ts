console.log("Unions and Intersections");

// Interface is mostly done for objects
// Types allow to use Union or Intersection

// Unions
type IdType = number | string;
const printId = (id: IdType) => {
  console.log(`ID: ${id}`);
};

printId(123);
printId("ugxdc45");

interface BussinessPartner {
    name: string;
    creditScore: number;
}

interface UserIndentity {
    id: number;
    email: string;
    // name: string;
}

// Intersections
type Employee = BussinessPartner & UserIndentity;

const signContract = (employee: Employee): void => {
  console.log(`Contract signed by \nname: ${employee.name} \nemail: ${employee.email}`);
};

signContract({
  name: "Premchand",
  creditScore: 700,
  id: 45,
  email: "munshipremchand@outlook.com",
});
