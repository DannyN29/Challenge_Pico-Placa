//Asegurarse en primero instalar lo siguiente:
//npm install
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
    // Convertimos la fecha ingresada al formato 'dddd' para obtener el día de la semana
    var fechaMoment = moment(fecha, 'DD/MM/YYYY');
    var diaSemana = fechaMoment.format('dddd');
    return diaSemana;
}
// Función para verificar si una hora esta dentro de un horario
function verificarHorario(hora) {
    // Separamos la hora tanto la  inicial como la final en partes (horas y minutos)
    var partesDeHoraInicial = hora.split(':');
    var partesDeHoraFinal = hora.split(':');
    var horasInicial = parseInt(partesDeHoraInicial[0]);
    var minutosInicial = parseInt(partesDeHoraInicial[1]);
    var horasFinal = parseInt(partesDeHoraFinal[0]);
    var minutosFinal = parseInt(partesDeHoraFinal[1]);
    // Verificamos si la hora está dentro del rango deseado
    if ((horasInicial >= 6 && minutosInicial >= 0 && horasFinal <= 9
        && minutosFinal >= 0 && minutosFinal <= 30) ||
        (horasInicial >= 16 && minutosInicial >= 0 &&
            horasFinal <= 21 && minutosFinal == 0)) {
        return true;
    }
    else {
        return false;
    }
}
// Pedimos al usuario que ingrese su número de placa
rl.question('Ingrese su número de placa (AAA-0000): ', function (placa) {
    // Pedimos al usuario que ingrese una fecha
    rl.question('Ingrese una fecha (DD/MM/AAAA): ', function (fecha) {
        // Pedimos al usuario que ingrese una hora
        rl.question('Ingrese una hora (HH:MM): ', function (hora) {
            // Obtenemos el último digito de la placa ingresada
            var ultimoCaracter = placa.slice(-1);
            // Obtenemos el día de la semana de la fecha ingresada
            var diaSemana = obtenerDiaSemana(fecha);
            // Verificamos que la hora ingresada este en el horario 
            var horaIngresada = verificarHorario(hora);
            console.log("El \u00FAltimo car\u00E1cter de la placa es: ".concat(ultimoCaracter));
            console.log("La fecha ".concat(fecha, " es un ").concat(diaSemana));
            console.log("La hora es un ".concat(hora));
            // Verificamos si el último carácter de la placa, el día de la semana y el horario cumplen las restricciones
            if (((ultimoCaracter === '1' || ultimoCaracter === '2') && diaSemana === 'Monday') && horaIngresada == true ||
                ((ultimoCaracter === '3' || ultimoCaracter === '4') && diaSemana === 'Tuesday') && horaIngresada == true ||
                ((ultimoCaracter === '5' || ultimoCaracter === '6') && diaSemana === 'Wednesday') && horaIngresada == true ||
                ((ultimoCaracter === '7' || ultimoCaracter === '8') && diaSemana === 'Thursday') && horaIngresada == true ||
                ((ultimoCaracter === '9' || ultimoCaracter === '0') && diaSemana === 'Friday') && horaIngresada == true) {
                console.log('Pico y Placa: No puedes circular');
            }
            else {
                console.log("No es Pico y Placa Si puedes circular");
            }
            rl.close();
        });
    });
});
