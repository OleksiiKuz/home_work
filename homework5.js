// 1. Використовуючи цикл "while" виведіть в консоль цифри від 0 до 10;
// * Зробіть те саме за допомогою циклу "do while" i "for"

let i = 0;
undefined
while (i < 11) {
   console.log(i);
   ++i;
};
VM200: 2 0
VM200: 2 1
VM200: 2 2
VM200: 2 3
VM200: 2 4
VM200: 2 5
VM200: 2 6
VM200: 2 7
VM200: 2 8
VM200: 2 9
VM200: 2 10


do {
   console.log(i);
   ++i;
}
while (i < 11);
VM395: 2 0
VM395: 2 1
VM395: 2 2
VM395: 2 3
VM395: 2 4
VM395: 2 5
VM395: 2 6
VM395: 2 7
VM395: 2 8
VM395: 2 9
VM395: 2 10


for (i = 0; i < 11; ++i) {
   console.log(i);
};
VM598: 2 0
VM598: 2 1
VM598: 2 2
VM598: 2 3
VM598: 2 4
VM598: 2 5
VM598: 2 6
VM598: 2 7
VM598: 2 8
VM598: 2 9
VM598: 2 10

// 2. Яке останнє значення буде виведено в консоль?
// let i = 0;
//
// while (i > 10) {
//   console.log(i);
//   ++i;
// }
відбудеться зациклення
GOOOOOOOOOOOD JOKE!!!!

// 3. Яке останнє значення буде виведено в консоль?
// let i = 0;
//
// do {
//   console.log(i);
//   ++i;
// } while (i < 10)

9

// 4. Замініть цей приклад використовуючи "while"
//
// for (let i = 0; i < 10; i++) {
//   console.log('i', i);
// }

let i = 0;
while (i < 10) {
   console.log('i', i);
   i++
};

// 5. Яке перше значення буде виведено в консоль?
// let i = 0;
//
// while (i > 10) {
//   ++i;
//   console.log(i);
// }
undefined// початково 0 не більше 10, тому команда в дужках не буде виконуватись

// 6. Яке перше значення буде виведено в консоль?
// let i = 1;
//
// do {
//   i++;
//   console.log(i);
// } while (i < 10)

2