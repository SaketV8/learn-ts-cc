console.log("Interfaces and Types");

interface UserInterface {
  id: number;
  name: string;
  age: number;
}

const User: UserInterface = {
  id: 2,
  name: "Premchand",
  age: 56,
};

// User.age = "45"
User.age = 45;
console.log({ User });

// making some object field optional
interface UserInterface2 {
  id: number;
  name: string;
  // making age field optional
  age?: number;

  // defining the function
  greet(msg: string): void;
}

// no error even without the age field
const User2: UserInterface2 = {
  id: 2,
  name: "Premchand",
  
  // we can here define the string too for message
  // greet(msg: string) {
  greet(msg) {
    console.log(`This is your message ${msg}`);
  },
};

console.log({ User2 });
if (!User2.age) {
  console.log("No age found for this user");
} else {
  console.log(User2.age);
}

// calling the function of the obj
User2.greet("XXTTZZ");
