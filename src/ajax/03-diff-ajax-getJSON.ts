import { of } from 'rxjs';
import { catchError } from 'rxjs/operators'
import { ajax, AjaxError } from 'rxjs/ajax'


const url = 'https://httpbinafsa.org/delay/1';
// const url = 'https://api.github.com/users?per_page=5';

const obs$ = ajax.getJSON( url );
const obs2$ = ajax( url );


const manageError = ( response:AjaxError ) => {
    console.warn('error:', response.message);
    return of({
        ok:false,
        users:[]
    })
}


// obs$.pipe(
//     catchError( manageError )
// ).subscribe({
//     next: data => console.log('Json: ', data)
// });

// obs2$.pipe(
//     catchError( manageError )
// ).subscribe({
//     next: data => console.log('ajax: ', data)
// })

obs$.pipe(
    catchError( manageError )
).subscribe({
    next: data => console.log('Json: ', data),
    error: err => console.warn('error en sub:',err),
    complete: () => console.log('complete')
});

// obs2$.subscribe({
//     next: data => console.log('ajax: ', data)
// });