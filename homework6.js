// 1. Створіть одновимірний масив і присвойте його в змінну.
// *Виведіть значення масиву в консоль.
// *Виведіть кожне значення масиву використовуючи довільний цикл.


let number = [1, 2, 3, 4, 5, 6,];

console.log(number);
VM240: 1(6)[1, 2, 3, 4, 5, 6]

for (let numbers of number) {
   console.log(numbers);
};
VM644: 4 1
VM644: 4 2
VM644: 4 3
VM644: 4 4
VM644: 4 5
VM644: 4 6

// 2. Створіть одновимірний обєкт і присвойте його в змінну.
// *Виведіть значення обєкту в консоль.
// *Виведіть кожний ключ і його значення в консоль.

let obj = {
   name: 'one',
   country: 'two',
   height: 'three',
   price: 'four'
};

console.log(obj);
VM279: 1 { name: "one", country: "two", height: "three", price: "four" }


for (let key in obj) {
   console.log(key);
};
VM337: 2 name
VM337: 2 country
VM337: 2 height
VM337: 2 price


// =============================================

for (let key in obj) {
   if (obj.hasOwnProperty(key)) {
      console.log(`${key} : ${obj[key]}`)
   }
}
VM345: 3 name: one
VM345: 3 country: two
VM345: 3 height: three
VM345: 3 price: four

// 3. Створіть масив і видаліть останнє значення з масиву, викoристовуючи "pop"
// *Виведіть в консоль нову довжину масиву

let city = ['Kyiv', 'London', 'Osaka', 'Berlin', 'Amsterdam'];
undefined
city.pop();
"Amsterdam"
console.log(city.length);
VM938: 1 4



// 4. Створіть масив і додайте нове значення до масиву з кінця, викoристовуючи "push"
// *Виведіть в консоль нову довжину масиву

let city = ['Kyiv', 'London', 'Osaka', 'Berlin', 'Amsterdam'];
undefined
city.push('Minsk');
6
console.log(city.length);
VM667: 1 6

// 5. Створіть масив і видаліть перше значення з масиву, викoристовуючи "shift"
// *Виведіть в консоль нову довжину масиву


let city = ["Uzhgorod", "Kyiv", "London", "Osaka", "Berlin", "Amsterdam"];

city.shift();
"Uzhgorod"
console.log(city.length);
VM875: 1 5

// 6. Створіть масив і додайте нове значення до масиву з початку, викoристовуючи "unshift"
// *Виведіть в консоль нову довжину масиву

let city = ['Kyiv', 'London', 'Osaka', 'Berlin', 'Amsterdam'];

undefined
city.unshift('Uzhgorod');
6
console.log(city.length);
VM770: 1 6

// 7. Створіть рекурсивну функцію для того, щоб вивести в консоль всі значення багатовимірного масиву

// 8. Створіть рекурсивну функцію для того, щоб вивести в консоль всі ключі багатовимірного обєкту

function showObjectKeysRecur(arg1, arg2) {
   for (let key in arg1) {
      console.log(arg2, key);
      if (typeof arg1[key] === 'object') {
         showObjectKeysRecur(arg1[key], key);
      }
   }
};

// 9. Створіть багатовимірний масив і присвойте його в змінну.
// *Виведіть значення масиву в консоль.
// *Виведіть кожне значення масиву використовуючи функцію з завдання 7.

let matrix = [
   [1, 2, 3],
   [4, 5, 6],
   [7, 8, 9]
];

function showArrKeysRecur2(arg1) {
   for (let key in arg1) {
      console.log(arg1[key]);
      if (typeof arg1[key] === 'object') {
         showArrKeysRecur2(arg1[key]);
      }
   }
};
undefined
showArrKeysRecur2(matrix);
VM423: 3 (3)[1, 2, 3]
VM423: 3  1
VM423: 3  2
VM423: 3  3
VM423: 3 (3)[4, 5, 6]
VM423: 3  4
VM423: 3  5
VM423: 3  6
VM423: 3 (3)[7, 8, 9]
VM423: 3  7
VM423: 3  8
VM423: 3  9



// 10. Створіть багатовимірний обєкт і присвойте його в змінну.
// *Виведіть значення обєкт в консоль.
// *Виведіть кожний ключ і його значення в консоль використовуючи функцію з завдання 8.

let obj = {
   name: 'Oleksii',
   age: '27',
   location: {
      country: 'Ukraine',
      district: {
         minDistrict: 'Uzh'
      }
   }
};

function showObjectKeysRecur2(arg1) {
   for (let key in arg1) {
      console.log(key, arg1[key]);
      if (typeof arg1[key] === 'object') {
         showObjectKeysRecur2(arg1[key]);
      }
   }
};


undefined
showObjectKeysRecur2(obj);
VM391: 3 name Oleksii
VM391: 3 age 27
VM391: 3 location { country: "Ukraine", district: { … } }
VM391: 3 country Ukraine
VM391: 3 district { minDistrict: "Uzh" }
VM391: 3 minDistrict Uzh