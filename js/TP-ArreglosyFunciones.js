/*
1- Crear un array llamado meses y que almacene el nombre de los doce meses del año.
Mostrar por pantalla en forma de lista los doce nombres del arreglo.
 */
/*
let meses = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];
for (let i = 0; i<=meses;i++){
    document.write("<ul>")
document.write("<li>");
document.write(i)

document.write("</ul>")
}*/
/*
2- Crear un script que solicite al usuario mediante un prompt el nombre de ciudades y
almacenarlas en un arreglo, cuando el usuario seleccione cancelar o ingrese el valor “0” se
debe mostrar el arreglo generado, luego realizar las siguientes acciones:
● Mostrar la longitud del arreglo.
● Mostrar en el documento web los ítems de las posiciones primera, tercera y última.
● Añade en última posición la ciudad de París.
● Escribe por pantalla el elemento que ocupa la segunda posición.
● Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'
 */
 /*
let ciudades = [];
 do{
    ciudades = prompt("Ingrese una ciudad : ")


 }while(confirm("Desea salir?"))

 document.write(ciudades.length);
 for(let i =0; i<=ciudades.length;i++){

 }*/
 //------------------------------------------
 /*
 1- Escribir el código de una función a la que se pasa como parámetro un número entero y
devuelve como resultado una cadena de texto que indica si el número es par o impar.
Mostrar por pantalla el resultado devuelto por la función.
  */

/*
const numero =(numeroentero)=>{
  numeroentero=numeroentero%2==0?"El Numero es PAR": "El numero es IMPAR";
  return numeroentero
}

let numeroUsuario = parseInt(prompt("Ingrese el numero"));*/

//document.write(numero(numeroUsuario));

/*
2- Definir una función que muestre información sobre una cadena de texto que se le pasa
como argumento. A partir de la cadena que se le pasa, la función determina si esa cadena
está formada sólo por mayúsculas, sólo por minúsculas o por una mezcla de ambas.
 */

/*
3- Solicitar por pantalla al usuario ingresar el valor de los lados de un rectángulo, luego
crear una función para calcular su perímetro y mostrarlo por pantalla
 */
/*
const rectangulo = (lado1,lado2)=>{
  let perimetro = 2*(lado1+lado2);
  return perimetro;
}

let ladoA = parseInt(prompt("Ingrese el Primer lado del rectangulo"));
let ladoB = parseInt(prompt("Ingrese el Segundo lado del rectangulo"));

document.write(`El valor del perimetro del rectangulo es : ${rectangulo(ladoA,ladoB)} `);*/

/*
4- Escriba un script que muestre la tabla de multiplicar de un número ingresado por pantalla,
la creación de la tabla debe ser realizada con una función y mostrar solo los resultados del 1
al 10 del número elegido por el usuario.
 */
/*
const tablas = (numero1)=>{
  document.write(`La tabla del ${numero1}`)
  for(let i = 1; i<=10;i++){
    let multiplo = numero1 *i;
    document.write(`<br> ${numero1} X ${i} = ${multiplo}`)
  
  }
  return multiplo
}
let numero = parseInt(prompt("Ingrese la tabla del : "));

document.write(tablas(numero));
*/


