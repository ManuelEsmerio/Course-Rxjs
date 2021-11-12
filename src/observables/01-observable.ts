import { Observable, Observer } from 'rxjs';

const observer:Observer<any> = {
    next: value => console.log('Siguiente [next]: ', value),
    error: error => console.warn('Error: ', error),
    complete: () => console.info('Complete')
}

// const obs$ = Observable.create();
const obs$ = new Observable<string>( subs => {
    subs.next('Hola');
    subs.next('Mundo');

    subs.next('Hola');
    subs.next('Mundo');

    // throw error
    // const a = undefined;
    // a.name = 'Manuel';

    subs.complete();
});


obs$.subscribe( observer);

// obs$.subscribe(
//     value => console.log('next: ', value),
//     error => console.warn('error: ', error),
//     () => console.info('Complete')
// );