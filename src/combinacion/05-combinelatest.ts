import { combineLatest, fromEvent, merge } from 'rxjs';
import { tap, pluck, debounceTime } from 'rxjs/operators'


// const keyup$ = fromEvent(document, 'keyup');
// const click$ = fromEvent(document, 'click');


// combineLatest( 
//     keyup$.pipe(
//         pluck('type')
//     ), 
//     click$.pipe(
//         pluck('type')
//     )
// ).subscribe(console.log);


const input1 = document.createElement('input');
const input2 = document.createElement('input');


input1.placeholder = 'email@gmail.com';
input1.type = 'email';

input2.placeholder = '********';
input2.type = 'password';

document.querySelector('body').append(input1, input2);


//Helper
const getInputStream = (elem: HTMLElement) => fromEvent<KeyboardEvent>(elem, 'keyup').pipe(
    pluck('target','value')
);

combineLatest(
    getInputStream(input1),
    getInputStream(input2)
).pipe(
    debounceTime(500)
).subscribe(console.log)
