//Что выведет в консоль код?

console.log(NaN || 2 || undefined); //2

console.log(NaN && 2 && undefined); //NaN

console.log(1 && 2 && 3); //3

console.log((!1 && 2) || !3); //false || false // last false

console.log(25 || (null && !3)); //25

console.log(NaN || null || !3 || undefined || 5); //5

console.log(NaN || (null && !3 && undefined) || 5); //5

console.log((5 === 5 && 3 > 1) || 5); //true

//**** */
//Выполняется ли условие? YES

// const hamburger = 3;
// const fries = 3;
// const cola = 0;
// const nuggets = 2;

if ((hamburger === 3 && cola) || (fries === 3 && nuggets)) {
  //0(false) || nuggets(2) // 2
  console.log('Done!');
}

console.log((hamburger === 3 && cola) || (fries === 3 && nuggets));

//*** */
//Выполняется ли условие? YES

// let hamburger;
// const fries = NaN;
// const cola = 0;
// const nuggets = 2;

if (hamburger || cola || fries === 3 || nuggets) {
  console.log('Done!');
}

console.log(hamburger || cola || fries === 3 || nuggets); //nuggets(2)

//Переменная hamburger задана через let, так как const подразумевает какое-либо начальное значение.
//С const будет ошибка, можете проверить.
//А без значения там undefined, напоминаю 🙂

//*** */
//Выполняется ли условие? NO

let hamburger;
const fries = NaN;
const cola = 0;
const nuggets = 2;

if ((hamburger && cola) || (fries === 3 && nuggets)) {
  //false || false //last false
  console.log('Done!');
}

console.log((hamburger && cola) || (fries === 3 && nuggets));
