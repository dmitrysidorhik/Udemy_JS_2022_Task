/** ЗАДАЧА 11 - Колбэк функция
 *
 * 1. Выведите в консоль "Привет, мир!" с задержкой 5 секунд
 *
 * 2. Используйте стрелочную функцию
 */

const hi = function () {
    console.log('Привет, мир!');
}
setTimeout(hi, 2000);

const hiFun = () => {
    console.log('Привет, мир!');
}
setTimeout(hiFun, 3000);

setTimeout(() => console.log('Привет, мир!'), 5000);