/** ЗАДАЧА 18 - Перебор элементов массива
 *
 * 1. Создайте массив с несколькими элементами
 *
 * 2. Используя один из методов массивов, переберите все элементы
 * и выведите каждый элемент в консоль
 */
 const array = [2, null, 1, '2', true, 'hello', 3, 5, undefined];

// Предпочтительнее 
array.forEach((element)=>{
    console.log(element)
})
console.log('-----------------');

// Предпочтительнее 
array.forEach((element)=> console.log(element))
console.log('-----------------');

// Не рекомендуется
for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}
