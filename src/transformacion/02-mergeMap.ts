import { interval, of, fromEvent } from 'rxjs';
import { mergeMap, takeUntil, take, map } from 'rxjs/operators';


const letras$ = of('a','b','c');

const mouseDown$ = fromEvent(document, 'mousedown');
const mouseUp$ = fromEvent(document, 'mouseup');
const interval$ = interval();


mouseDown$.pipe(
    mergeMap(() => interval$.pipe(
        takeUntil(mouseUp$)
    ))
).subscribe({
        next: val => console.log(val),
        complete: () => console.log('complete')
    });



letras$.pipe(
    mergeMap(letra => interval(1000).pipe(
        map(i => letra + i),
        take(3)
    ))
)
// .subscribe({
//     next: val => console.log(val),
//     complete: () => console.log('complete')
// });