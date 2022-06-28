/** ЗАДАЧА 34 - Массив объектов
 *
 * 1. Создайте массив с 3 объектами "cars"
 *
 * 2. Каждый объект должен иметь три свойства
 *  - carBrand (строка)
 *  - price (число)
 *  - isAvailableForSale (логическое значение)
 *
 * 3. Добавьте еще один объект в массив
 *
 * 4. Выведите результирующий массив в консоль
 */

const cars = [
  { carBrand: "lexus", price: 6000, isAvailableForSale: false },
  { carBrand: "mazda", price: 8000, isAvailableForSale: true },
  { carBrand: "audi", price: 7000, isAvailableForSale: true },
];
console.log(cars);
cars.forEach((element) => {
  console.log(element);
});
const newCars = { carBrand: "zonda", price: 40000, isAvailableForSale: true };
cars.push(newCars);
console.log(cars);
cars.forEach((element) => {
  console.log(element);
});
