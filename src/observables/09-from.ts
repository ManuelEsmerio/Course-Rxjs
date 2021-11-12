import { of, from } from 'rxjs';

/**
 * of = toma argumentos y genera una secuencia
 * from = array, promise, iterable, observable
 */


const observer = {
    next: next => console.log('next ', next),
    complete: () => console.log("Complete")
};

const miGenerador = function *() {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
    yield 6;
}

const miIterable = miGenerador();

from( miIterable ).subscribe(console.log);


// const source1$ = of(...[1,2,3,4,5,6,7,8,9]);
// const source$  = from([1,2,3,4,5,6,7,8,9]);

// const source1$ = of('Manuel');
// const source$  = from("Manuel");

// const source1$ = of('Manuel');
const source$  = from(fetch('https://api.github.com/users/klerith'));


// console.log("Inicio");
// source$.subscribe( async(resp) => {
//     const data = await resp.json();
//     console.log(data);
// });
// // source$.subscribe( observer );
// console.log("Fin");

// source1$.subscribe( observer );