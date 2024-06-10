// array numbers
let numbers: number[];
numbers = [1, 2, 3, 4, 5];
console.log(numbers[1] + numbers[2]);

// array strings
let names: string[] = ["akash", "bishu", "rishii", "riyansh"];
console.log(names);

// push method
let newNames: number = names.push("rimanshu");
console.log(newNames);

// pop method
let removedNames = names.pop();
console.log(removedNames);

// shift method
let removedItems = names.shift();
console.log(removedItems);

// uppercase the array value using map func.
names.map((data, index) => {
  return console.log(index, data.toUpperCase());
});

// reverse the array value.
console.log(names.join(" - "));

// reverse the array value.
console.log(names.reverse());

// mixed array value;

let mixed: (string | number)[];
mixed = ["one", "two", "three", 1, 2];

console.log(typeof mixed);
