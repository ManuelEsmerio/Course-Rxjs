import { endWith, pluck, startWith } from "rxjs";
import { ajax } from "rxjs/ajax";



const loadingDiv = document.createElement('div');
loadingDiv.classList.add('loading');
loadingDiv.innerHTML = 'Cargando...';

const body = document.querySelector('body');



//stream
ajax.getJSON('https://reqres.in/api/users?page=2?delay=6')
.pipe(
    startWith(true),
    // pluck('data'),endWith(false)
    // endWith(false)
)
.subscribe(resp => {
    if (resp === true) {
        body.append( loadingDiv );
    }else{
        // console.log("Dentro del else");
        document.querySelector('.loading').remove();
    }

    console.log(resp)
});