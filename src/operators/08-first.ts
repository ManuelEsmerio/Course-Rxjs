import { fromEvent } from "rxjs";
import { first, take, tap, map } from 'rxjs/operators'

const click$ = fromEvent<PointerEvent>(document, 'click');

click$
.pipe(
    // take(1)
    tap<PointerEvent>( t => console.log('primer tap ',t) ),
    map( ({ clientX, clientY }) => ({
        clientY, clientX
    })),
    tap( t => console.log('segundo tap ',t) ),
    first( ({clientY}) => clientY >= 1500),
    // tap( t => console.log('segundo tap ',t) ),
)
.subscribe({
    next: value => console.log(value),
    complete: () => console.log('complete')
})