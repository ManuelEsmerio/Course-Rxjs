import { fromEvent, Observable } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { map, debounceTime, pluck, mergeAll, mergeMap, switchMap } from 'rxjs/operators';

import { ResponseUserGitHub, Item } from '../interface';

const body = document.querySelector('body');
const textInput = document.createElement('input');
const orderList = document.createElement('ol');
body.append(textInput, orderList);


const showUser = (users:Item[]) => {
    orderList.innerHTML = '';
    users.map(item => {
        const li = document.createElement('li');
        const img = document.createElement('img');
        const a = document.createElement('a');

        img.src = item.avatar_url;

        a.href = item.html_url;
        a.text = 'Visualizar pagina';
        a.target = '_blank';

        li.append(img);
        li.append(` ${item.login} `);
        li.append(a);
        orderList.append(li);
    })
}

// Streams
const input$ = fromEvent<KeyboardEvent>(textInput, 'keyup');

// input$.pipe(
//     debounceTime<KeyboardEvent>(600),
//     pluck<KeyboardEvent, "target", string>('target','value'),
//     // pluck<KeyboardEvent,string>('target', 'value'),
//     map<string, Observable<ResponseUserGitHub>>( value =>  ajax.getJSON(`https://api.github.com/search/users?q=${value}`)),
//     mergeAll<Observable<ResponseUserGitHub>>(),
//     pluck<ResponseUserGitHub, "items">('items')
// ).subscribe(resp => (console.log('resp sub:',resp[0])));

input$.pipe(
    debounceTime<KeyboardEvent>(600),
    pluck('target','value'),
    // pluck<KeyboardEvent,string>('target', 'value'),
    map( value =>  ajax.getJSON(`https://api.github.com/search/users?q=${value}`)),
    mergeAll<Observable<ResponseUserGitHub>>(),
    pluck<ResponseUserGitHub, "items">('items')
)
// .subscribe( showUser );


const url = 'https://httpbin.org/delay/1?arg=';

input$.pipe(
    pluck('target', 'value'),
    switchMap(value => ajax.getJSON( url + value))
).subscribe(console.log)