import { interval, of } from 'rxjs';
import { take, startWith, endWith } from 'rxjs/operators'


const of$ = of(1,2,3);

console.log('inicio')
of$.pipe(
    startWith('a','b','c','d'),
    endWith('x','y','z'),
).subscribe(console.log)
console.log('fin')