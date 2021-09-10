//declarar una funcion sin parametros
/*
function aumentarPrecio(){
    let disney=385;
    let inflacion=100;
    document.write("Valor total del servicio disney : $ "+(disney+inflacion));
}
*/
//invocar o llamar a una funcion
//aumentarPrecio();
//crear funcion con parametros
/*

function actualizarPrecios(monto,precio,total){
    let calcular = precio *monto;
    total=precio+calcular

    document.write("<br> El precio total de disneyPLus es  :$ "+total);
    

}*/
//funciones que retornan un valor
/*
function convertirDolaresaPesos(precioDolar){
    let total = precioDolar*184;
    return total
}
let nombreProducto = prompt("Ingrese el nombre del producto : ")
let producto = parseFloat(prompt("Ingrese el precio del producto en USD"));
document.write(`el valor del producto ${nombreProducto} y su precio en pesos es :$ ${convertirDolaresaPesos(producto)} `);*/
//let indiceInflacion = parseFloat(prompt("Ingrese el valor de la inflacion"));
//385 es el precio de disneyplus y 0 seria la variable total
//actualizarPrecios(385,indiceInflacion,0);
//Funciones Flechas
 let convertirDolares = (precioDolar) =>{
    let total = precioDolar*184;
    return total

 }
 