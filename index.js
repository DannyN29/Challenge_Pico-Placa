//Asegurarse en primero instalar lo siguiente:
//npm i --save-dev @types/node
//biblioteca moment con npm install moment
// Importamos las librerías necesarias
var readline = require('readline');
var moment = require('moment');
// Creamos una interfaz para leer la entrada del usuario
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
// Función para obtener el día de la semana de una fecha dada
function obtenerDiaSemana(fecha) {
    var fechaMoment = moment(fecha, 'DD/MM/YYYY');
    // Convertimos la fecha ingresada al formato 'dddd' para obtener el día de la semana
    var diaSemana = fechaMoment.format('dddd');
    return diaSemana;
}
// Pedimos al usuario que ingrese una fecha
rl.question('Ingrese una fecha (DD/MM/AAAA): ', function (fecha) {
    // Obtenemos el día de la semana de la fecha ingresada
    var diaSemana = obtenerDiaSemana(fecha);
    // Mostramos los resultados al usuario
    console.log("La fecha ".concat(fecha, " es un ").concat(diaSemana));
    // Cerramos la interfaz de lectura
    rl.close();
});
