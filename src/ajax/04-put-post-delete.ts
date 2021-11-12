import { of } from 'rxjs';
import { catchError } from 'rxjs/operators'
import { ajax, AjaxError } from 'rxjs/ajax'


const url = 'https://httpbin.org/delay/1';


// ajax.put(url,{
//     id:1,
//     name:'Manuel Esmerio'
// },{
//     token: 'ABC123'
// }).subscribe(console.log)


ajax({
    url,
    method: 'POST',
    headers:{
        token:'aBC125sdd4fDGsd'
    },
    body:{
        id:1,
        name:'Manuel Esmerio'
    }
}).subscribe(console.log)