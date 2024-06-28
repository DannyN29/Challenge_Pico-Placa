//Asegurarse en primero instalar lo siguiente:
//npm i --save-dev @types/node
//biblioteca moment con npm install moment

// Importamos las librerías necesarias
const readline = require('readline');
const moment = require('moment');

// Creamos una interfaz para leer la entrada del usuario
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Función para obtener el día de la semana de una fecha dada
function obtenerDiaSemana(fecha: string) {
    // Convertimos la fecha ingresada al formato 'dddd' para obtener el día de la semana
    const fechaMoment = moment(fecha, 'DD/MM/YYYY');
    const diaSemana = fechaMoment.format('dddd');
    return diaSemana;
}

// Función para verificar si una hora esta dentro de un horario
function verificarHorario(hora: string) {
    // Separamos la hora tanto la  inicial como la final en partes (horas y minutos)
    const partesDeHoraInicial = hora.split(':');
    const partesDeHoraFinal = hora.split(':');
    const horasInicial = parseInt(partesDeHoraInicial[0]);
    const minutosInicial = parseInt(partesDeHoraInicial[1]);
    const horasFinal = parseInt(partesDeHoraFinal[0]);
    const minutosFinal = parseInt(partesDeHoraFinal[1]);
    // Verificamos si la hora está dentro del rango deseado
    if ((horasInicial >= 6 && minutosInicial >= 0 && horasFinal <= 9
        && minutosFinal >= 0 && minutosFinal <= 30) ||
        (horasInicial >= 16 && minutosInicial >= 0 &&
            horasFinal <= 21 && minutosFinal == 0)) {
        return true;
    } else {
        return false;
    }
}

// Pedimos al usuario que ingrese su número de placa
rl.question('Ingrese su número de placa: ', (placa) => {
    // Pedimos al usuario que ingrese una fecha
    rl.question('Ingrese una fecha (DD/MM/AAAA): ', (fecha) => {
        // Pedimos al usuario que ingrese una hora
        rl.question('Ingrese una hora (HH:MM): ', (hora) => {
            // Obtenemos el último digito de la placa ingresada
            const ultimoCaracter = placa.slice(-1);
            // Obtenemos el día de la semana de la fecha ingresada
            const diaSemana = obtenerDiaSemana(fecha);
            // Verificamos que la hora ingresada este en el horario 
            const horaIngresada = verificarHorario(hora)
            console.log(`El último carácter de la placa es: ${ultimoCaracter}`);
            console.log(`La fecha ${fecha} es un ${diaSemana}`);
            console.log(`La hora es un ${hora}`);
            // Verificamos si el último carácter de la placa, el día de la semana y el horario cumplen las restricciones
            if (((ultimoCaracter === '1' || ultimoCaracter === '2') && diaSemana === 'Monday') && horaIngresada == true ||
                ((ultimoCaracter === '3' || ultimoCaracter === '4') && diaSemana === 'Tuesday') && horaIngresada == true ||
                ((ultimoCaracter === '5' || ultimoCaracter === '6') && diaSemana === 'Wednesday') && horaIngresada == true ||
                ((ultimoCaracter === '7' || ultimoCaracter === '8') && diaSemana === 'Thursday') && horaIngresada == true ||
                ((ultimoCaracter === '9' || ultimoCaracter === '0') && diaSemana === 'Friday') && horaIngresada == true) {
                console.log('Pico y Placa: No puedes circular');
            } else {
                console.log(`No es Pico y Placa Si puedes circular`);
            }
            rl.close();
        });
    });
});

