import { fromEvent, interval } from 'rxjs';
import { concatMap,take, switchMap, exhaustMap } from 'rxjs/operators'


const click$ = fromEvent(document, 'click');
const interval$ = interval(500);

click$.pipe(
    exhaustMap(() => interval$.pipe(
        take(5)
    ))
).subscribe(console.log)