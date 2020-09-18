import { fromEventPattern } from 'rxjs';

function addClickHandler(handler:any) {
  document.addEventListener('click', handler);
}

function removeClickHandler(handler:any) {
  document.removeEventListener('click', handler);
}

const clicks = fromEventPattern(
  addClickHandler,
  removeClickHandler
);
clicks.subscribe(x => console.log(x));