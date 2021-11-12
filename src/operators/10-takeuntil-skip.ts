import { fromEvent, interval } from 'rxjs';
import { map, tap, takeUntil, skip } from 'rxjs/operators'

const button = document.createElement('button');
button.innerHTML = 'Pausar';

document.querySelector('body').append(button);

const interval$ = interval(1000);
const clickPausa$ = fromEvent(button, 'click')
.pipe(
    tap(() => console.log("tap antes de skip")),
    skip(3),
    tap(() => console.log("tap despues de skip"))
);

interval$
.pipe(
    takeUntil(clickPausa$)
)
.subscribe({
    next: value => console.log(value),
    complete: () => console.log("complete")
});

