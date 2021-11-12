import { fromEvent } from 'rxjs';
import { first, take, tap, auditTime, map } from 'rxjs/operators'


const click$ = fromEvent<PointerEvent>(document, 'click');

interface Cordeladas{
    x:number,
    y:number
}

click$.pipe(
    take(5),
    map<PointerEvent,Cordeladas>( ({x, y}) => ({x, y})),
    tap(console.log),
    auditTime(5000)
).subscribe({
    next:value => console.log('value', value),
    complete: () => console.log('complete')
})