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
function obtenerDiaSemana(fecha: Date) {
  const fechaMoment = moment(fecha, 'DD/MM/YYYY');
// Convertimos la fecha ingresada al formato 'dddd' para obtener el día de la semana
  const diaSemana = fechaMoment.format('dddd');
  return diaSemana;
}


// Pedimos al usuario que ingrese una fecha
    rl.question('Ingrese una fecha (DD/MM/AAAA): ', (fecha) => {
        // Obtenemos el día de la semana de la fecha ingresada
        const diaSemana = obtenerDiaSemana(fecha);     
        // Mostramos los resultados al usuario
        console.log(`La fecha ${fecha} es un ${diaSemana}`);
        // Cerramos la interfaz de lectura
        rl.close();
      });

