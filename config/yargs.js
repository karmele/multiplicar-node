
import yargs from 'yargs';

import { hideBin } from 'yargs/helpers';

const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}
export const argv = yargs(hideBin(process.argv))
    .command('listar', 'Imprime la tabla de multiplicar', opts)
    .command('crear', 'Genera un archivo', opts)
    .argv;