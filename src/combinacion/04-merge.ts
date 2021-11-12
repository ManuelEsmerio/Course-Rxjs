import { fromEvent, merge } from 'rxjs';
import { tap, pluck } from 'rxjs/operators'


const keyup$ = fromEvent(document, 'keyup');
const click$ = fromEvent(document, 'click');


merge( keyup$, click$ ).pipe(
    pluck('type')
).subscribe(console.log);