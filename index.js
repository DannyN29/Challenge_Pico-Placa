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
function verificarHorario(hora) {
    // Separamos la hora tanto la  inicial como la final en partes (horas y minutos)
    var partesDeHoraInicial = hora.split(':');
    var partesDeHoraFinal = hora.split(':');
    var horasInicial = parseInt(partesDeHoraInicial[0]);
    var minutosInicial = parseInt(partesDeHoraInicial[1]);
    var horasFinal = parseInt(partesDeHoraFinal[0]);
    var minutosFinal = parseInt(partesDeHoraFinal[1]);
    // Verificamos si la hora está dentro del rango deseado
    if ((horasInicial >= 6 && minutosInicial >= 0 && horasFinal < 9
        && minutosFinal >= 0 && minutosFinal <= 30) ||
        (horasInicial >= 16 && minutosInicial >= 0 &&
            horasFinal <= 21 && minutosFinal >= 0 && minutosFinal <= 59)) {
        return true;
    }
    else {
        return false;
    }
}
// Pedimos al usuario que ingrese una fecha
rl.question('Ingrese una fecha (DD/MM/AAAA): ', function (fecha) {
    // Pedimos al usuario que ingrese una hora
    rl.question('Ingrese una hora (HH:MM): ', function (hora) {
        // Obtenemos el día de la semana de la fecha ingresada
        var diaSemana = obtenerDiaSemana(fecha);
        console.log("La fecha ".concat(fecha, " es un ").concat(diaSemana));
        console.log("La hora es: ".concat(hora));
        // Cerramos la interfaz de lectura
        rl.close();
    });
});
