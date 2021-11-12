import { Observable, Observer, Subject } from 'rxjs';

const observer:Observer<any> = {
    next: value => console.log('next: ', value),
    error: error => console.warn('error: ', error),
    complete: () => console.info('complete')
};


const intervalo$ = new Observable<number>(subs => {
    const interval = setInterval( () => subs.next( Math.random() ), 1000);

    return ()  => {
        clearInterval(interval)
        console.log('interval destroy');
    };
    
});

/** 
 * 1- El casteo multiple
 * 2- Es un observer
 * 3- Subject (Permite mandar como argumento al subscribe)
 * 4- Next, Error y Complete
 */
const subject$ = new Subject();

const intervalSubscribe = intervalo$.subscribe( subject$ )

const sub1 = subject$.subscribe( observer );
const sub2 = subject$.subscribe( observer );

setTimeout(() => {
    subject$.next(10);
    intervalSubscribe.unsubscribe();
},4500);

// const sub1 = intervalo$.subscribe(rnd => console.log('subs 1:', rnd));
// const sub2 = intervalo$.subscribe(rnd => console.log('subs 2:', rnd));
