import { fromEvent } from "rxjs";
import { pluck, map, tap } from 'rxjs/operators'


const text = document.createElement('div');
text.innerHTML = `
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ac velit luctus mauris tincidunt ultrices at ut purus. Phasellus aliquam et erat vel elementum. Nulla dignissim, neque at tincidunt lacinia, tellus justo accumsan ligula, vitae lobortis dui tellus ut eros. Donec bibendum, eros vitae faucibus aliquam, nisl arcu gravida nulla, at luctus orci massa non nulla. Proin dignissim ipsum a finibus venenatis. Sed interdum metus eu tellus ullamcorper, ut finibus lorem feugiat. Aliquam sed feugiat magna. Nullam dapibus ex at libero commodo dapibus.
    <br><br>
    Etiam eleifend sodales lobortis. Proin non dictum tellus, viverra sagittis enim. Duis mollis velit vitae magna semper, nec lacinia diam pretium. Etiam finibus neque fermentum arcu dignissim, a ullamcorper purus dictum. Suspendisse rhoncus luctus fringilla. Donec vel pulvinar ante. Donec id massa quam. Vivamus sed nulla aliquet lacus efficitur imperdiet sed at ipsum. Donec eget mauris ut ex convallis vulputate. Suspendisse tempor scelerisque velit, eu dignissim lectus venenatis ut.
    <br><br>
    Proin viverra dictum nunc et euismod. Curabitur eu risus consequat, convallis lorem ut, scelerisque neque. Proin id eleifend nisi. In elit sapien, vulputate et vulputate in, condimentum quis est. Suspendisse potenti. Curabitur gravida imperdiet ante in scelerisque. Vestibulum accumsan imperdiet urna at aliquam. Aenean fringilla ligula ac nunc eleifend, eu pulvinar urna lacinia. Quisque egestas nisi non justo gravida, vel tincidunt sapien malesuada.
    <br><br>
    Morbi cursus volutpat arcu. Nullam mollis magna nec odio bibendum, non accumsan dolor efficitur. Duis dignissim augue pharetra, eleifend metus id, pretium sapien. Donec tristique fringilla sodales. Fusce consectetur volutpat justo. In leo neque, gravida eget scelerisque vel, suscipit eu lorem. Morbi rutrum imperdiet erat nec dapibus.
    <br><br>
    Morbi dignissim ultricies justo, non vestibulum odio vehicula vel. Suspendisse sagittis turpis nec nisi auctor, vestibulum aliquet libero auctor. Fusce in mollis justo, id rutrum leo. Etiam eget eleifend nulla. Pellentesque et felis et urna vulputate bibendum ut ac ligula. Nulla facilisi. Vivamus aliquet risus sit amet tortor vehicula, ac efficitur justo ultricies. In hac habitasse platea dictumst. Aliquam sem libero, fermentum et arcu eu, euismod efficitur turpis. In vel egestas felis, vitae consectetur justo.
    <br><br>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ac velit luctus mauris tincidunt ultrices at ut purus. Phasellus aliquam et erat vel elementum. Nulla dignissim, neque at tincidunt lacinia, tellus justo accumsan ligula, vitae lobortis dui tellus ut eros. Donec bibendum, eros vitae faucibus aliquam, nisl arcu gravida nulla, at luctus orci massa non nulla. Proin dignissim ipsum a finibus venenatis. Sed interdum metus eu tellus ullamcorper, ut finibus lorem feugiat. Aliquam sed feugiat magna. Nullam dapibus ex at libero commodo dapibus.
    <br><br>
    Etiam eleifend sodales lobortis. Proin non dictum tellus, viverra sagittis enim. Duis mollis velit vitae magna semper, nec lacinia diam pretium. Etiam finibus neque fermentum arcu dignissim, a ullamcorper purus dictum. Suspendisse rhoncus luctus fringilla. Donec vel pulvinar ante. Donec id massa quam. Vivamus sed nulla aliquet lacus efficitur imperdiet sed at ipsum. Donec eget mauris ut ex convallis vulputate. Suspendisse tempor scelerisque velit, eu dignissim lectus venenatis ut.
    <br><br>
    Proin viverra dictum nunc et euismod. Curabitur eu risus consequat, convallis lorem ut, scelerisque neque. Proin id eleifend nisi. In elit sapien, vulputate et vulputate in, condimentum quis est. Suspendisse potenti. Curabitur gravida imperdiet ante in scelerisque. Vestibulum accumsan imperdiet urna at aliquam. Aenean fringilla ligula ac nunc eleifend, eu pulvinar urna lacinia. Quisque egestas nisi non justo gravida, vel tincidunt sapien malesuada.
    <br><br>
    Morbi cursus volutpat arcu. Nullam mollis magna nec odio bibendum, non accumsan dolor efficitur. Duis dignissim augue pharetra, eleifend metus id, pretium sapien. Donec tristique fringilla sodales. Fusce consectetur volutpat justo. In leo neque, gravida eget scelerisque vel, suscipit eu lorem. Morbi rutrum imperdiet erat nec dapibus.
    <br><br>
    Morbi dignissim ultricies justo, non vestibulum odio vehicula vel. Suspendisse sagittis turpis nec nisi auctor, vestibulum aliquet libero auctor. Fusce in mollis justo, id rutrum leo. Etiam eget eleifend nulla. Pellentesque et felis et urna vulputate bibendum ut ac ligula. Nulla facilisi. Vivamus aliquet risus sit amet tortor vehicula, ac efficitur justo ultricies. In hac habitasse platea dictumst. Aliquam sem libero, fermentum et arcu eu, euismod efficitur turpis. In vel egestas felis, vitae consectetur justo.
`;

const body = document.querySelector('body');

body.append(text);


const progresBar = document.createElement('div');
progresBar.classList.add('progress-bar');

body.append(progresBar);



// Calcular porcentaje scroll
const calcularPorcentajeScroll = (event) => {
    const { clientHeight, scrollHeight, scrollTop } = event.target.documentElement;
    // console.log((scrollTop / (scrollHeight - clientHeight)) * 100);
    return (scrollTop / (scrollHeight - clientHeight)) * 100; 
}


// Streams
const scroll$ = fromEvent<Event>(document, 'scroll');

scroll$
.pipe(
    map( calcularPorcentajeScroll ),
    tap(console.log)
)
// .subscribe();
.subscribe(porcentaje => {
    progresBar.style.width = `${porcentaje}%`
})