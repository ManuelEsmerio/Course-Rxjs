import { interval, from, of } from 'rxjs'
import { scan, reduce, tap, map } from 'rxjs/operators'

const numeros = [1,2,3,4,5];

const reduceFunction = (acc, cur) => acc + cur;

console.log("Inicio");
from(numeros)
.pipe(
    reduce(reduceFunction),
    // tap(console.log)
)
.subscribe(console.log);

of(...numeros)
.pipe(
    scan(reduceFunction),
    // tap(console.log)
)
.subscribe(console.log);

console.log("Fin");

// Redux
interface User {
    id?:string,
    autenticado?:boolean,
    toke?: string,
    edad?: number
}

const user:User[] = [
    {
        id:'manuel',
        autenticado:false,
        toke:null
    },
    {
        id:'manuel',
        autenticado:true,
        toke:'ABC'
    },
    {
        id:'manuel',
        autenticado:true,
        toke:'ABC123'
    }
];

const state$ = from<User[]>(user)
.pipe(
    scan<User,User>( (acc, cur) => {
        return { ...acc, ...cur }
    },{ edad: 26 })
);

state$
.pipe(
    map( value => value.id )
)
.subscribe( console.log )