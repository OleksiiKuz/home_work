// 1. Виведіть користувачу попап використовуючи функцію "alert" який містить довільне повідомлення.

alert("Its alert message");

// 2. Виведіть користувачу попап використовуючи функцію "prompt" який містить довільне питання і не має дефолтного значення. Результат присвойте у змінну.
// *Виведіть змінну в консоль за допомогою "console.log"

let message = prompt("show text");
undefined
message
"this text"

console.log(message);
this text

// 3. Виведіть користувачу попап використовуючи функцію "prompt" який містить довільне питання і має дефолтнe значення "13". Результат присвойте у змінну.
// *Виведіть змінну в консоль за допомогою "console.log"

let age = prompt("how old i you?", 13);
undefined
console.log(age);
16


// 4. Виведіть користувачу попап використовуючи функцію "confirm" який містить довільне питання. Результат присвойте у змінну.
// *Виведіть змінну в консоль за допомогою "console.log"

let question = confirm("Ти чув щось JS?");
undefined
console.log(question);
true


// 5. Виведіть користувачу попап використовуючи функцію "confirm" який містить довільне питання. Результат присвойте у змінну.
// *Виведіть змінну в консоль за допомогою "console.log"
// *Використовуючи "if" виведіть в консоль "1" якщо відповідь на питання була позитивна

let question = confirm("Ти чув щось про JS?");
console.log(question);
if (question === true) console.log('1');
VM1528: 2 true
VM1528: 3 1

// 6. Виведіть користувачу попап використовуючи функцію "prompt" який містить довільне питання і не має дефолтного значення. Результат присвойте у змінну.
// *Виведіть змінну в консоль за допомогою "console.log"
// *Використовуючи "if else" виведіть в консоль "1" або "2"


let question = prompt("how old are you?")
console.log(question);

if (question <= 18) {
   console.log('1');
} else {
   console.log('2')
};
VM123: 2 16
VM123: 5 1

//=============

let question = prompt("how old are you?")
console.log(question);
boolQuestion = Boolean(question);
if (boolQuestion == true) {
   console.log('1');
} else {
   console.log('2')
};
VM2550: 2 27
VM2550: 5 1

// 7. Виведіть користувачу попап використовуючи функцію "prompt" який містить довільне питання і не має дефолтного значення. Результат присвойте у змінну.
// *Виведіть змінну в консоль за допомогою "console.log"
// *Використовуючи "if else" виведіть в консоль "1" або "2" або "3"

let question = prompt("how old are you?")
console.log(question);

if (question <= 18) {
   console.log('1');
} else if (question >= 18 && question <= 25) {
   console.log('2')
} else {
   console.log('3')
};

// 8. Виведіть користувачу попап використовуючи функцію "confirm" який містить довільне питання. Результат присвойте у змінну.
// *Виведіть змінну в консоль за допомогою "console.log"
// *Використовуючи "switch" виведіть в консоль "1" якщо відповідь на питання була позитивна

let age = confirm('you are 18 years old?');
console.log(age);
switch (age) {
   case true:
      console.log('1');
      break
   default:
      console.log('2');
};
VM475: 2 true
VM475: 5 1

// 9. Виведіть користувачу попап використовуючи функцію "prompt" який містить довільне питання і не має дефолтного значення. Результат присвойте у змінну.
// *Виведіть змінну в консоль за допомогою "console.log"
// *Використовуючи "switch" виведіть в консоль "1" або "2"

let number = prompt('Please write number 1 or 2');
console.log(number);
switch (number) {
   case '1': {
      console.log('1');
      break;
   }

   case '2': {
      console.log('2');
      break;
   }


   default: {
      console.log('not this number');
      break;

   }
};
VM2456: 2 2
VM2456: 10 2

// 10. Виведіть користувачу попап використовуючи функцію "prompt" який містить довільне питання і не має дефолтного значення. Результат присвойте у змінну.
// *Виведіть змінну в консоль за допомогою "console.log"
// *Використовуючи "switch" виведіть в консоль "1" або "2" або "3"

let number = prompt('Please write number 1 or 2');
console.log(number);
switch (number) {
   case '1': {
      console.log('1');
      break;
   }

   case '2': {
      console.log('2');
      break;
   }

   case '3': {
      console.log('3');
      break;
   }

   default: {
      console.log('not this number');
      break;

   }
};
VM2462: 2 3
VM2462: 15 3

// 11. Виведіть користувачу попап використовуючи функцію "prompt" який містить довільне питання і не має дефолтного значення. Результат присвойте у змінну.
// *Виведіть змінну в консоль за допомогою "console.log"
// *Використовуючи "switch" виведіть в консоль "1" або "2" або "3", виконайте те саме за допомогою "if else";
// *Зробіть два різні приклади

let number = prompt('Please write number 1 or 2');
console.log(number);
switch (number) {
   case '1': {
      console.log('1');
      break;
   }

   case '2': {
      console.log('2');
      break;
   }

   case '3': {
      console.log('3');
      break;
   }

   default: {
      console.log('not this number');
      break;

   }
};
VM2462: 2 3
VM2462: 15 3

// ==================

let number = prompt('Please write number 1 - 3');
console.log(number);

if (number === '1') {
   console.log('1')
} else if (number === '2') {
   console.log('2')
} else if (number === '3') {
   console.log('3')
} else {
   console.log('not this number')
};
VM2763: 2 2
VM2763: 7 2

