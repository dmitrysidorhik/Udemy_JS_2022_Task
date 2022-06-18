/** ЗАДАЧА 14 - Строка заглавными буквами
 *
 * 1. Создайте переменную и присвойте ей любую строку
 *
 * 2. Убедитесь что значение этой переменной НЕ является экземпляром String
 * Используйте для этого оператор "instanceof"
 *
 * 3. Убедитесь что значение этой переменной имеет тип "string"
 *
 * 4. Создайте другую переменную и ее значением должно быть значение
 * первой переменной заглавными буквами
 *
 * 5. Выведите в консоль значение второй переменной
 */

const myString = 'исходная строка';
console.log(myString instanceof String);

console.log(typeof(myString));
console.log(typeof myString);

const myStringUppercase=myString.toUpperCase();

console.log(myString);
console.log(myStringUppercase);

// -------------------------------------
const myNewString = new String('добавленная строка');
console.log(myNewString instanceof String);
console.log(typeof(myNewString));
console.log(typeof myNewString);
const myNewStringUppercase=myNewString.toUpperCase();
console.log(myNewString);
console.log(myNewStringUppercase);
console.log(typeof myNewStringUppercase);
