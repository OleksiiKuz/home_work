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























// ========= HOMEWORK 2 ========== 

// 1) Оголосіть змінну типу number і зробіть явне перетворення до типу string використовуючи “String()”
// * Bиведіть в консоль тип змінної використовуючи оператор "typeof" і функцію "console.log()"

> let number = 99;
undefined
   > let strNumber = String(number);
undefined
   > console.log(typeof strNumber);
string
undefined
   > number
99
   > strNumber
'99'
   >   


// 2) Оголосіть змінну типу number і зробіть явне перетворення до типу boolean використовуючи “Boolean()”
// * Bиведіть в консоль тип змінної використовуючи оператор "typeof" і функцію "console.log()"

// 2.1
> let temperature = 10;
undefined
   > let boolTemperature = Boolean(temperature);
undefined
   > console.log(typeof boolTemperature);
boolean
undefined
   > temperature
10
   > boolTemperature
true
   >   
// 2.2

> let coldTemperature = -10;
undefined
   > let boolColdTemp = Boolean(coldTemperature);
undefined
   > console.log(boolColdTemp);
true
undefined
   > coldTemperature
   - 10
   > boolColdTemp
true
   >     

// 2.3 - ?????

> let nullTemperature = 0;
undefined
   > let nullTemp = Boolean(nullTemperature);
undefined
   > console.log(nullTemp);
false
undefined
   > nullTemperature
0
   > nullTemp
false
   >     

// 3) Оголосіть змінну типу number і зробіть явне перетворення до типу null використовуючи “Null()”
// * Bиведіть в консоль тип змінної використовуючи оператор "typeof" і функцію "console.log()"

> let number = 6;
undefined
   > typeof number
'number'
   > number = null;
null
   > console.log(typeof number);
object
undefined
   >        

// 4) Оголосіть змінну типу string і зробіть явне перетворення до типу number використовуючи “Number()”
// * Bиведіть в консоль тип змінної використовуючи оператор "typeof" і функцію "console.log()"

> let name = "Oleksii";
undefined
   > let numName = Number(name);
undefined
   > console.log(typeof numName);
number
undefined
   > name
'Oleksii'
   > numName
NaN
   >          

// 5) Оголосіть змінну типу string і зробіть явне перетворення до типу boolean використовуючи “Boolean()”
// * Bиведіть в консоль тип змінної використовуючи оператор "typeof" і функцію "console.log()"

> let coding = "good js code";
undefined
   > let jsCoding = Boolean(coding);
undefined
   > console.log(typeof jsCoding);
boolean
undefined
   > coding
'good js code'
   > jsCoding
true
   >     

// 6) Оголосіть змінну типу string і зробіть явне перетворення до типу null використовуючи “Null()”
// * Bиведіть в консоль тип змінної використовуючи оператор "typeof" і функцію "console.log()"

> let write = "write some string";
undefined
   > console.log(typeof write);
string
undefined
   > write = null;
null
   > console.log(typeof write);
object
undefined
   >       

// 7) Оголосіть змінну типу boolean і зробіть явне перетворення до типу string використовуючи “String()”
// * Bиведіть в консоль тип змінної використовуючи оператор "typeof" і функцію "console.log()"

   > let car = true;
undefined
   > let strCar = String(car);
undefined
   > console.log(typeof strCar);
string
undefined
   > car
true
   > strCar
'true'
   >      

// 8) Оголосіть змінну типу boolean і зробіть явне перетворення до типу number використовуючи “Number()”
// * Bиведіть в консоль тип змінної використовуючи оператор "typeof" і функцію "console.log()"

//8.1 

> let sundayweekend = true;
undefined
   > let numSundayWeekend = Number(sundayweekend);
undefined
   > console.log(typeof numSundayWeekend);
number
undefined
   > sundayweekend
true
   > numSundayWeekend
1
   >       

//8.2 

> let mondayWeekend = false;
undefined
   > let numMondayWeekend = Number(mondayWeekend);
undefined
   > console.log(typeof numMondayWeekend);
number
undefined
   > mondayWeekend
false
   > numMondayWeekend
0
   >   


