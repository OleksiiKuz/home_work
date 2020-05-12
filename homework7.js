// 1. Створіть функцію за допомогою "function expression".

function calc(a, b) {
   return (a * b);
};
undefined
calc(4, 3);
12

// 2. Створіть функцію за допомогою "new Function".

let calc = new Function('a', 'b', 'return a * b');
undefined
console.log(calc(2, 8));
VM3005: 1 16

// 3. Створіть функцію за допомогою "arrow function".

let calc1 = (a, b) => a + b;
undefined
calc1(12, 8);
20

// 4. Створіть функцію яка приймає два аргументи, перший це обєкт другий це колбек.
function checkMashrooms1(basket, goodMashroom, badMashroom) {
   let kitchen = [];
   let trash = [];
   for (let mashroom of basket) {
      if (mashroom) {
         kitchen.push(mashroom);
      } else {
         trash.push(mashroom);
      }
   }
   goodMashroom(kitchen);
   badMashroom(trash);
}
function c(mashroom) {
   console.log('good mashroom', mashroom);
}
function d(badMashroom) {
   console.log('bad mashroom', badMashroom);
};
undefined
checkMashrooms1([true, false, true, false], c, d);
VM862: 15 good mashroom(2)[true, true]
VM862: 18 bad mashroom(2)[false, false]




// 5. Створіть рекурсивну функцію.

let country = {
   capital: 'Kyiv',
   region: 24,
   area: {
      totalArea: 124752,
      regionArea: {
         cityArea: 1235
      }
   }
};

function showObjectKeysCountry(arg1) {
   for (let key in arg1) {
      console.log(key, arg1[key]);
      if (typeof arg1[key] === 'object') {
         showObjectKeysCountry(arg1[key]);
      }
   }
};

undefined
showObjectKeysCountry(country);
VM144: 14 capital Kyiv
VM144: 14 region 24
VM144: 14 area { totalArea: 124752, regionArea: { … } }
VM144: 14 totalArea 124752
VM144: 14 regionArea { cityArea: 1235 }
VM144: 14 cityArea 1235

// 6. Створіть самовикликаючусь функцію.

let calcAuto = (function (a, b) {
   console.log(a + b)
})(2, 4);
VM419: 2 6

// 7. Створіть функцію і виведіть в консоль всі аргументи які були їй передані.

function arg(arg1, arg2, arg3, arg4, arg5) {
   console.log(arguments);
};

arg(1, 2, 'some string', [1, 2, 3], {});
VM3485: 2 Arguments(5)[1, 2, "some string", Array(3), { … }, callee: ƒ, Symbol(Symbol.iterator): ƒ]