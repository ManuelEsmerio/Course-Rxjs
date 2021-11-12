import { of, from, range, interval } from 'rxjs';
import { reduce, tap, take } from 'rxjs/operators';


const lista = [
    {
        cantidad:2,
        total: 250
    },
    {
        cantidad:1,
        total: 150
    },
    {
        cantidad:3,
        total: 100
    },
    {
        cantidad:4,
        total: 500
    }
]


const form$ = from(lista);
const of$ = of(1,2,3,4,5,6);
const range$ = range(1,100);

console.log("Inicio");
of$
.pipe(
    reduce((acc, curr) => acc + curr, 0)
)
// .subscribe(console.log);


range$
.pipe(
    reduce((acc, curr) => acc + curr, 0)
)
// .subscribe(console.log);

form$
.pipe(
    reduce((acc, curr) => acc + curr.total, 0)
)
// .subscribe(console.log);

interval(500)
.pipe(
    take(6),
    tap(console.log),
    reduce((acc, curr) => acc + curr, 0)
).subscribe({
    next: value => console.log('value', value),
    complete: () => console.log('complete')
})

console.log("Final");