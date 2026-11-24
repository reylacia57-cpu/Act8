// Requirement 3: Const variable 1
const x = 10;
// Requirement 3: Const variable 2
const y = 20;

// Requirement 1: Arrow function 1 & Requirement 2: Template literal 1
const f1 = (a) => `Value 1: ${a}`;
// Requirement 1: Arrow function 2 & Requirement 2: Template literal 2
const f2 = (b) => `Value 2: ${b}`;
// Requirement 1: Arrow function 3 & Requirement 2: Template literal 3
const f3 = (c) => `Value 3: ${c}`;
// Requirement 1: Arrow function 4 & Requirement 2: Template literal 4
const f4 = (d) => `Value 4: ${d}`;

console.log(f1(x));
console.log(f2(y));
console.log(f3(x + y));
console.log(f4(x * y));