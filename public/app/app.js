import { log } from './utils/promise-helpers.js';
import './utils/array.helpers.js';
import { notasService } from './nota/nota.service.js';

const sumItems = code => notas => notas
.$flatMap(nota => nota.itens)
.filter(item => item.codigo == code)
.reduce((total, item) => total + item.valor, 0);

document
.querySelector('#myButton')
.onclick = () => 
        notasService.listAll()
        .then(sumItems('2143'))
        .then(console.log)
        .catch(console.log);

