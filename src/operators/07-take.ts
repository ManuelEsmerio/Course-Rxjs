import { of } from 'rxjs'
import { take, tap } from 'rxjs/operators'

const numeros$ = of(1,2,3,4,5,6);

numeros$
.pipe(
    tap(console.log),
    take(4)
)
.subscribe({
    next: value => console.log('next:', value),
    complete: () => console.log('complete')
})