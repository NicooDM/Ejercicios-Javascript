/*
6
Escribe un programa que pida dos números y escriba en la pantalla cual
es el mayor.
 */
/*
let numero1 = parseInt(prompt("Ingrese el primer numero : "));
let numero2= parseInt(prompt("Ingrese el segundo numero : "));

if(numero1>numero2){
    console.log("el numero mayor es : " +numero1);

}
else if (numero2>numero1){
    console.log("el numero mayor es : "+numero2)
}
if(numero1===numero2){
    console.log("Los numeros son iguales")
}*/
/*
7- Escribe un programa que pida 3 números y escriba en la pantalla el mayor
de los tres.
 */
/*
let numero1 = parseInt(prompt("Ingrese el primer numero : "));
let numero2= parseInt(prompt("Ingrese el segundo numero : "));
let numero3 = parseInt(prompt("Ingrese el tercer numero : "));

if(numero1>numero2 && numero1>3){
    console.log("El numero mayor es : "+numero1);
}
else if(numero2>numero1 && numero2>numero3){
    console.log("El numero mayor es : "+numero2);
}
if(numero3>numero1 && numero3>numero2){
    console.log("El numero mayor es : "+numero3);
}
else if(numero1===numero2&& numero1===numero3){
    console.log("Los numeros son iguales");
}
*/
/*
8.- Escribe un programa que pida un número y diga si es divisible por 2
*/
/*
let numero= parseInt(prompt("Ingrese el numero : "));
if(numero%2==0){
    console.log("El numero es divisible por 2");
}
else(console.log("El numero no es divisible por 2"));*/
/*
9- escribe un programa que pida una frase y devuelva las vocales
*/
/*
let frase = prompt("Ingrese una frase");
console.log(frase);
console.log(frase.length);

for (let vocal = 0; vocal < frase.length; vocal++) {
  console.log(frase.charAt(vocal));
  if (
    frase.charAt(vocal) == "a" ||
    frase.charAt(vocal) == "e" ||
    frase.charAt(vocal) == "i" ||
    frase.charAt(vocal) == "o" ||
    frase.charAt(vocal) == "u"
  ) {
      document.write(frase.charAt(vocal));
  }
}*/

/*10.-11 Escribe un programa que pida un número y nos diga si es divisible por 2,
3, 5 o 7 (sólo hay que comprobar si lo es por uno de los cuatro) */
/*
let numero= parseInt(prompt("Ingrese el numero : "));
if(numero%2===0){console.log("El numero es divisible por 2");}
else if(numero%3===0){console.log("El numero es divisible por 3");}
if(numero%5===0){console.log("El numero es divisible por 5");}
else if(numero%7===0){console.log("El numero es divisible por 7");}*/
