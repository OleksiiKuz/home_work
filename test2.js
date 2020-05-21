// 1. Створіть обєкт та масив
// * Використовуйте обєкт і масив створені в першому заданні у всіх наступних завданнях

let obj = {
   name: 'Oleksii',
   surname: 'Kuznietsov',
   age: 27,
   sex: 'male',
   country: 'Ukraine'

};

let arr = ['Oleksii', 'Kuznietsov', 27, 'male', 'Ukraine',];

// 2. Додайте до обєкту ключ "birthdate" типу Date

obj.birthday = 30061992;

// 3. Додайте новий елемент в кінець масиву

arr.push('30.06.1992');

// 4. Видаліть з обєкту доданий ключ у завданні 3

delete obj.birthday;
true

// 5. Видаліть елемент з масиву доданий у завданні 4

arr.pop();
"30.06.1992"

// 6. Додайте до обєкту метод який буде виводити ваше імя і прізвище.

obj.fullName = function () {
   console.log(`${name} ${surname}`);
}

// 7. Створіть конструктор який буде відтворювати функціонал який є наявний в обєкті

function Person(name, surname, age, sex, country) {

   this.name = {
      first: first,
      last: last
   };

   this.name = function () {
      console.log(this.name);
   };

   this.surname = function () {
      console.log(this.surname);
   };

   this.age = function () {
      console.log(this.age);
   };

   this.sex = function () {
      console.log(this.sex);
   };

   this.country = function () {
      console.log(this.country);
   };

}


// 8. Створіть новий конструктор який буде унаслідувати функціонал конструктору з попереднього звдання і буде мати додатковий метод для виводу дати народження.

// 9. Створіть новий eлемент за допомогою конструктору з попереднього завдання і виведіть імя та прізвище або дату народження.