import { concat, interval, take } from "rxjs";


const interval1$ = interval(1000).pipe(take(3));
const interval2$ = interval(1000).pipe(take(3));
const interval3$ = interval(1000).pipe(take(3));


concat(interval1$, interval2$, interval3$)
.subscribe({
    next: val => console.log('sub:', val),
    complete: () => console.log('complete')
});
