// 1. Створіть дві змінні типу стрінг і виведіть їх в консоль разом, використовуючи конкатинацію стрiнги.

let a = 'Happy';
undefined
let b = 'string';
undefined
   `${a} small ${b}`;
"Happy small string"

// 2. Створіть змінну типу стрінг і виведіть в консоль її довжину.

a.length
5

// 3. Створіть змінну типу стрінг і виведіть в консоль перший символ стрінги.

a[0];
"H"

// 4. Створіть змінну типу стрінг і виведіть в консоль останній символ, довільної стрінги.

let a = 'Hello';
undefined
console.log(a[a.length - 1]);
VM197: 1 o

// 5. Створіть змінну типу стрінг і приведіть змінну до верхнього регістру.

let low = 'lower case text';
undefined
console.log(low.toUpperCase());
VM1015: 1 LOWER CASE TEXT

// 6. Створіть змінну типу стрінг і приведіть змінну до нижнього регістру.
let upper = 'UPPER CASE TEXT';
undefined
console.log(upper.toLowerCase());
VM1245: 1 upper case text

// 7. Створіть змінну і присвойте в неї дату вашого народження.

let birthdayDate = new Date("1992-07-30");

// 8. Виведіть рік вашого народження (Використовуючи змінну з 7 завдання).

console.log(birthdayDate.getFullYear());
VM391: 1 1992

// 9. Виведіть місяць вашого народження (Використовуючи змінну з 7 завдання).

console.log(birthdayDate.getMonth());
VM488: 1 6

// 10. Виведіть день вашого народження (Використовуючи змінну з 7 завдання).

console.log(birthdayDate.getDate());
VM532: 1 30

// 11. Виведіть в консоль рік місяць день вашого народження через тире (-) (Використовуючи змінну з 7 завдання).


let bDate = new Date("1992-07-30");
undefined
let year = bDate.getFullYear();
undefined
let month = bDate.getMonth();
undefined
let date = bDate.getDate();
undefined
   `${year} - ${month} - ${date}`
"1992 - 6 - 30"

// 12. Створіть нову дату яка має 14 годину і 23 хвилини.

let homeworkDate = new Date(2020, 06, 15, 14, 23);
undefined
homeworkDate
Wed Jul 15 2020 14: 23: 00 GMT + 0300(Восточная Европа, летнее время)

// 13. Порівняйте дві дати між собою і результат виведіть в консоль.

bDate > homeworkDate;
false
bDate < homeworkDate;
true