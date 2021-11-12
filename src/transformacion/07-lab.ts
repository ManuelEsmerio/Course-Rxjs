import { fromEvent, of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { tap, map, mergeMap, pluck, catchError, switchMap, exhaustMap } from 'rxjs/operators';

interface Login{
    email:string,
    password:string
}

// Helper
const httpClientLogin = (login:Login) => ajax.post('https://reqres.in/api/login?delay=1',login)
.pipe(
    pluck('response', 'token'),
    catchError(err => of('xxxx'))
)


// HTML
const form = document.createElement('form');
const inputEmail = document.createElement('input');
const inputPassword = document.createElement('input');
const buttonSubmit = document.createElement('button');

// Config HTML
inputEmail.type = 'email';
inputEmail.placeholder = 'Email';
inputEmail.value = 'eve.holt@reqres.in';

inputPassword.type = 'password';
inputPassword.placeholder = 'Password';
inputPassword.value = 'cityslicka';

buttonSubmit.innerHTML = 'Submit';

form.append(inputEmail, inputPassword, buttonSubmit);
document.querySelector('body').append(form);

// Streams
const submitForm$ = fromEvent<SubmitEvent>(form, 'submit')
.pipe(
    tap(ev => ev.preventDefault()),
    map<SubmitEvent, Login>(ev => ({
        email:ev.target[0].value,
        password:ev.target[1].value
    })),
    exhaustMap( httpClientLogin )
);

submitForm$.subscribe({
    next: token => {
        if (token !== 'xxxx') {
            console.log(`Bienvenido al sistema. [token: ${token}]`);
        }
        else{
            console.warn("Usuario no valido.")
        }
    }
})