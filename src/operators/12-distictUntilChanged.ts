import { from, of } from 'rxjs'
import { distinctUntilChanged } from 'rxjs/operators'


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
    distinctUntilChanged((pre, cur) => pre.nombre === cur.nombre)
).subscribe(console.log)