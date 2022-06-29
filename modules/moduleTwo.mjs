import { one, two as twoImp, sum } from "./moduleOne.mjs";

const result = sum(4, 5);
console.log(result);

console.log(one);
console.log(twoImp);


//node .\moduleTwo.mjs - запуск файла