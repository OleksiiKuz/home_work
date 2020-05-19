// 1. Створіть index.html file and index.js file. Підключіть джс до html.

//МАЛО НИЖЧЕ

// 2. Виведіть в консоль body

document.body;

// 3. Виведіть в консоль довільний eлемент викoристовуючи getElementById

document.getElementById("inputIn");

// 4. Виведіть в консоль довільний eлемент викoристовуючи getElementsByClassName

document.getElementsByClassName("button");

// 5. Виведіть в консоль довільний eлемент викoристовуючи getElementsByTagName

document.getElementsByTagName("input");

// 6. Створіть елементи для взяємодії з користувачем (button and input)

//НИЖЧЕ

// 7. Напишіть функцію яка буде взяємодіяти з button і буде виводити alert користувачу з довільним текстом

//НИЖЧЕ

// 8. Напишіть функцію яка буде взяємодіяти з input і буде виводити в консоль значення яке ввів користувач

//ЧУТЬ ЧУТЬ НИЖЧЕ

// ВОТ ТУТ ЗАДВАННЯ 6, 7, 8 !!!

// Обявляємо перемінні і присвоюємо в них елементи з якими будемо взаємодіяти

let inputIn = document.getElementById("inputIn");
let btnSend = document.getElementById("btnSend");
let btnReset = document.getElementById("btnReset");
let consoleBlock = document.querySelector(".console__block");
let alertBtn = document.getElementsByClassName("alert__button");

// Відправляємо в консоль та в блок верстки console__watch написаний текст

btnSend.onclick = function () {
  alert("Відправити в консоль і відобразити на моніторі?");
  console.log(inputIn.value);
  consoleBlock.innerHTML = inputIn.value;
  inputIn.value = "";
};

// Видаляємо з блоку верстки console__watch блоку надісланий текст

btnReset.addEventListener("click", function () {
  consoleBlock.innerHTML = "";
});
