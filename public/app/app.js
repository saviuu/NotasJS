import { log, timeoutPromise, delay, retry } from './utils/promise-helpers.js';
import './utils/array.helpers.js';
import { notasService } from './nota/nota.service.js';
import { takeUntil, debounceTime, partialize, pipe } from './utils/operators.js';
import { EventEmitter } from './utils/event-emitter.js'
import { HandleValue } from './utils/handle-value.js';



const operations = pipe(
        partialize(takeUntil, 3),
        partialize(debounceTime, 500)
);


const action = operations(() => 
        retry(3, 3000, () => timeoutPromise(200, notasService.sumItems('2143'))) 
        .then(delay(1000))
        .then(total => EventEmitter.emit('itensTotalizados', total))
        .catch(console.log)
);


document
.querySelector('#myButton')
.onclick = action;

