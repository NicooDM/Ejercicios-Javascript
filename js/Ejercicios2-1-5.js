/*
1- Escribir un programa que solicite la edad y si es mayor de 18 años mostrar un mensaje
que ya puede conducir, si la edad ingresada no es un número válido indicarlo en un
mensaje.
 */
/*
let edad= parseInt(prompt("Ingrese su edad : "));

if(edad<18){console.log("El ciudadano es menor de edad");}
else if(edad>18){console.log("El ciudadano es mayor de edad")}*/

/*
2- Escribir un programa que solicite una nota (número) de 0 a 10. Luego mostrar la
calificación en un alert según los siguientes rangos de nota:
● 0-2: Muy deficiente
● 3-4: Insuficiente
● 5-6: Suficiente
● 7: Bien
● 8-9: Notable
● 10: Sobresaliente
Si ingreso un numero que no esté dentro del rango de 0 a 10 mostrar un mensaje de
“número erróneo”. Si el numero ingresado no es válido mostrar el mensaje “Introduce un
número válido”.
 */
/*
let nota = parseInt(prompt("Ingrese la nota del alumno"));

if(isNaN(nota)){
   nota= parseInt(prompt("Ingrese la nota CORRECTA del alumno"));

}

switch(nota){
    case 0:
    case 1:
    case 2:
        document.write("NOTA MUY DEFICIENTE");
        break;
        case 3:
        case 4:
            document.write("NOTA INSUFICIENTE");
            break;
            case 5:
            case 6:
                document.write("NOTA SUFICIENTE");
                break;
                case 7:
                    document.write("NOTA BIEN");
                    case 8:
                    case 9:
                        document.write("NOTA NOTABLE");
                        break;
                        case 10:
                            document.write("NOTA EXCELENTE");
                            break;
                       
}
*/
/*3- hacer un script que pida texto y al pulsar cancelar, anilar todas las letras con un -
*/

/*let contenedor = "";
do{
    let palabra = prompt("Ingrese una palabra");
    contenedor = contenedor + "-"+palabra;

}while(confirm("Desea continuar?"));
document.write(contenedor);*/


/*4- Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un número
deberá indicarse con un «alert» y seguir pidiendo números. Al salir con “cancelar” deberá
indicarse la suma total de los números introducidos.*/
 
/*let suma = 0;
do{
    let numero= parseInt(prompt("Ingrese los numeros"));
    suma = suma + numero;
   
}while(confirm("Desea Continuar?"))
document.write(suma);*/

/*
10- Realiza un script que pida número de filas y columnas y escriba una tabla. Dentro cada
una de las celdas deberá escribirse un número consecutivo en orden descendente. Si, por
ejemplo, la tabla es de 7×5 los números irán del 35 al 1.
 */
/*
let fila = parseInt(prompt("Ingrese el numero de filas"));
let columna = parseInt(prompt("Ingrese el numero de columnas"));
let producto = fila*columna;

document.write("<table border>");
/*
document.write("<tr>");
document.write("<td>prueba");

document.write("</td>");
document.write("</tr>");
*/
/*
for(let indiceFilas = 0;indiceFilas<fila;indiceFilas++){
    //dibujar las filas
    document.write("<tr>");
    //dibujar las celdas
    for(let indiceColumna=0; indiceColumna<columna;indiceColumna++){
        document.write("<td>"+producto);
        document.write("</td>");
        producto--;

    }
    document.write("</tr>");

}
document.write("</table>");*/
