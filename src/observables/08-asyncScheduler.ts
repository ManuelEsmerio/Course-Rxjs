import { asyncScheduler, timer } from 'rxjs'

const saludar = () => console.log('Hola Mundo');
const saludar2 = name => console.log('Hola', name);

// asyncScheduler.schedule(saludar, 2000);
// asyncScheduler.schedule(saludar2, 2000, 'Manuel');


const sub = asyncScheduler.schedule(function (state:number) {
    console.log('state', state);

    this.schedule(state + 1, 1000);

}, 3000, 0);


asyncScheduler.schedule( () => sub.unsubscribe() , 6000);

// const timer$ = timer(10000);

// timer$.subscribe(() => {
//     sub.unsubscribe();
// });