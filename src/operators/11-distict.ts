import { from, of } from 'rxjs'
import { distinct, map } from 'rxjs/operators'


const of$ = of(1,2,3,4,5,1,2,7,4,9,10,8,1,2,3,4,5,6,7,9,8,5,10,11,5,13);

console.log('Inicio');

of$
.pipe(
    distinct()
).subscribe({
    next: value => console.log('next:',value),
    complete: () => console.log('complete')
});
console.log("Fin");


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
        nombre:'Zero'
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
        nombre:'X'
    },
    {
        nombre:'Megaman'
    },
    {
        nombre:'Zero'
    },
    {
        nombre:'Zero'
    },
    {
        nombre:'Megaman'
    }
];

// Trabajando con map y objetos con el operador distinct
// from(personajes)
// .pipe(
//     map<Personaje,string>(item => item.nombre),
//     distinct<string, string>()
// ).subscribe({
//     next: value => console.log('personaje: ' , value),
//     complete: () => console.log("Complete")
// })

from(personajes)
.pipe(
    distinct( personaje => personaje.nombre)
).subscribe({
    next: value => console.log('personaje: ' , value),
    complete: () => console.log("Complete")
})