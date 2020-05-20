
//1 Створіть об'єкт Person який буде містити імя, прізвище і метод для виводу повного імені і просто імені за допомогою трьох різних варіантів

//2 Просто функції

const createUser = (name, lastName) => {
   const user = {};
   user.name = name;
   user.lastName = lastName;
   user.getName = () => name;
   user.getFullName = () => `${name} ${lastName}`;

   return user;

}

const userOleksi = createUser('Oleksii', 'Kuz');

userOleksi.getName();
"Oleksii"

userOleksi.getFullName();
"Oleksii Kuz"

//3 Функції конструктору

function Person(first, last) {

   this.name = {
      first: first,
      last: last
   };

   this.fullName = function () {
      console.log(this.name.first + ' ' + this.name.last);
   };


   this.firstName = function () {
      console.log(this.name.first);
   };

}
undefined
const user1 = new Person('Oleksii', 'Kuz');
undefined
user1.fullName();
VM1046: 9 Oleksii Kuz
undefined
user1.firstName();
VM1046: 14 Oleksii

//4 Класу

class User {

   constructor(firstName, lastName) {
      this.firstName = firstName;
      this.lastName = lastName;
   }

   showFirstName() {
      console.log(this.firstName);
   }

   showFullName() {
      console.log(this.firstName + ' ' + this.lastName);
   }

}
undefined
let user1 = new User('Oleksii', 'Kuz');
undefined
user1.showFullName();
VM564: 13 Oleksii Kuz
undefined
user1.showFirstName();
VM564: 9 Oleksii