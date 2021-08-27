import { writeFile } from 'fs';
//import { Buffer } from 'buffer';

import colors from 'colors';


export const listarArchivo = (base, limite = 10) => {

    return new Promise((resolve, reject) => {

        console.log('======================='.green);
        console.log(`Tabla de ${base}`.green);
        console.log('======================='.green);


        let data = '';
        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i}\n`;
        }

        resolve(console.log(data));
    })
}

export const crearArchivo = (base, limite = 10) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido '${base}' no es un número`);
            return;
        }

        let data = '';
        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i}\n`;
        }

        writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(`tabla-${base}.txt`);
        });

    });
}


/* fs.writeFile('tabla-2.txt', 'hola mundo', (err) => {
    if (err) throw err;
    console.log('El archivo tabla-2.txt ha sido creado!');
}); */