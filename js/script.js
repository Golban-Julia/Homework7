"use strict";

// 1. Напишите функцию sumTo(n), которая вычисляет сумму чисел 1 + 2 + ... + n. Для решения задачи необходим использовать рекурсию.

// 1. Рекурсия - n - 1 
// 2. Базис рекурсии - условие выхода из рекурсии 
// 3. Суммируем

// function sumTo(n) {
//     if (n === 1) {
//         return n;
//     }

//  return n + sumTo(n - 1);
// }

// const sumToShirt = (n) => (n === 1 ? n : n + sumTo(n - 1));

// console.log(sumTo(4)); // 10
// console.log(sumToShirt(3)); // 6

// 2. Написать функцию findShort, которая будет находит самое короткое слово в предложении.
//  В случае если длина двух слов совпадает - вернуть первое найденое короткое слово.Пример работы функции:

// 1. Преобразовать строку в массив;
// 2. Отсортировать эллементы массива по длине от меньшего к большему;
// 3. Вернуть первый эллемент массива.

function findShort(string) {
    let array = string.split(" ").sort((a, b) => (a.length - b.length));
    return array[0];
}

const sentance = "Lorem ipsum dolor sit amet";


console.log(findShort(sentance)); // sit
console.log(findShort("Hello world")); // Hello
console.log(findShort("Hi")); // Hi
console.log(findShort("She is David's sister")); // is