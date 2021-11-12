import { from, of } from 'rxjs'
import { distinctUntilKeyChanged } from 'rxjs/operators'


interface Personaje{
    nombre:string
}

const personajes:Personaje[] = [
    {
        nombre:'Megaman'
    },
    {
        nombre:'X'
    },
    {
        nombre:'X'
    },
    {
        nombre:'Megaman'
    },
    {
        nombre:'Megaman'
    },
    {
        nombre:'Dr.Willy'
    },
    {
        nombre:'Dr.Willy'
    },
    {
        nombre:'Megaman'
    },
    {
        nombre:'Zero'
    },
    {
        nombre:'Zero'
    }
];

from(personajes)
.pipe(
    distinctUntilKeyChanged('nombre')
).subscribe(console.log)