// 1) Оголосіть три різні змінні за допомогою "let", "const", "var"

let = 'xiaomi';
var = 'iphone';
const = 'nokia3310';


// 2) Оголосіть одну змінну якій можна міняти значення і одну змінну якій не можна міняти значення

let = 'xiaomi';
const = 'nokia3310';

// 3) Напишіть 1 коментар в 1 рядок і напишіть ще один коментар на 4 рядки

// small comment

/*very
very
long
comment*/

// 4) Оголосіть одну змінну і прийсвойте в неї будь яке значення типу String.
// * Bиведіть в консоль тип змінної виклристовуючи оператор "typeof" і функцію "console.log()"

let someString = 'this string';

console.log(typeof someString);
string

// 5) Оголосіть одну змінну і прийсвойте в неї будь яке значення типу Number.
// * Bиведіть в консоль тип змінної виклристовуючи оператор "typeof" і функцію "console.log()"

let newYearDay = 31;

console.log(typeof newYearDay); 
VM653: 1 number


// 6) Оголосіть одну змінну і прийсвойте в неї будь яке значення типу Boolean.
// * Bиведіть в консоль тип змінної виклристовуючи оператор "typeof" і функцію "console.log()"

let futureWork = true;

console.log(typeof futureWork);
VM797: 1 boolean

// 7) Оголосіть одну змінну і прийсвойте в неї будь яке значення типу Object яке буде містити хоча б 3 ключі.
// * Bиведіть в консоль тип змінної виклристовуючи оператор "typeof" і функцію "console.log()"

let car = {
   color: "red",
   model: "X",
   name: "Tesla"
};

console.log(typeof car);
VM354: 1 object

// 8) Оголосіть одну змінну і прийсвойте в неї будь яке значення типу Array яке буде містити хоча б 3 значення.
// * Bиведіть в консоль тип змінної виклристовуючи оператор "typeof" і функцію "console.log()"

let city = ["Uzhgorod", "Kiyv", "Lviv",];

console.log(typeof city);
VM1201: 1 object

// 9) Оголосіть одну змінну і прийсвойте в неї будь яке значення типу Function.
// * Bиведіть в консоль тип змінної виклристовуючи оператор "typeof" і функцію "console.log()"

function showWindow() {
   alert('Window');
};

console.log(typeof showWindow);
VM2434: 1 function

   // 10) Оголосіть одну змінну і прийсвойте в неї будь яке значення типу Undefined.
   // * Bиведіть в консоль тип змінної виклристовуючи оператор "typeof" і функцію "console.log()"

   let plane;

console.log(typeof plane);
VM1364: 1 undefined

// 11) Оголосіть одну змінну і прийсвойте в неї будь яке значення типу Null.
// * Bиведіть в консоль тип змінної виклристовуючи оператор "typeof" і функцію "console.log()"

let snow = null;

console.log(typeof snow);
VM1470: 1 object

// 12) Оголосіть змінну user типу Object і опишіть своє: ім'я, фамілію, дату народження,
// місце проживання, стать і можете добавити ще додаткові параметри використовуючи різні типи даних. 
// місце проживання, стать і можете добавити ще додаткові параметри використовуючи різні типи даних.

let user = {
   name: "Oleksii",
   surname: "Kuznietsov",
   birthday: "30/06/1992",
   height: 178,
   sex: "male",
   live: "Kamynitsa",
   red_hair: true,
   blue_eyes: false
};