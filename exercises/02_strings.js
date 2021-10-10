//a) Crear una variable de tipo string con al menos 10 caracteres y convertir todo el texto en mayúscula (utilizar toUpperCase).
var string1 = 'mechagodzilla';
console.log('2-a the answer is: ' +  string1.toUpperCase());
//b) Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los primeros 5 caracteres guardando el resultado en una nueva variable (utilizar substring).
var string2 = 'afghanistan';
var resultb = string2.substring(0, 5);
console.log('2-b the answer is: ' + resultb);
//c) Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los últimos 3 caracteres guardando el resultado en una nueva variable (utilizar substring).
var string3 = 'bangladesh';
var resultc = string3.substring(7, 10);
console.log('2-c the answer is: ' + resultc);
//d) Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con la primera letra en mayúscula y las demás en minúscula. Guardar el resultado en una nueva variable (utilizar substring, toUpperCase, toLowerCase y el operador +).
var string4 = 'madagascar'
var resultd = string4.substring(0, 1).toUpperCase() + string4.substring(1, 10).toLowerCase();
console.log('2-d the answer is: ' + resultd);
//e) Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco. Encontrar la posición del primer espacio en blanco y guardarla en una variable (utilizar indexOf).
var string5 = 'dominican republic';
var resulte = string5.indexOf(' ');
console.log('2-e the answer is: ' + resulte);
//f) Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio entre medio). Utilizar los métodos de los ejercicios anteriores para generar un nuevo string que tenga la primera letra de ambas palabras en mayúscula y las demás letras en minúscula (utilizar indexOf, substring, toUpperCase, toLowerCase y el operador +).
var string6 = 'afghanistan bangladesh';
var resultf = string6.substring(0, 1).toUpperCase() + string6.substring(1, 11).toLowerCase() + string6.indexOf(' ') + string6.substring(12, 13).toUpperCase() + string6.substring(13, 22).toLowerCase();
console.log('2-f the answer is: ' + resultf);

