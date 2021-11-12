import { fromEvent, interval } from "rxjs";
import { takeWhile, sample, tap } from 'rxjs/operators';


const interval$ = interval(500);
const click$    = fromEvent(document, 'click');

interval$.pipe(
    takeWhile(value => value <= 30),
    tap(console.log),
    sample(click$),
    
).subscribe({
    next: value => console.log('value:',value),
    complete: () => console.log("complete")
});