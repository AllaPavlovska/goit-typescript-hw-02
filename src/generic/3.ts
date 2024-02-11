/*
  У вас є функція merge, яка поєднує два об'єкти. 
  Використовуйте generics, щоб вказати, що ці об'єкти можуть бути будь-якого типу.
*/

function merge<T, U>(objA: T, objB: U): T & U {
  return Object.assign(objA, objB);
}


const mergedObj = merge({ name: 'Mike' }, { age: 4 });
console.log(mergedObj); 

export {};
