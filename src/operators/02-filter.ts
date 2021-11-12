import { range, of, from, fromEvent } from 'rxjs';
import { filter, map } from 'rxjs/operators';

range(1,10)
.pipe(
    filter<number>((value, index) => {
        console.log('index ',index);
        return (value % 2) === 1
    })
)
// .subscribe(console.log);

interface Personaje {
    tipo:string,
    nombre:string
}

const personaje:Personaje[] = [
    {
        tipo: 'heroe',
        nombre: 'superman'
    },
    {
        tipo: 'heroe',
        nombre: 'batman'
    },
    {
        tipo: 'villano',
        nombre: 'joker'
    }
];


const heroes$ = from<Personaje[]>(personaje);

heroes$
.pipe(
    filter<Personaje>(({ tipo }) => tipo === 'heroe')
)
// .subscribe(console.log);


const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup');

keyup$.pipe(
    map(event => event.code),
    filter(key => key === 'Enter')
)
.subscribe(console.log)