// 9) Оголосіть змінну типу boolean і зробіть явне перетворення до типу number використовуючи Null()”
// * Bиведіть в консоль тип змінної використовуючи оператор "typeof" і функцію "console.log()"

> let magic = true;
undefined
   > console.log(typeof magic);
boolean
undefined
   > magic = null;
null
   > console.log(typeof magic);
object
undefined
   > magic
null
   >    

// 10) Оголосіть змінну типу null і зробіть явне перетворення до типу string використовуючи “String()”
// * Bиведіть в консоль тип змінної використовуючи оператор "typeof" і функцію "console.log()"

> let war = null;
undefined
   > let noWar = String(war);
undefined
   > console.log(typeof noWar);
string
undefined
   > war
null
   > noWar
'null'
   >      

// 11) Оголосіть змінну типу null і зробіть явне перетворення до типу number використовуючи “Number()”
// * Bиведіть в консоль тип змінної використовуючи оператор "typeof" і функцію "console.log()"

> let end = null;
undefined
   > let theEnd = Number(end);
undefined
   > console.log(typeof theEnd);
number
undefined
   > end
null
   > theEnd
0
   >   

// 12) Оголосіть змінну типу null і зробіть явне перетворення до типу boolean використовуючи Boolean()”
// * Bиведіть в консоль тип змінної використовуючи оператор "typeof" і функцію "console.log()"

> let eat = null;
undefined
   > let loveEat = Boolean(eat);
undefined
   > console.log(typeof loveEat);
boolean
undefined
   > eat
null
   > loveEat
false //     :(
   >    

// 13) Напишіть всі способи створення функції.

// ВИКОРИСТОВУЮЧИ КОНСТРУКТОР new Function 

   let math = new Function("x,y", "let x1 = x; y1 = y; return(x1*y1)");
undefined
math(4, 6);
24

// ФУНКЦІОНАЛЬНИЙ ВИРАЗ

let mathFunc = function (x, y) {
   let = x1 = x; let y1 = y; return (x1 * y1)
};
undefined
mathFunc(10, 8)
80
   

// ДЕКЛАРУЮЧИ СТВОРЕННЯ ФУНКЦІЇ. Любий приклад п.14-18

// 14) Напишіть функцію яка нічого не повертає
// * Викличіть функцію

   function showAlert() {
      alert('hello friend');
   };

// 15) Напишіть функцію яка завжди буде повертати ваше імя
// * Викличіть функцію

> function returnName() {
... return ('Oleksii');
...
};
undefined
   > returnName()
'Oleksii'
   >      

// 16) Створіть функцію яка приймає 1 аргумент і повертає його без змін.
// * Викличіть функцію у двох різних варіантах, з даними напряму вбо із змінними.

> function returnWord(word) {
... return (word);
...
   };
undefined
   > returnWord(Hello);
Uncaught ReferenceError: Hello is not defined
   > returnWord('hello');
'hello'
   >      



   > let returnWord = function (word) {
... return (word);
...
};
undefined
   > returnWord('Hello');
'Hello'
   >    

// 17) Створіть функцію яка приймає 2 аргументи і повертає суму цих 2 аргументів.
// * Викличіть функцію у двох різних варіантах, з даними напряму вбо із змінними.

   function naftoGas(gasPrice, deliveryPrice) {
      return (gasPrice + deliveryPrice);
   };
undefined
naftoGas(100, 18);
118


let gasProm = function (gasPrice, deliveryPrice) {
   let = x1 = gasPrice; let y1 = deliveryPrice; return (x1 + y1)
};
undefined
gasProm(10, 2);
12


// 18) Створіть функцію яка приймає 3 аргументи і повертає суму цих 3 аргументів.
// * Викличіть функцію у двох різних варіантах, з даними напряму вбо із змінними.

function mathFunction(arg1, arg2, arg3) {
   return (arg1 + arg2 + arg3);
};
undefined
mathFunction(55, 55, 55);
165


let mathFunc = function (arg1, arg2, arg3) {
   let = x1 = arg1; let y1 = arg2; let z1 = arg3; return (x1 + y1 + z1)
};
undefined
mathFunc(10, 2, 8);
20








