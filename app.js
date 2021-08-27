
//requireds

//const fs = require('fs');
//const fs = require('express'); No es nativo de node
//const fs = require('./archivo'); En algun lugar de nuestro proyecto

//const data = new Uint8Array(Buffer.from('')); //No se qué es
import { argv } from './config/yargs.js';

import colors from 'colors/safe.js';

import { crearArchivo } from './multiplicar/multiplicar.js';
import { listarArchivo } from './multiplicar/multiplicar.js';


let comando = argv._[0];

switch (comando) {

    case 'listar':
        //console.log('Listar');
        listarArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Listado`))
            .catch(e => console.log(e));
        break;

    case 'crear':
        //console.log('crear');
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log('Archivo creado: ', colors.red(archivo.red)))  // ${archivo.red}
            .catch(e => console.log(e));
        break;
    default:
        console.log('Comando no reconocido');
}


//let base = 'abc';

//console.log(crearArchivo);
//console.log(process.argv);

//let argv2 = process.argv;
/* let parametro = argv[2];
let base = parametro.split('=')[1];
 */
//console.log(argum);

/* console.log('Límite',argv.limite);
console.log('Base',argv.base); */
/*
crearArchivo(base)
    .then(archivo => console.log(`Archivo creado ${archivo}`))
    .catch(e => console.log(e)); */