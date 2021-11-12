import { range } from 'rxjs'
import { tap, map } from 'rxjs/operators'

const numbers$ = range(1,5);

numbers$
.pipe(
    tap( x => console.log('antes ', x)),
    map(val => val * 10),
    tap(console.log),
    map(val => val * 10),
    tap(console.log),
    map(val => val * 10),
    tap(console.log),
    map(val => val * 10),
    tap(console.log),
    map(val => val * 10),
    tap(console.log),
    map(val => val * 10),
    tap(console.log),
    map(val => (val * 10).toString()),
    tap({
        next: value => console.log('Final del pipe ', value),
        complete: () => console.log("Se termino todo")
    })
)
.subscribe(console.log)