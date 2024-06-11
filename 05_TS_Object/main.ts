// both are same object but 👇 this person object is best way bcqz we define all variables with their value. where in person2 just we assign with type object.

// i will show you how this is right object as compare to person2 object.
const person: {
  name: string;
  address: string;
  phone: number;
  isActive: boolean;
} = {
  name: "rimanshu",
  address: "dumdum, kolkata",
  phone: 12345,
  isActive: true,
};
console.log(typeof person, person);
// access person object value;
console.log(typeof person.name, person.name); // no error

const person2: object = {
  name: "rimanshu",
  address: "dumdum, kolkata",
  phone: 12345,
  isActive: true,
};
console.log(typeof person2, person2);
// access person object value;
// console.log(typeof person2.name , person2.name)
// Note: but when we access the value it show error. we can't access this beacuse this is define only object type.

// more clear
// object vs Object
// In this Object(first letter capital): you should define all variable with type. and you able to access any value in this object.

// but in this object(first letter small) : you can't access any value beacuse it is just only object type.

// optional properties;

const user1: { name: string; phone?: number } = {
  // no error
  name: "john",
};
user1.phone = 22345;
console.log(user1);

// no error beacuse we adding (?) optional property don't have to be defined in the object definition.
