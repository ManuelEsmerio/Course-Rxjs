//  Son asincronos por naturaleza
import { interval, Observer, timer } from 'rxjs';

const today = new Date();
today.setSeconds( today.getSeconds() + 5);

const observer:Observer<any> = {
    next: val => console.log('val:',val),
    error:null,
    complete: () => console.log('complete')
}

const interval$ = interval(1000);
// const timer$ = timer(2000, 1000);
const timer$ = timer(today);


console.log("Inicio");
// interval$.subscribe( observer );
timer$.subscribe( observer );
console.log("Fin");
