import { fromEvent } from 'rxjs';
import { debounceTime, pluck, distinctUntilChanged } from 'rxjs/operators';

const click$ = fromEvent(document, 'click');

// click$.pipe(
//     debounceTime(3000)
// ).subscribe(console.log);


const input = document.createElement('input');

document.querySelector('body').append(input);


const changeKeyPress$ = fromEvent(input, 'keyup');

changeKeyPress$.pipe(
    debounceTime(2000),
    pluck('target', 'value'),
    distinctUntilChanged()
)
.subscribe(console.log)
