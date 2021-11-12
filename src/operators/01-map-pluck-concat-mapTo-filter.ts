import { of, from, range, fromEvent, Observer } from 'rxjs';
import { map, filter, count, pluck, concatWith, mapTo } from 'rxjs/operators'

const observer:Observer<any> = {
    next: value => console.log(value),
    error:null,
    complete: () => console.log("Complete")
}

const of$    = of(1,2,3,4,5,6,7,8,9);
// const form$  = from(name);
const range$ = range(1, 5);
const range2$ = range(1, 1000);
const keyup$  = fromEvent<KeyboardEvent>(document, 'keyup');
const keyupPluck$ = fromEvent<KeyboardEvent>(document, 'keypress');
const click$  = fromEvent<PointerEvent>(document, 'click');


// range$.pipe(
//     map<number, number>(item => item * 10),
//     filter<number>(value => value === 50)
// )
// .subscribe(console.log);

// of$.pipe(
//     filter<number>(value => (value % 2) === 0)
// ).subscribe(console.log);

// range2$.pipe(
//     filter<number>(value => (value % 2) === 0),
//     count()
// )
// .subscribe(console.log);

//  Ejemplo con map //
// keyup$.pipe(
//     map( event => event.code)
// )
// .subscribe(code => console.log(code));

// // Ejemplo con plunk simple
// keyupPluck$.pipe(
//     pluck('key')
// )
// .subscribe(console.log);

// // Ejemplo con plunk navegando en el objecto
// keyupPluck$.pipe(
//     pluck('target', 'baseURI')
// )
// .subscribe(console.log);

// click$.pipe(
//     pluck('target', 'tagName')
// )
// .subscribe(console.log);


keyup$.pipe(
    mapTo('Tecla presionada')
)
.subscribe(console.log);
