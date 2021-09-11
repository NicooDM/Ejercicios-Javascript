//crear objeto (contiene propiedades y metodos)
//funcion para mostrar el objeto
let mostrar = (variableObjeto) => {
  // obtener todas las claves (propiedades) de un objeto como si fuera un arreglo
  let claves = Object.keys(variableObjeto);
  for (let i = 0; i <= claves.length; i++) {
      let propiedad= claves[i]
    document.write(`<br>${propiedad} : ${variableObjeto[propiedad]}`);
  }
};
//crear objeto con notacion literal
let serie = {
  nombre: "Blindspot",
  temporadas: 5,
  genero: "Accion",
  capitulos: 23,
};
//Mostrar una propiedad de un objeto
document.write(`Serie : ${serie.nombre}`);
document.write(`<br> Capitulos: ${serie.capitulos}`);

//segunda forma de Mostrar propiedades de un objeto
document.write(`<br> Temporadas: ${serie["temporadas"]}`);
//Modificar una propiedad de un objeto
serie.temporadas = 6;
document.write(`<br> Temporadas: ${serie["temporadas"]}`);
//agregar propiedades de a un objeto
serie.premios = true;

//Borrar una propiedad de un objeto
//delete serie.genero;
//console.log(serie)
document.write(mostrar(serie));
