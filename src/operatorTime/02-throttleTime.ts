import { asyncScheduler, fromEvent } from 'rxjs';
import { throttleTime, pluck, distinctUntilChanged } from 'rxjs/operators';

const click$ = fromEvent(document, 'click');

// click$.pipe(
//     throttleTime(3000)
// ).subscribe(console.log);


const input = document.createElement('input');

document.querySelector('body').append(input);


const changeKeyPress$ = fromEvent(input, 'keyup');

changeKeyPress$.pipe(
    throttleTime(1500, asyncScheduler, {
        leading: false,
        trailing:true
    }),
    pluck('target', 'value'),
    distinctUntilChanged()
)
.subscribe(console.log)
