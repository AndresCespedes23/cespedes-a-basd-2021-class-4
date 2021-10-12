//a) Crear una función suma que reciba dos valores numéricos y retorne el resultado. Ejecutar la función y guardar el resultado en una variable, mostrando el valor de dicha variable en la consola del navegador.
function exercise1(a, b) {
    return a + b
}
var resultA = exercise1(5, 7);
console.log('6-a the answer is: ' + resultA);
//b) A la función suma anterior, agregarle una validación para controlar si alguno de los parámetros no es un número, mostrar una alerta aclarando que uno de los parámetros tiene error y retornar el valor NaN como resultado. 
/*function exercise2(a, b) {
    if (typeof(a) || typeof(b) === 'string') { 
        console.log('erro!')
    } else if (typeof(a) || typeof(b) === 'boolean') {
        console.log('error!')
    } else if (typeof(a) || typeof(b) === 'undefined') {
        console.log('error!') 
    } 
    return 'Nan'
}
var resultB = exercise2(5, 7);
console.log("5-b the answer is: " + resultB)
*/

//c) Crear una función validate integer que reciba un número como parámetro y devuelva verdadero si es un número entero.
function exercise3(z) {
    return Number.isInteger(z)
}
console.log('6-c the answer is: ' + exercise3(4));
/*d) A la función suma del ejercicio 6b) agregarle una llamada que valide que los números sean enteros. En caso que haya decimales mostrar un alerta con el error y retorna el número convertido a entero (redondeado).
function exercise4(a, b) {
    if(Number.isInteger(a, b) != true) {
        console.log('error!');
    } 
    return Math.round(a);
    
}
var resultD = exercise4(5.8, 9,1)
console.log('6-d the answer is: ' + resultD);
*/

//e) Convertir la validación del ejercicio 6b) en una función separada y llamarla dentro de la función suma probando que todo siga funcionando igual.
