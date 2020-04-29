// 1) Використовуючи оператор "Рівності (==)" порівняйте два значення так, щоб в першому випадку ви отримали "false" а в другому випадку "true".
// * Виведіть результат порівняння в консоль за допомогою "console.log"

let first = 1;
undefined
let second = 2;
undefined

console.log(first == second);
VM839: 1 false

console.log(first == first);
VM952: 1 true

// 2) Використовуючи оператор "Нерівності (!=)" порівняйте два значення так, щоб в першому випадку ви отримали "false" а в другому випадку "true".
// * Виведіть результат порівняння в консоль за допомогою "console.log"

let first = 1;
undefined
let second = 2;
undefined


console.log(first != first);
VM1055: 1 false
undefined
console.log(first != second);
VM1156: 1 true

// 3) Використовуючи оператор "Строгої рівності (===)" порівняйте два значення так, щоб в першому випадку ви отримали "false" а в другому випадку "true".
// * Виведіть результат порівняння в консоль за допомогою "console.log"
let first = 1;
undefined
let one = "1";
undefined

console.log(one === first);
VM1347: 1 false

console.log(one === one);
VM1443: 1 true


// 4) Використовуючи оператор "Строгої нерівності (!==)" порівняйте два значення так, щоб в першому випадку ви отримали "false" а в другому випадку "true".
// * Виведіть результат порівняння в консоль за допомогою "console.log"

let first = 1;
undefined
let one = "1";
undefined

console.log(one !== one);
VM1602: 1 false
undefined
console.log(one !== first);
VM1651: 1 true

// 5) Використовуючи оператор "Більше ніж (>)" порівняйте два значення так, щоб в першому випадку ви отримали "false" а в другому випадку "true".
// * Виведіть результат порівняння в консоль за допомогою "console.log"
let first = 1;
undefined
let one = "1";
undefined
let second = 2;
undefined

console.log(one > first);
VM1731: 1 false

console.log(second > one);
VM1813: 1 true

// 6) Використовуючи оператор "Більше чи дорівнює (>=)" порівняйте два значення так, щоб в першому випадку ви отримали "false" а в другому випадку "true".
// * Виведіть результат порівняння в консоль за допомогою "console.log"

let first = 1;
undefined
let one = "1";
undefined
let second = 2;
undefined

console.log(first >= second);
VM271: 1

console.log(second >= first);
VM328: 1 true

// 7) Використовуючи оператор "Менше ніж (<)" порівняйте два значення так, щоб в першому випадку ви отримали "false" а в другому випадку "true".
// * Виведіть результат порівняння в консоль за допомогою "console.log"

let first = 1;
undefined
let one = "1";
undefined
let second = 2;
undefined

console.log(second < first);
VM439: 1 false

console.log(first < second);
VM342: 1 true



// 8) Використовуючи оператор "Менше чи дорівнює (<=)" порівняйте два значення так, щоб в першому випадку ви отримали "false" а в другому випадку "true".
// * Виведіть результат порівняння в консоль за допомогою "console.log"

let first = 1;
undefined
let one = "1";
undefined
let second = 2;
undefined



console.log(second <= first);
VM673: 1 false

console.log(first <= second);
VM581: 1 true
// 9) Використовуючи оператор "Логічне І (&&)" порівняйте два значення так, щоб в першому випадку ви отримали "false" а в другому випадку "true".
// * Виведіть результат порівняння в консоль за допомогою "console.log"
let first = 1;
undefined
let one = "1";
undefined
let second = 2;
undefined
let two = "2";

console.log(first > second && one < two);
VM936: 1 false

console.log(one == 1 && two > first);
VM1083: 1 true

// 10) Використовуючи оператор "Логічне АБО (||)" порівняйте два значення так, щоб в першому випадку ви отримали "false" а в другому випадку "true".
// * Виведіть результат порівняння в консоль за допомогою "console.log"

let first = 1;
undefined
let one = "1";
undefined
let second = 2;
undefined
let two = "2";

console.log(one === 1 || two > first);
VM1111: 1 true

console.log(one == 1 && two < first);
VM1127: 1 false

// 11) Використовуючи оператор "Логічне НЕ (!)" порівняйте два значення так, щоб в першому випадку ви отримали "false" а в другому випадку "true".
// * Виведіть результат порівняння в консоль за допомогою "console.log"

let first = 1;
undefined
let one = "1";
undefined
let second = 2;
undefined
let two = "2";

first = !1;
false

two = !!"2";
true

console.log(one === 1 && two > first);
VM337: 1 false
undefined
console.log(one == 1 && two > first);
VM376: 1 true


// 12) Використовуючи оператор "Рядкове додавання (+)" додайте два значення типу "string".
// * Виведіть результат в консоль за допомогою "console.log"

let affterLogin = "Nice too meet you ";
undefined
let nickname = "Oleksii";
undefined
console.log(affterLogin + nickname);
VM312: 1 Nice too meet you Oleksii

//     ES6

console.log(`${affterLogin + nickname}`);
VM145: 1 Nice too meet you Oleksii

// 13) За допомогою тернарного оператору присвойте значення у змінну "type" використовуючи змінну "color". Якщо колір дорівнює "червоний", тоді значення змінної має бути "пожежна" інакше "медична".
// * Виведіть "type" в консоль за допомогою "console.log". Зробіть два варіанти в одному резyльтат в консолі має бути "пожежна" в іншому "медична"

color = 'blue';
"blue"

let type = (color == 'red') ? 'firecar' : 'medical-car';
undefined

type
"medical-car"

console.log(type);
VM889: 1 medical - car
undefined

color = 'red';
"red"

let type = (color == 'red') ? 'firecar' : 'medical-car';
undefined

type
"firecar"

console.log(type);
VM1010: 1 firecar

// 14) Створіть об'єкт з довільними ключами і видаліть довільний ключ за допомогою оператору "delete"
// * Виведіть результат в консоль за допомогою "console.log"

let user = {
   name: "John",
   age: 30,
   height: 190
};

user.name;
"John"
delete user.name;
true
console.log(user);
VM602: 1 { age: 30, height: 190 }
undefined

// 15) Створіть масив з довільними значеннями і видаліть довільне значення за допомогою оператору "delete"
// * Виведіть результат в консоль за допомогою "console.log"

let country = ['Brazil', 'Vatikan', 'Egypt', 'Argentina'];
undefined
delete country[2];
true
console.log(country);
VM3962: 1(4)["Brazil", "Vatikan", empty, "Argentina"]

// 16) Створіть об'єкт з довільними ключами і за допомогою оператору "in" визначіть наявність ключів у об'єкті. Одне значення повинно бути наявне а інше повинно бути відсутнє
// * Виведіть результат в консоль за допомогою "console.log"

let user = {
   name: "John",
   age: 30,
   height: 190
};
console.log('age' in user);
VM330: 1 true

console.log('nationality' in user);
VM349: 1 false

// 16) Створіть масив з довільними значеннями і за допомогою оператору "in" визначіть наявність значення у масиві. Одне значення повинно бути наявне а інше повинно бути відсутнє
// * Виведіть результат в консоль за допомогою "console.log"

let arr = ["a", "b", "c"];
undefined

console.log(1 in arr);
VM689: 1 true

console.log(4 in arr);
VM799: 1 false