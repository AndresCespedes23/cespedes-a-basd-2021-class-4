//a) Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"] mostrar por consola los meses 5 y 11 (utilizar console.log).
var months = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"];
console.log("3-a the answer is: " + months[4] + " and " + months[10]);
//b) Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort).
console.log("3-b the answer is: " + months.sort());
//c) Agregar un elemento al principio y al final del array (utilizar unshift y push).
months.unshift(3);
months.push(4);
console.log("3-c the answer is: " + months);
//d) Quitar un elemento del principio y del final del array (utilizar shift y pop).
months.shift(3);
months.pop(4);
console.log("3-d the answer is: " + months)
//e) Invertir el orden del array (utilizar reverse).
console.log("3-e the answer is: " + months.reverse())
//f) Unir todos los elementos del array en un único string donde cada mes este separado por un guión - (utilizar join).
console.log("3-f the answer is: " + months.join("-"))
//g) Crear una copia del array de meses que contenga desde Mayo hasta Noviembre (utilizar slice).
var months1 = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"];
console.log("3-g the answer is: " + months1.slice(4, 11));