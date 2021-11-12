import { asyncScheduler, of, range } from 'rxjs';

// const src$ = range(-5, 10);

// Realiza el numero de emisiones
const range$ = range(1, 5, asyncScheduler);

// src$.subscribe(console.log);

console.log("Inicio");
range$.subscribe(console.log);
console.log("Final");