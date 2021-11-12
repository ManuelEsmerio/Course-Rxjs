import { Observable, Observer } from 'rxjs';

const observer:Observer<any> = {
    next: value => console.log('next: ', value),
    error: error => console.warn('error: ', error),
    complete: () => console.info('complete')
};

const intervalo$ = new Observable<number>(subs => {
    let contador = 0;
    const interval = setInterval( () => {
        contador++;
        subs.next(contador);
        console.log(contador);
    }, 1000);

    setTimeout(() => {
        subs.complete();
    }, 2500);

    return () => {
        clearInterval(interval);
        console.log('intervalo destruido.');
    }
});

const subs1 = intervalo$.subscribe(observer);
const subs2 = intervalo$.subscribe(observer);
const subs3 = intervalo$.subscribe(observer);

// subs1.add( subs2 );

setTimeout( () => {
    subs1.unsubscribe();
    subs2.unsubscribe();
    subs3.unsubscribe();

    console.log('Timeout complete')
}, 5000);