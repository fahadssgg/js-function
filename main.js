console.log("=============Lab 1========================");

function sum(num1, num2) {
  console.log(num1 + num2);
}
function milt(num1, num2) {
  console.log(num1 * num2);
}
const div = (num1, num2) => {
  console.log(num1 / num2);
};
const sub = (num1, num2) => {
  console.log(num1 - num2);
};

sum(4, 4);
milt(4, 4);
div(4, 4);
sub(4, 4);

const oddEven = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];
const eveNum = oddEven.filter(function (i) {
  return i % 2 == 0;
});
console.log("=============even num:");
console.log(eveNum);

const oddNum = oddEven.filter(function (i) {
  return i % 2 != 0;
});
console.log("=============odd num:");
console.log(oddNum);

console.log("=============Lab 2========================");
const characters = [
  {
    name: "fahad",
    height: 178,
    gender: "M",
    mass: 100,
    eyeColor: "black",
  },
  {
    name: "saad",
    height: 202,
    gender: "M",
    mass: 50,
    eyeColor: "Brown",
  },
  {
    name: "ahmed",
    height: 220,
    gender: "M",
    mass: 78,
    eyeColor: "blue",
  },
  {
    name: "sarah",
    height: 160,
    gender: "F",
    mass: 45,
    eyeColor: "green",
  },
  {
    name: "rawan",
    height: 156,
    gender: "F",
    mass: 20,
    eyeColor: "blue",
  },
];

console.log("=-=-=-=-=-=-=FirstName-=-=-=-=-=-=");
const FirstName = characters.find(function (x) {
  return x.eyeColor == "blue";
});
console.log(FirstName.name);

console.log("=-=-=-=-=-=-FirstGendar=-=-=-=-=-=-=");
const FirstGendar = characters.find(function (x) {
  return x.mass > 50;
});
console.log(FirstGendar.gender);
console.log("=-=-=-=-=-=-=hLess-=-=-=-=-=-=");

const hLess = characters.filter(function (i) {
  return i.height < 200;
});
console.log(hLess);

console.log("=-=-=-=-=-=-=male-=-=-=-=-=-=");

const male = characters.filter(function (i) {
  return i.gender == "M";
});
console.log(male);
console.log("=-=-=-=-=-=-onlyNames=-=-=-=-=-=-=");
const onlyNames = characters.map(function (i) {
  console.log(i.name);
});
console.log("=-=-=-=-=-=-onlyheights=-=-=-=-=-=-=");
const onlyheights = characters.map(function (i) {
  console.log(i.height);
});

console.log("=-=-=-=-=-=-Sort by mass (low to high)=-=-=-=-=-=-=");
characters.sort(function (a, b) {
  return a.mass - b.mass;
});
console.log(characters);
console.log("=-=-=-=-=-=-Sort by height (high to low)=-=-=-=-=-=-=");
characters.sort(function (a, b) {
  return b.height - a.height;
});
console.log(characters);

console.log(
  "=-=-=-=-=-=-Does every character have mass more than 40?=-=-=-=-=-=-="
);
const massMore = characters.every(function (x) {
  return x.mass > 40;
});
console.log(massMore);

console.log("=-=-=-=-=-=-Is every character shorter than 200?=-=-=-=-=-=-=");
const hsortThan = characters.every(function (x) {
  return x.height < 200;
});
console.log(hsortThan);

console.log(
  "=-=-=-=-=-=-Is there at least one character with blue eyes?=-=-=-=-=-=-="
);

const blueEyes = characters.some(function (x) {
  return x.eyeColor == "blue";
});
console.log(blueEyes);

console.log(
  "=-=-=-=-=-=-Is there at least one character taller than 210?=-=-=-=-=-=-="
);

const tallerThan = characters.some(function (x) {
  return x.height > 210;
});
console.log(tallerThan);
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// let arr = [1, 2, 3, 4, 5, 6, 7, 8];

// console.log(arr[3]);

// let groc = ["milk", "flour", "rice"];

// console.log(groc[1]);
//  groc[0] = 2;
//  groc.push("egg");
//  groc.unshift(1);
//  groc.pop();
//  groc.shift();

// console.log(groc.length);

// let color = ["white", "black", "blue"];

// let color2 = ["red", "yellow"];
// let newcolor = color.concat(color2);
// console.log(newcolor);

//let num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// for (let i = 0; i < num.length; i++) {
//   if (num[i] % 2 == 0) {
//     console.log(num[i]);
//   }
// }

// let numbers = [3, 2, 3, 4, 5, 64, 7, 4, 151, 16, 17, 18, 19, 20];

// const FirstEven = numbers.find(function (x) {
//   return x % 2 == 0;
// });
// console.log(FirstEven);

// numbers.forEach((x, i) => {
//   numbers[i] = x * 2;
// });
// console.log(numbers);
// console.log(numbers.includes(15));
// console.log(numbers.reverse());

// numbers.sort(function (a, b) {
//   return a - b;
// });
// console.log(numbers);
// const isodd = numbers.every(function (x) {
//   return x % 2 != 0;
// });
// console.log(isodd);

// const iseven = numbers.some(function (x) {
//   return x % 2 != 0;
// });
// console.log(iseven);

// const obj = [
//   {
//     name: "fahad",
//     age: 23,
//   },
//   {
//     name: "saad",
//     age: 23,
//   },
// ];
// let names = obj.map((value, i) => {
//   console.log(value.name);
// });
