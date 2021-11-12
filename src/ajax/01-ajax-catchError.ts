import { of } from 'rxjs';
import { ajax, AjaxError } from 'rxjs/ajax'
import { map, pluck, catchError } from 'rxjs/operators'


const url = 'https://api.github.com/usersasas?per_page=5';

const manageError = ( resp: Response) => {
    if (!resp.ok) {
        throw new Error( resp.statusText );
    }

    return resp;
}

const catchErrors = (err:AjaxError) => {
    console.warn( 'error en:', err.message);
    return of([]);
};

console.log("Inicio");
const users = ajax( url ).pipe(
    pluck('response'),
    catchError( catchErrors )
    // map(response => response.response)
)
.subscribe({
    next: response => console.log('users:',response),
    error: err => console.log(err),
    complete: () => console.log('complete')
});
console.log("Fin");


console.log(users);
// const fetchPromise = fetch(url);
//  Promise Simple
// fetchPromise
// .then( manageError )
// .then( resp => resp.json())
// .then( data => console.log('data:',data))
// .catch( err => console.warn('Error en usuarios', err))