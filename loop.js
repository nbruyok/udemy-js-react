// Место для первой задачи
//При помощи цикла выведите числа от 5 до 10 в консоль. 5 и 10 включительно. Цикл можно использовать любой

function firstTask() {
  for (let i = 5; i < 11; i++) {
    console.log(i);
  }
}

//*****
// Место для второй задачи
//При помощи цикла for вывести числа от 20 до 10 в консоль.
//В обратном порядке (20, 19, 18...). Когда цикл дойдет до числа 13 - остановить весь цикл

function secondTask() {
  for (let i = 20; i > 9; i--) {
    if (i === 13) {
      break;
    }
    console.log(i);
  }
}

// Место для третьей задачи
// При помощи цикла for выведите чётные числа от 2 до 10 включительно
function thirdTask() {
  for (let i = 2; i < 11; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
}

// Место для четвертой задачи

// Цикл, который нужно переписать:

for (let i = 2; i <= 16; i++) {
  if (i % 2 === 0) {
    continue;
  } else {
    console.log(i);
  }
}

//Перепишите цикл  for на вариант с while.
//Результат должен остаться точно таким же.
//Не создайте бесконечный цикл! Иначе браузер может зависнуть.

function fourthTask() {
  let i = 2;

  while (i <= 16) {
    if (i % 2 === 0) {
      i++;
      continue;
    } else {
      console.log(i);
    }
    i++;
  }
}

// Место для пятой задачи
// Заполните массив цифрами от 5 до 10 включительно.
// Помните, что элементы массива можно сформировать так же, как и обращаться к ним: arr[0]

function fifthTask() {
  const arrayOfNumbers = [];

  for (let i = 5; i < 11; i++) {
    arrayOfNumbers[i - 5] = i;
  }
  console.log(arrayOfNumbers);

  // Не трогаем
  return arrayOfNumbers;
}

const arrayOfNumbers = [];

for (let i = 5; i < 11; i++) {
  arrayOfNumbers[i - 5] = i;
}

console.log(arrayOfNumbers);
