import { fromEvent } from 'rxjs';
import { map, takeWhile, tap } from 'rxjs/operators'


const click$ = fromEvent<PointerEvent>(document, 'click');

interface Cordeladas {
    clientX:number,
    clientY:number
}

click$
.pipe(
    map<PointerEvent, Cordeladas>(({clientX, clientY}) => ({ clientX, clientY})),
    tap<Cordeladas>(console.log),
    // takeWhile<Cordeladas>(({ clientY }) => clientY <= 250)
    // manda el ultimo valor con el cual termino la el observer
    takeWhile<Cordeladas>(({ clientY }) => clientY <= 250, true)

)
.subscribe({
    next: value => console.log('subs:',value),
    complete: () => console.log("Complete")
})