// 1) Оголосіть одну змінну якій можна міняти значення і одну змінну якій не можна міняти значення

let phone = xiaomi;
const sun = yellow;

// 2) Напишіть 1 коментар в 1 рядок і напишіть ще один коментар на 4 рядки

// small comment

/* very
very
very 
long js comment */

// 3) Створіть "масив" який буде містити 5 довільних значень.
// * Виведіть змінну в консоль за допомогою "console.log"
// * Видаліть з масиву перше і останнє значення.
// * Виведіть змінну в консоль за допомогою "console.log"


let car = ["Lada", "Audi", "BMW", "Skoda", "Opel"];
undefined
console.log(car);
VM448: 1(5)["Lada", "Audi", "BMW", "Skoda", "Opel"]
undefined
delete car[0];
true
delete car[4];
true
console.log(car);
VM625: 1(5)[empty, "Audi", "BMW", "Skoda", empty]

// 4) Створіть "об'єкт" який буде містити 5 довільних ключів із довільними значеннями.
// * Виведіть змінну в консоль за допомогою "console.log"
// * Видаліть з об'єкту перший і останній ключ
// * Виведіть змінну в консоль за допомогою "console.log"

let countryCar = {
   france: 'Pegouet',
   germany: 'Opel',
   italy: 'Fiat',
   czech: 'skoda',
   usa: 'Ford'
}
undefined
console.log(countryCar);
VM1124: 1 { france: "Pegouet", germany: "Opel", italy: "Fiat", czech: "skoda", usa: "Ford" }
undefined
delete countryCar.france;
true
delete countryCar.usa;
true
console.log(countryCar);
VM1240: 1 { germany: "Opel", italy: "Fiat", czech: "skoda" }
undefined

// 5) Напишіть всі способи створення функції.

// 6) Створіть функцію яка приймає 3 аргументи і повертає суму цих 3 аргументів.
// * Викличіть функцію у двох різних варіантах, з даними aбо із змінними.

function mathPluse(a, b, c) {
   return (a + b + c);
};
undefined
mathPluse(1, 2, 3);
6

// 7) За допомогою тернарного оператору присвойте значення у змінну "salary" використовуючи змінну "workType". Якщо workType дорівнює "fulltime", тоді значення змінної має бути "1000" інакше "500".
// * Виведіть "salary" в консоль за допомогою "console.log". Зробіть два варіанти в одному резyльтат в консолі має бути "1000" в іншому "500"


let workType = 'fulltime';
undefined
let salary = (workType == 'fulltime') ? "1000" : "500";
undefined
console.log(salary);
VM1851: 1 1000

let workType = 'parttime'
undefined
let salary = (workType == 'fulltime') ? "1000" : "500";
undefined
console.log(salary);
VM2088: 1 500
// 8) Виведіть користувачу попап використовуючи функцію "prompt" який містить довільне питання і не має дефолтного значення. Результат присвойте у змінну.
// * Виведіть змінну в консоль за допомогою "console.log"
// * Використовуючи "switch" виведіть в консоль "a" або "b" або "c", виконайте те саме за допомогою "if else";
// * Зробіть два різні приклади

let number = prompt('Do you love number 1 or 2');
console.log(number);

switch (number) {
   case ('1'): {
      console.log('1');
      break;
   }

   case ('2'): {
      console.log('2');
      break;
   }
   default: {
      console.log('3');
   }
}
VM384: 2 3
VM384: 15 3