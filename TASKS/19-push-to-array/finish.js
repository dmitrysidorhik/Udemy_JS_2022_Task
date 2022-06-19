/** ЗАДАЧА 19 - Добавление элементов в массив
 *
 * 1. Создайте любой массив
 *
 * 2. Добавьте в конец массива несколько новых элементов
 *
 * 3. Выведите в консоль длину результирующего массива
 */

const array = [1, null, 'text', true, 23];
console.log(array);
array.forEach((element) => console.log(element));

array.push(23, 'hello');
console.log(array);

