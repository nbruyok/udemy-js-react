// 3) Задача с собеседований. Напишите функцию reverse, которая принимает в себя строку и возвращает эту строку в обратном порядке.

// Пример:
// const someString = 'This is some strange string';
// reverse(someString) => 'gnirts egnarts emos si sihT'

// Функцию можно применить к любой строке. Если в функцию приходит не строка - вернуть сообщение "Ошибка!"

const someString = 'This is some strange string';

function reverse(str) {
  if (typeof str !== 'string') {
    return 'Ошибка!';
  }

  return str.split('').reverse().join('');
}

console.log(reverse(someString));

//**** */
// 4) Представьте такую реальную ситуацию. У вас есть банкомат, который выдает деньги из двух разных банков в разных валютах.
// Один банк основной с базовыми валютами: const baseCurrencies = ['USD', 'EUR'];
//второй дополнительный с прочими валютами: const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

// Вам нужно создать главную функцию банкомата availableCurr, которая принимает два аргумента:
// первый - это массив со всеми доступными валютами из двух банков сразу (сейчас представим, что они не могут повторяться),
// второй - необязательный аргумент, который указывает ту валюту, которая сейчас закончилась в банкомате.
// Если массив в первом аргументе пустой - то функция возвращает строку 'Нет доступных валют'. Функция возвращает строку в нужном виде.

// Пример:
// availableCurr(['UAH', 'RUB', 'CNY'], 'CNY')
// Вернет строку:
// Доступные валюты:
// UAH
// RUB

// Заметьте:
// - CNY (юань) исчез из списка валют, значит такая валюта закончилась
// - После валюты: стоит перенос строки \n, и после каждой валюты тоже. Это важно для тестов
// - Данные для первого аргумента должны приходить сразу из двух банков, причем сначала baseCurrencies,
// потом additionalCurrencies по порядку

const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

function availableCurr(arr, missingCurr) {
  let str = 'Доступные валюты:\n';

  if (arr.length === 0) {
    return 'Нет доступных валют';
  }

  arr.forEach((element) => {
    if (element !== missingCurr) {
      str += `${element}\n`;
    }
  });

  return str;
}

console.log(availableCurr([...baseCurrencies, ...additionalCurrencies], 'CNY'));
