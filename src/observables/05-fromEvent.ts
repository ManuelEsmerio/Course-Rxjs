import { fromEvent, Observer } from 'rxjs';


/**
 * Eventos del DOM
 */

const src1$ = fromEvent<PointerEvent>(document, 'click');
const src2$ = fromEvent<KeyboardEvent>(document, 'keyup');

const observer:Observer<any>  = {
    next: val => console.log('next:', val),
    error: null,
    complete: () => console.log('complete Observer')
};

src1$.subscribe( ({ x, y }) => {
    console.log('Coordenada Y:', y);
    console.log('Coordenada X:', x)
} );
src2$.subscribe( ({ key }) => {
    console.log(key);
} );